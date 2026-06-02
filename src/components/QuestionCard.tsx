import type { MouseEvent } from "react";
import styles from "@/app/page.module.css";
import { gameConfig, type QuizQuestion } from "@/lib/gameConfig";

type OptionView = {
  label: string;
  originalIndex: number;
};

type AnswerState = "idle" | "retry" | "correct" | "wrong";

type Props = {
  currentQuestion: QuizQuestion;
  currentIndex: number;
  answerState: AnswerState;
  selectedWrong: number | null;
  isHighScoreQuestion: boolean;
  visibleHint: boolean;
  visibleAnswer: boolean;
  optionOrder: OptionView[];
  onAnswer: (originalIndex: number, event: MouseEvent<HTMLButtonElement>) => void;
};

export function QuestionCard({
  currentQuestion,
  currentIndex,
  answerState,
  selectedWrong,
  isHighScoreQuestion,
  visibleHint,
  visibleAnswer,
  optionOrder,
  onAnswer,
}: Props) {
  return (
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
              <div
                className={styles.wrongTimerFill}
                style={{ animationDuration: `${gameConfig.timings.wrongNextDelayMs}ms` }}
              />
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
            ]
              .filter(Boolean)
              .join(" ");

            return (
              <button
                className={classNames}
                key={`${currentQuestion.word}-${option.originalIndex}`}
                onClick={(event) => onAnswer(option.originalIndex, event)}
                disabled={answerState === "correct" || answerState === "wrong"}
              >
                <span>{option.label}</span>
              </button>
            );
          })}
        </div>
      </article>
    </section>
  );
}
