"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { gameConfig, quizQuestions, type ButtonVariant, type QuizQuestion } from "@/lib/gameConfig";
import styles from "./page.module.css";

declare global {
  interface Window {
    webkitAudioContext?: typeof AudioContext;
  }
}

type Screen = "intro" | "playing" | "complete";
type AnswerState = "idle" | "retry" | "correct" | "wrong";

type RuntimeSettings = {
  soundEnabled: boolean;
  clickParticlesEnabled: boolean;
  showHint: boolean;
  showAnswer: boolean;
  autoHintForHighScoreRetry: boolean;
  highScoreRetryEnabled: boolean;
};

type OptionView = {
  label: string;
  originalIndex: number;
};

type Particle = {
  id: string;
  x: number;
  y: number;
  tx: number;
  ty: number;
  color: string;
  size: number;
};

const initialSettings: RuntimeSettings = { ...gameConfig.features };
const particleColors = ["#00a0d8", "#00ccff", "#006ea0", "#00bbf0", "#0078b0"];

function shuffle<T>(items: T[]) {
  const next = [...items];
  for (let i = next.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [next[i], next[j]] = [next[j], next[i]];
  }
  return next;
}

function variantClass(variant: ButtonVariant) {
  return `${styles.actionButton} ${styles[variant]}`;
}

function ActionButton({
  variant,
  children,
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: ButtonVariant;
}) {
  return (
    <button className={`${variantClass(variant)} ${className}`} {...props}>
      {children}
    </button>
  );
}

export default function Home() {
  const [screen, setScreen] = useState<Screen>("intro");
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [settings, setSettings] = useState<RuntimeSettings>(initialSettings);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [optionOrder, setOptionOrder] = useState<OptionView[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answerState, setAnswerState] = useState<AnswerState>("idle");
  const [selectedWrong, setSelectedWrong] = useState<number | null>(null);
  const [autoHintActive, setAutoHintActive] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const [message, setMessage] = useState<{ text: string; type: "correct" | "wrong" } | null>(null);
  const [scorePopup, setScorePopup] = useState("");
  const [playerName, setPlayerName] = useState("");
  const [particles, setParticles] = useState<Particle[]>([]);
  const completionCardRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<AudioContext | null>(null);
  const timersRef = useRef<number[]>([]);

  const currentQuestion = questions[currentIndex];
  const totalQuestions = questions.length || Math.min(gameConfig.questionCount, quizQuestions.length);
  const progress = totalQuestions ? ((currentIndex + (screen === "complete" ? 1 : 0)) / totalQuestions) * 100 : 0;

  const clearTimers = useCallback(() => {
    timersRef.current.forEach((timer) => window.clearTimeout(timer));
    timersRef.current = [];
  }, []);

  const addTimer = useCallback((fn: () => void, delay: number) => {
    const timer = window.setTimeout(fn, delay);
    timersRef.current.push(timer);
    return timer;
  }, []);

  const playTone = useCallback(
    (type: "click" | "correct" | "wrong" | "start" | "complete") => {
      if (!settings.soundEnabled || typeof window === "undefined") return;
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (!AudioContextClass) return;
      const context = audioRef.current ?? new AudioContextClass();
      audioRef.current = context;
      if (context.state === "suspended") void context.resume();

      const osc = context.createOscillator();
      const gain = context.createGain();
      const now = context.currentTime;
      const map = {
        click: [520, 0.06],
        correct: [880, 0.16],
        wrong: [150, 0.25],
        start: [440, 0.25],
        complete: [720, 0.45],
      } as const;
      const [frequency, duration] = map[type];
      osc.frequency.setValueAtTime(frequency, now);
      osc.type = type === "wrong" ? "sawtooth" : "sine";
      gain.gain.setValueAtTime(0.001, now);
      gain.gain.exponentialRampToValueAtTime(type === "wrong" ? 0.18 : 0.12, now + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, now + duration);
      osc.connect(gain);
      gain.connect(context.destination);
      osc.start(now);
      osc.stop(now + duration);
    },
    [settings.soundEnabled],
  );

  const burstParticles = useCallback((x: number, y: number, count: number) => {
    if (!settings.clickParticlesEnabled) return;
    const now = Date.now();
    const created = Array.from({ length: count }, (_, index) => {
      const angle = (Math.PI * 2 * index) / count + Math.random() * 0.35;
      const distance = 40 + Math.random() * 160;
      return {
        id: `${now}-${index}-${Math.random()}`,
        x,
        y,
        tx: Math.cos(angle) * distance,
        ty: Math.sin(angle) * distance,
        color: particleColors[Math.floor(Math.random() * particleColors.length)],
        size: 3 + Math.random() * 8,
      };
    });
    setParticles((prev) => [...prev, ...created]);
    window.setTimeout(() => {
      setParticles((prev) => prev.filter((particle) => !created.some((item) => item.id === particle.id)));
    }, 1200);
  }, [settings.clickParticlesEnabled]);

  const resetQuestionState = useCallback((question: QuizQuestion) => {
    setOptionOrder(shuffle(question.options.map((label, originalIndex) => ({ label, originalIndex }))));
    setAnswerState("idle");
    setSelectedWrong(null);
    setAutoHintActive(false);
    setRetryCount(0);
    setMessage(null);
    setScorePopup("");
  }, []);

  const startGame = useCallback(() => {
    clearTimers();
    const selected = shuffle(quizQuestions).slice(0, Math.min(gameConfig.questionCount, quizQuestions.length));
    setQuestions(selected);
    setCurrentIndex(0);
    setScore(0);
    resetQuestionState(selected[0]);
    setScreen("playing");
    playTone("start");
    burstParticles(window.innerWidth / 2, window.innerHeight / 2, 44);
  }, [burstParticles, clearTimers, playTone, resetQuestionState]);

  const moveNext = useCallback(() => {
    setCurrentIndex((index) => {
      const nextIndex = index + 1;
      if (nextIndex >= questions.length) {
        setScreen("complete");
        playTone("complete");
        burstParticles(window.innerWidth / 2, window.innerHeight / 2, 90);
        return index;
      }
      resetQuestionState(questions[nextIndex]);
      return nextIndex;
    });
  }, [burstParticles, playTone, questions, resetQuestionState]);

  const showTransientMessage = useCallback((text: string, type: "correct" | "wrong") => {
    setMessage({ text, type });
    addTimer(
      () => setMessage(null),
      type === "correct" ? gameConfig.timings.messageCorrectMs : gameConfig.timings.messageWrongMs,
    );
  }, [addTimer]);

  const isHighScoreQuestion = useMemo(() => {
    return Boolean(currentQuestion && currentQuestion.score >= gameConfig.scoring.highScoreMin);
  }, [currentQuestion]);

  const visibleHint = Boolean(currentQuestion && (settings.showHint || autoHintActive));
  const visibleAnswer = Boolean(currentQuestion && settings.showAnswer);

  const handleAnswer = useCallback(
    (originalIndex: number, event: React.MouseEvent<HTMLButtonElement>) => {
      if (!currentQuestion || answerState === "correct" || answerState === "wrong") return;
      if (answerState === "retry" && selectedWrong === originalIndex) return;
      playTone("click");

      const correct = originalIndex === currentQuestion.correct;
      if (correct) {
        const gained = currentQuestion.score * gameConfig.scoring.correctScoreMultiplier;
        setAnswerState("correct");
        setScore((value) => value + gained);
        setScorePopup(`+${gained}`);
        showTransientMessage("정답!", "correct");
        playTone("correct");
        burstParticles(event.clientX, event.clientY, 55);
        addTimer(() => setScorePopup(""), gameConfig.timings.scorePopupMs);
        addTimer(moveNext, gameConfig.timings.correctNextDelayMs);
        return;
      }

      setSelectedWrong(originalIndex);
      showTransientMessage("오답!", "wrong");
      playTone("wrong");

      const canRetry =
        settings.highScoreRetryEnabled &&
        settings.autoHintForHighScoreRetry &&
        currentQuestion.score >= gameConfig.scoring.highScoreMin &&
        retryCount < gameConfig.scoring.highScoreRetryCount;

      if (canRetry) {
        setRetryCount((value) => value + 1);
        setAutoHintActive(true);
        setAnswerState("retry");
        addTimer(() => setSelectedWrong(null), gameConfig.timings.retryUnlockDelayMs);
        return;
      }

      setAnswerState("wrong");
      addTimer(moveNext, gameConfig.timings.wrongNextDelayMs);
    },
    [
      addTimer,
      answerState,
      burstParticles,
      currentQuestion,
      moveNext,
      playTone,
      retryCount,
      selectedWrong,
      settings.autoHintForHighScoreRetry,
      settings.highScoreRetryEnabled,
      showTransientMessage,
    ],
  );

  const updateSetting = (key: keyof RuntimeSettings, value: boolean) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  const saveResult = async () => {
    if (!completionCardRef.current || !playerName.trim()) return;
    const html2canvas = (await import("html2canvas")).default;
    const canvas = await html2canvas(completionCardRef.current, {
      backgroundColor: null,
      scale: 2,
    });
    const link = document.createElement("a");
    const stamp = new Date().toISOString().replace(/[-:T]/g, "").slice(0, 14);
    link.download = `${playerName.trim()}_ENGLISH_WORD_QUIZ_${score}_${stamp}.jpg`;
    link.href = canvas.toDataURL("image/jpeg", 0.95);
    link.click();
  };

  useEffect(() => () => clearTimers(), [clearTimers]);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (screen !== "intro" && screen !== "playing") return;
      burstParticles(event.clientX, event.clientY, 10);
    };
    window.addEventListener("click", onClick);
    return () => window.removeEventListener("click", onClick);
  }, [burstParticles, screen]);

  return (
    <main className={styles.page}>
      <div className={`${styles.bgOverlay} ${answerState === "wrong" ? styles.darken : ""}`} />

      {screen !== "intro" && (
        <>
          <div className={styles.progressWrap}>
            <div className={styles.progressTrack}>
              <div className={styles.progressFill} style={{ width: `${Math.min(progress, 100)}%` }} />
            </div>
          </div>
          <header className={styles.hud}>
            <div>문제 {Math.min(currentIndex + 1, totalQuestions)} / {totalQuestions}</div>
            <div className={styles.hudTitle}>{gameConfig.appTitle}</div>
            <div>점수 : {score}</div>
            <ActionButton variant={gameConfig.buttons.settings} onClick={() => setSettingsOpen(true)}>
              설정
            </ActionButton>
          </header>
        </>
      )}

      {screen === "intro" && (
        <section className={styles.introScreen}>
          <div className={styles.introRing}>
            <h1>{gameConfig.appTitle}</h1>
          </div>
          <div className={styles.introActions}>
            <ActionButton variant={gameConfig.buttons.start} className={styles.startButton} onClick={startGame}>
              시작
            </ActionButton>
            <ActionButton variant={gameConfig.buttons.settings} onClick={() => setSettingsOpen(true)}>
              설정
            </ActionButton>
            {gameConfig.githubUrl && (
              <a className={variantClass(gameConfig.buttons.github)} href={gameConfig.githubUrl} target="_blank" rel="noreferrer">
                GitHub
              </a>
            )}
          </div>
        </section>
      )}

      {screen === "playing" && currentQuestion && (
        <section className={styles.gameContainer}>
          <article className={`${styles.questionCard} ${styles.active}`}>
            <div className={styles.questionHeader}>문제 {currentIndex + 1}</div>
            <div className={styles.wordFrame}>
              <div className={styles.wordDisplay}>{currentQuestion.word}</div>
              <div className={styles.wordQuestion}>[{currentQuestion.phonetic}]</div>
              <div className={styles.metaRow}>
                <span>배점 {currentQuestion.score}</span>
                <span>{isHighScoreQuestion ? "고득점 문제: 오답 시 힌트와 재도전 1회" : "오답 시 바로 실패 처리"}</span>
              </div>
              {(visibleHint || visibleAnswer) && (
                <div className={styles.assistBox}>
                  {visibleHint && <p>{currentQuestion.hint}</p>}
                  {visibleAnswer && <p>정답: {currentQuestion.options[currentQuestion.correct]}</p>}
                </div>
              )}
              {answerState === "wrong" && (
                <div className={styles.wrongTimerBar}>
                  <div className={styles.wrongTimerFill} />
                </div>
              )}
            </div>
            <div className={styles.optionsGrid}>
              {optionOrder.map((option) => {
                const isCorrect = option.originalIndex === currentQuestion.correct;
                const isSelectedWrong = selectedWrong === option.originalIndex;
                const revealWrong = answerState === "wrong";
                const classNames = [
                  styles.optionButton,
                  answerState === "correct" && isCorrect ? styles.correct : "",
                  isSelectedWrong ? styles.wrong : "",
                  revealWrong && isCorrect ? styles.revealCorrect : "",
                  revealWrong && !isCorrect ? styles.dimmed : "",
                ].filter(Boolean).join(" ");
                return (
                  <button
                    className={classNames}
                    key={`${currentQuestion.word}-${option.originalIndex}`}
                    onClick={(event) => handleAnswer(option.originalIndex, event)}
                    disabled={answerState === "correct" || answerState === "wrong"}
                  >
                    <span>{option.label}</span>
                  </button>
                );
              })}
            </div>
          </article>
        </section>
      )}

      {screen === "complete" && (
        <section className={styles.completionScreen}>
          <div className={styles.completionCard} ref={completionCardRef}>
            <h2>{gameConfig.completionTitle}</h2>
            <div className={styles.completionScore}>최종 점수: {score}</div>
            <div className={styles.completionDate}>
              {new Date().toLocaleString("ko-KR", { dateStyle: "medium", timeStyle: "short" })}
            </div>
            <input
              className={styles.nameInput}
              value={playerName}
              onChange={(event) => setPlayerName(event.target.value)}
              maxLength={20}
              placeholder="이름을 입력하세요"
            />
            <div className={styles.completionActions}>
              <ActionButton variant={gameConfig.buttons.save} onClick={saveResult} disabled={!playerName.trim()}>
                이미지 저장
              </ActionButton>
              <ActionButton variant={gameConfig.buttons.restart} onClick={startGame}>
                다시 시작
              </ActionButton>
            </div>
          </div>
        </section>
      )}

      {message && <div className={`${styles.messageOverlay} ${styles[message.type]}`}>{message.text}</div>}
      {scorePopup && <div className={styles.scorePopup}>{scorePopup}</div>}

      {settingsOpen && (
        <div className={styles.settingsOverlay} role="dialog" aria-modal="true" aria-label="게임 설정">
          <section className={styles.settingsPanel}>
            <div className={styles.settingsHeader}>
              <h2>설정</h2>
              <ActionButton variant="ghost" onClick={() => setSettingsOpen(false)}>
                닫기
              </ActionButton>
            </div>
            <div className={styles.settingList}>
              <label><input type="checkbox" checked={settings.showHint} onChange={(event) => updateSetting("showHint", event.target.checked)} /> 힌트 항상 표시</label>
              <label><input type="checkbox" checked={settings.showAnswer} onChange={(event) => updateSetting("showAnswer", event.target.checked)} /> 정답 항상 표시</label>
              <label><input type="checkbox" checked={settings.autoHintForHighScoreRetry} onChange={(event) => updateSetting("autoHintForHighScoreRetry", event.target.checked)} /> 고득점 문제 오답 시 자동 힌트</label>
              <label><input type="checkbox" checked={settings.highScoreRetryEnabled} onChange={(event) => updateSetting("highScoreRetryEnabled", event.target.checked)} /> 고득점 문제 재도전 허용</label>
              <label><input type="checkbox" checked={settings.soundEnabled} onChange={(event) => updateSetting("soundEnabled", event.target.checked)} /> 효과음 사용</label>
              <label><input type="checkbox" checked={settings.clickParticlesEnabled} onChange={(event) => updateSetting("clickParticlesEnabled", event.target.checked)} /> 클릭 파티클 사용</label>
            </div>
            <p className={styles.settingNote}>
              점수 기준과 타이밍은 src/lib/gameConfig.ts 한 곳에서 관리됩니다. 수정할 수는 있지만, 스테이지 밸런스가 바뀌므로 변경하지 않는 것을 권장합니다.
            </p>
          </section>
        </div>
      )}

      <div className={styles.particleLayer}>
        {particles.map((particle) => (
          <span
            className={styles.particle}
            key={particle.id}
            style={{
              left: particle.x,
              top: particle.y,
              width: particle.size,
              height: particle.size,
              background: particle.color,
              "--tx": `${particle.tx}px`,
              "--ty": `${particle.ty}px`,
            } as React.CSSProperties}
          />
        ))}
      </div>
    </main>
  );
}
