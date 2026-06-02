import styles from "@/app/page.module.css";
import { ActionButton } from "@/components/ActionButton";
import { gameConfig } from "@/lib/gameConfig";

type RuntimeSettings = {
  soundEnabled: boolean;
  clickParticlesEnabled: boolean;
  showHint: boolean;
  showAnswer: boolean;
  autoHintForHighScoreRetry: boolean;
  highScoreRetryEnabled: boolean;
};

type Props = {
  settings: RuntimeSettings;
  onUpdateSetting: (key: keyof RuntimeSettings, value: boolean) => void;
  onOpenDeveloperMode: () => void;
  onClose: () => void;
};

export function SettingsDialog({ settings, onUpdateSetting, onOpenDeveloperMode, onClose }: Props) {
  return (
    <div className={styles.settingsOverlay} role="dialog" aria-modal="true" aria-label="게임 설정">
      <section className={styles.settingsPanel}>
        <div className={styles.settingsHeader}>
          <h2>설정</h2>
          <ActionButton variant="ghost" onClick={onClose}>
            닫기
          </ActionButton>
        </div>
        <div className={styles.settingList}>
          <label>
            <input type="checkbox" checked={settings.showHint} onChange={(event) => onUpdateSetting("showHint", event.target.checked)} /> 힌트 항상 표시
          </label>
          <label>
            <input type="checkbox" checked={settings.showAnswer} onChange={(event) => onUpdateSetting("showAnswer", event.target.checked)} /> 정답 항상 표시
          </label>
          <label>
            <input type="checkbox" checked={settings.autoHintForHighScoreRetry} onChange={(event) => onUpdateSetting("autoHintForHighScoreRetry", event.target.checked)} /> 고득점 문제 오답 시 자동 힌트
          </label>
          <label>
            <input type="checkbox" checked={settings.highScoreRetryEnabled} onChange={(event) => onUpdateSetting("highScoreRetryEnabled", event.target.checked)} /> 고득점 문제 재도전 허용
          </label>
          <label>
            <input type="checkbox" checked={settings.soundEnabled} onChange={(event) => onUpdateSetting("soundEnabled", event.target.checked)} /> 효과음 사용
          </label>
          <label>
            <input type="checkbox" checked={settings.clickParticlesEnabled} onChange={(event) => onUpdateSetting("clickParticlesEnabled", event.target.checked)} /> 클릭 파티클 사용
          </label>
        </div>
        <p className={styles.settingNote}>
          점수 기준과 타이밍은 src/lib/gameConfig.ts 한 곳에서 관리됩니다. 수정할 수는 있지만, 스테이지 밸런스가 바뀌므로 변경하지 않는 것을 권장합니다.
        </p>
        <div className={styles.devModePanel}>
          <button className={`${styles.actionButton} ${styles.secondary}`} onClick={onOpenDeveloperMode}>
            개발자 모드 잠금 해제
          </button>
          <p className={styles.devModeNotice}>{gameConfig.developer.unlockHint}</p>
        </div>
      </section>
    </div>
  );
}
