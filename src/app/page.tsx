"use client";

import { AnimatePresence } from "framer-motion";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { gameConfig, quizQuestions, type QuizQuestion } from "@/lib/gameConfig";
import { createParticles, shuffle, type OptionView, type Particle } from "@/lib/quizHelpers";
import { CompletionScreen } from "@/components/CompletionScreen";
import { DeveloperModePrompt } from "@/components/DeveloperModePrompt";
import { DeveloperModeWindow, type DeveloperModeState } from "@/components/DeveloperModeWindow";
import { IntroScreen } from "@/components/IntroScreen";
import { ParticleLayer } from "@/components/ParticleLayer";
import { QuestionCard } from "@/components/QuestionCard";
import { QuizHeader } from "@/components/QuizHeader";
import { SettingsDialog } from "@/components/SettingsDialog";
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

const initialSettings: RuntimeSettings = { ...gameConfig.features };

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
  const [developerModeUnlocked, setDeveloperModeUnlocked] = useState(false);
  const [developerWindowOpen, setDeveloperWindowOpen] = useState(false);
  const [developerWindowMinimized, setDeveloperWindowMinimized] = useState(false);
  const [developerWindowMaximized, setDeveloperWindowMaximized] = useState(false);
  const [developerPromptOpen, setDeveloperPromptOpen] = useState(false);
  const [developerPromptError, setDeveloperPromptError] = useState("");
  const [bypassWrongDelay, setBypassWrongDelay] = useState(false);
  const [autoCorrectNext, setAutoCorrectNext] = useState(false);
  const [autoPlayEnabled, setAutoPlayEnabled] = useState(false);
  const [autoPlaySpeed, setAutoPlaySpeed] = useState(900);
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
    const created = createParticles(x, y, count);
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
    (originalIndex: number, event?: React.MouseEvent<HTMLButtonElement>) => {
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
        if (event) {
          burstParticles(event.clientX, event.clientY, 55);
        }
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
      const nextDelay = developerModeUnlocked && bypassWrongDelay ? 0 : gameConfig.timings.wrongNextDelayMs;
      const delayMs = developerModeUnlocked && autoCorrectNext ? 100 : nextDelay;
      addTimer(moveNext, delayMs);
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

  useEffect(() => {
    if (!autoPlayEnabled || screen !== "playing" || !currentQuestion || answerState !== "idle") return;

    const timer = window.setTimeout(() => {
      handleAnswer(currentQuestion.correct);
    }, autoPlaySpeed);

    return () => window.clearTimeout(timer);
  }, [autoPlayEnabled, screen, currentQuestion, answerState, autoPlaySpeed, handleAnswer]);

  const updateSetting = (key: keyof RuntimeSettings, value: boolean) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  const openDeveloperMode = () => {
    if (developerModeUnlocked) {
      setSettingsOpen(false);
      setDeveloperWindowOpen(true);
      return;
    }
    setSettingsOpen(false);
    setDeveloperPromptError("");
    setDeveloperPromptOpen(true);
  };

  const unlockDeveloperMode = (password: string) => {
    if (password === gameConfig.developer.password) {
      setDeveloperModeUnlocked(true);
      setSettingsOpen(false);
      setDeveloperPromptOpen(false);
      setDeveloperWindowOpen(true);
      setDeveloperPromptError("");
      return;
    }
    setDeveloperPromptError("PIN이 올바르지 않습니다.");
  };

  const revealDeveloperTools = () => {
    setSettings((prev) => ({ ...prev, showHint: true, showAnswer: true }));
  };

  const toggleShowHint = () => {
    setSettings((prev) => ({ ...prev, showHint: !prev.showHint }));
  };

  const toggleShowAnswer = () => {
    setSettings((prev) => ({ ...prev, showAnswer: !prev.showAnswer }));
  };

  const completeGameWithScore = useCallback(
    (targetScore: number) => {
      clearTimers();
      setScore(Math.max(0, targetScore));
      setMessage(null);
      setScorePopup("");
      setScreen("complete");
      playTone("complete");
      burstParticles(window.innerWidth / 2, window.innerHeight / 2, 90);
    },
    [burstParticles, clearTimers, playTone],
  );

  const completeGameWithCurrentScore = () => {
    completeGameWithScore(score);
  };

  const completeGameWithZeroScore = () => {
    completeGameWithScore(0);
  };

  const completeGameWithMaxScore = () => {
    const maxScore = questions.reduce((sum, question) => sum + question.score * gameConfig.scoring.correctScoreMultiplier, 0);
    completeGameWithScore(maxScore);
  };

  const completeGameWithCustomScore = (value: number) => {
    completeGameWithScore(value);
  };

  const skipToNextQuestion = () => {
    if (questions.length === 0 || currentIndex >= questions.length - 1) return;
    const nextIndex = currentIndex + 1;
    setCurrentIndex(nextIndex);
    resetQuestionState(questions[nextIndex]);
  };

  const jumpToLastQuestion = () => {
    if (questions.length === 0) return;
    const lastIndex = questions.length - 1;
    setCurrentIndex(lastIndex);
    resetQuestionState(questions[lastIndex]);
  };

  const setDeveloperScore = (value: number) => {
    setScore(value);
  };

  const toggleBypassDelay = () => {
    setBypassWrongDelay((previous) => !previous);
  };

  const toggleAutoCorrectNext = () => {
    setAutoCorrectNext((previous) => !previous);
  };

  const toggleAutoPlay = () => {
    setAutoPlayEnabled((previous) => !previous);
  };

  const setAutoPlaySpeedValue = (value: number) => {
    setAutoPlaySpeed(value);
  };

  const developerState: DeveloperModeState = {
    currentIndex,
    score,
    activeQuestionCount: totalQuestions,
    selectedWrongOption: selectedWrong !== null && optionOrder[selectedWrong] ? optionOrder[selectedWrong].label : null,
    lastAnswerCorrect: answerState === "correct" ? true : answerState === "wrong" ? false : null,
    wrongDelayMillis: gameConfig.timings.wrongNextDelayMs,
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
        <QuizHeader
          progress={progress}
          currentIndex={currentIndex}
          totalQuestions={totalQuestions}
          score={score}
          onSettingsOpen={() => setSettingsOpen(true)}
        />
      )}

      {screen === "intro" && <IntroScreen startGame={startGame} openSettings={() => setSettingsOpen(true)} />}

      {screen === "playing" && currentQuestion && (
        <QuestionCard
          currentQuestion={currentQuestion}
          currentIndex={currentIndex}
          answerState={answerState}
          selectedWrong={selectedWrong}
          isHighScoreQuestion={isHighScoreQuestion}
          visibleHint={visibleHint}
          visibleAnswer={visibleAnswer}
          optionOrder={optionOrder}
          onAnswer={handleAnswer}
          showWrongTimer={!bypassWrongDelay}
          wrongDelayMs={gameConfig.timings.wrongNextDelayMs}
        />
      )}

      {screen === "complete" && (
        <CompletionScreen
          score={score}
          playerName={playerName}
          onNameChange={setPlayerName}
          onSaveResult={saveResult}
          onRestart={startGame}
          completionCardRef={completionCardRef}
        />
      )}

      {message && <div className={`${styles.messageOverlay} ${styles[message.type]}`}>{message.text}</div>}
      {scorePopup && <div className={styles.scorePopup}>{scorePopup}</div>}

      {settingsOpen && (
        <SettingsDialog
          settings={settings}
          onUpdateSetting={updateSetting}
          onOpenDeveloperMode={openDeveloperMode}
          onClose={() => setSettingsOpen(false)}
        />
      )}

      {developerPromptOpen && (
        <DeveloperModePrompt
          message={developerPromptError || gameConfig.developer.unlockHint}
          onSubmit={unlockDeveloperMode}
          onCancel={() => setDeveloperPromptOpen(false)}
        />
      )}

      {developerWindowOpen && developerModeUnlocked && (
        <DeveloperModeWindow
          state={developerState}
          minimized={developerWindowMinimized}
          maximized={developerWindowMaximized}
          onClose={() => setDeveloperWindowOpen(false)}
          onMinimize={() => setDeveloperWindowMinimized(true)}
          onMaximize={() => setDeveloperWindowMaximized((prev) => !prev)}
          onSetScore={setDeveloperScore}
          onRevealAll={revealDeveloperTools}
          onRevealHint={toggleShowHint}
          onRevealAnswer={toggleShowAnswer}
          onCompleteWithCurrentScore={completeGameWithCurrentScore}
          onCompleteWithZeroScore={completeGameWithZeroScore}
          onCompleteWithMaxScore={completeGameWithMaxScore}
          onCompleteWithCustomScore={completeGameWithCustomScore}
          onSkipToNext={skipToNextQuestion}
          onJumpToLast={jumpToLastQuestion}
          onToggleBypassDelay={toggleBypassDelay}
          onToggleAutoCorrectNext={toggleAutoCorrectNext}
          onToggleAutoPlay={toggleAutoPlay}
          onSetAutoPlaySpeed={setAutoPlaySpeedValue}
          onResetGame={startGame}
          autoCorrectNext={autoCorrectNext}
          bypassWrongDelay={bypassWrongDelay}
          autoPlayEnabled={autoPlayEnabled}
          autoPlaySpeed={autoPlaySpeed}
          showHint={settings.showHint}
          showAnswer={settings.showAnswer}
        />
      )}

      {developerModeUnlocked && (
        <div className={styles.windowTaskbar}>
          <AnimatePresence>
            {developerWindowMinimized && (
              <div key="dev-window-minimized" className={styles.minimizedWindowItem}>
                <button
                  onClick={() => {
                    setDeveloperWindowMinimized(false);
                    setDeveloperWindowOpen(true);
                  }}
                  aria-label="Developer Mode 복원"
                >
                  ◇
                </button>
                <div className={styles.minimizedWindowLabel}>Developer</div>
              </div>
            )}
          </AnimatePresence>
        </div>
      )}

      <ParticleLayer particles={particles} />
    </main>
  );
}
