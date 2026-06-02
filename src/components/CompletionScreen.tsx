import type { RefObject } from "react";
import styles from "@/app/page.module.css";
import { ActionButton } from "@/components/ActionButton";
import { gameConfig } from "@/lib/gameConfig";

type Props = {
  score: number;
  playerName: string;
  onNameChange: (value: string) => void;
  onSaveResult: () => Promise<void>;
  onRestart: () => void;
  completionCardRef: RefObject<HTMLDivElement | null>;
};

export function CompletionScreen({
  score,
  playerName,
  onNameChange,
  onSaveResult,
  onRestart,
  completionCardRef,
}: Props) {
  return (
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
          onChange={(event) => onNameChange(event.target.value)}
          maxLength={20}
          placeholder="이름을 입력하세요"
        />
        <div className={styles.completionActions}>
          <ActionButton variant="primary" onClick={onSaveResult} disabled={!playerName.trim()}>
            이미지 저장
          </ActionButton>
          <ActionButton variant="secondary" onClick={onRestart}>
            다시 시작
          </ActionButton>
        </div>
      </div>
    </section>
  );
}
