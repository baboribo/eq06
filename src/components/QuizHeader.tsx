import styles from "@/app/page.module.css";
import { ActionButton, variantClass } from "@/components/ActionButton";
import { gameConfig } from "@/lib/gameConfig";

type Props = {
  progress: number;
  currentIndex: number;
  totalQuestions: number;
  score: number;
  onSettingsOpen: () => void;
};

export function QuizHeader({ progress, currentIndex, totalQuestions, score, onSettingsOpen }: Props) {
  return (
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
        <ActionButton variant={gameConfig.buttons.settings} onClick={onSettingsOpen}>
          설정
        </ActionButton>
      </header>
    </>
  );
}
