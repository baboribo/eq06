import { useCallback, useEffect, useRef, useState, type ChangeEvent, type PointerEvent } from "react";
import styles from "@/app/page.module.css";

export type DeveloperModeState = {
  currentIndex: number;
  score: number;
  activeQuestionCount: number;
  selectedWrongOption: string | null;
  lastAnswerCorrect: boolean | null;
  wrongDelayMillis: number;
};

type Props = {
  state: DeveloperModeState;
  onClose: () => void;
  onSetScore: (score: number) => void;
  onRevealAll: () => void;
  onToggleBypassDelay: () => void;
  onToggleAutoCorrectNext: () => void;
  onResetGame: () => void;
  autoCorrectNext: boolean;
  bypassWrongDelay: boolean;
};

export function DeveloperModeWindow({
  state,
  onClose,
  onSetScore,
  onRevealAll,
  onToggleBypassDelay,
  onToggleAutoCorrectNext,
  onResetGame,
  autoCorrectNext,
  bypassWrongDelay,
}: Props) {
  const [position, setPosition] = useState({ x: 64, y: 64 });
  const [customScore, setCustomScore] = useState(String(state.score));
  const dragInfo = useRef<{ startX: number; startY: number; startLeft: number; startTop: number } | null>(null);

  useEffect(() => {
    setCustomScore(String(state.score));
  }, [state.score]);

  const startDrag = useCallback((event: PointerEvent<HTMLDivElement>) => {
    dragInfo.current = {
      startX: event.clientX,
      startY: event.clientY,
      startLeft: position.x,
      startTop: position.y,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  }, [position]);

  const onDrag = useCallback((event: PointerEvent<HTMLDivElement>) => {
    if (!dragInfo.current) return;
    const dx = event.clientX - dragInfo.current.startX;
    const dy = event.clientY - dragInfo.current.startY;
    setPosition({ x: Math.max(16, dragInfo.current.startLeft + dx), y: Math.max(16, dragInfo.current.startTop + dy) });
  }, []);

  const endDrag = useCallback(() => {
    dragInfo.current = null;
  }, []);

  return (
    <section
      className={styles.devModeWindow}
      style={{ left: position.x, top: position.y }}
      aria-label="개발자 도구 창"
    >
      <header
        className={styles.devModeHeader}
        onPointerDown={startDrag}
        onPointerMove={onDrag}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      >
        <div className={styles.devModeTitle}>Developer Mode</div>
        <button className={`${styles.actionButton} ${styles.ghost}`} onClick={onClose}>
          닫기
        </button>
      </header>

      <div className={styles.devModeBody}>
        <div className={styles.devModeStatus}>
          <strong>현재 상태</strong>
          <div className={styles.devModeStateGrid}>
            <div className={styles.devModeStateItem}>문제 #{state.currentIndex + 1}</div>
            <div className={styles.devModeStateItem}>점수 {state.score}</div>
            <div className={styles.devModeStateItem}>정답 지연 {state.wrongDelayMillis}ms</div>
            <div className={styles.devModeStateItem}>오토 다음 {autoCorrectNext ? "ON" : "OFF"}</div>
            <div className={styles.devModeStateItem}>지연 우회 {bypassWrongDelay ? "ON" : "OFF"}</div>
          </div>
        </div>

        <div className={styles.devModeSection}>
          <div className={styles.devModeSectionTitle}>빠른 조작</div>
          <div className={styles.devModeActions}>
            <button className={styles.devModeButton} onClick={onRevealAll}>
              모든 정답 보기
            </button>
            <button className={styles.devModeButton} onClick={onResetGame}>
              재시작
            </button>
          </div>
        </div>

        <div className={styles.devModeSection}>
          <div className={styles.devModeSectionTitle}>점수 조정</div>
          <label className={styles.devModeField}>
            <input
              className={styles.devModeInput}
              type="number"
              value={customScore}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setCustomScore(e.target.value)}
              min={0}
            />
          </label>
          <button
            className={styles.devModeButton}
            onClick={() => {
              const score = Math.max(0, Number(customScore) || 0);
              onSetScore(score);
            }}
          >
            점수 설정
          </button>
        </div>

        <div className={styles.devModeSection}>
          <div className={styles.devModeSectionTitle}>게임 흐름</div>
          <div className={styles.devModeActions}>
            <button className={styles.devModeToggle} onClick={onToggleAutoCorrectNext}>
              {autoCorrectNext ? "Auto-correct 비활성화" : "Auto-correct 활성화"}
            </button>
            <button className={styles.devModeToggle} onClick={onToggleBypassDelay}>
              {bypassWrongDelay ? "지연 유지" : "지연 우회"}
            </button>
          </div>
        </div>

        <div className={styles.devModeHint}>
          개발자 창은 문제를 빠르게 반복하거나 점수를 테스트할 때 유용합니다.
        </div>
      </div>
    </section>
  );
}
