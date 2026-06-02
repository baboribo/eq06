import styles from "@/app/page.module.css";
import { ActionButton, variantClass } from "@/components/ActionButton";
import { gameConfig } from "@/lib/gameConfig";

type Props = {
  startGame: () => void;
  openSettings: () => void;
};

export function IntroScreen({ startGame, openSettings }: Props) {
  return (
    <section className={styles.introScreen}>
      <div className={styles.introRing}>
        <h1>{gameConfig.appTitle}</h1>
      </div>
      <div className={styles.introActions}>
        <ActionButton variant={gameConfig.buttons.start} className={styles.startButton} onClick={startGame}>
          시작
        </ActionButton>
        <ActionButton variant={gameConfig.buttons.settings} onClick={openSettings}>
          설정
        </ActionButton>
        {gameConfig.githubUrl && (
          <a className={variantClass(gameConfig.buttons.github)} href={gameConfig.githubUrl} target="_blank" rel="noreferrer">
            GitHub
          </a>
        )}
      </div>
    </section>
  );
}
