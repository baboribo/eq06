import { useState } from "react";
import styles from "@/app/page.module.css";

type Props = {
  onSubmit: (password: string) => void;
  onCancel: () => void;
  message?: string;
};

export function DeveloperModePrompt({ onSubmit, onCancel, message }: Props) {
  const [password, setPassword] = useState("");

  return (
    <div className={styles.settingsOverlay} role="dialog" aria-modal="true" aria-label="개발자 모드 PIN 입력">
      <section className={styles.settingsPanel} style={{ maxWidth: 420 }}>
        <div className={styles.settingsHeader}>
          <h2>개발자 모드 잠금 해제</h2>
          <button className={`${styles.actionButton} ${styles.ghost}`} onClick={onCancel}>
            닫기
          </button>
        </div>
        <div className={styles.devModeSection}>
          <label className={styles.devModeField}>
            <span>4자리 PIN</span>
            <input
              className={styles.devModeInput}
              type="password"
              maxLength={4}
              value={password}
              onChange={(event) => setPassword(event.target.value.replace(/[^0-9]/g, ""))}
              placeholder="0000"
              inputMode="numeric"
              autoFocus
            />
          </label>
          {message && <div className={styles.devModeNotice}>{message}</div>}
          <div className={styles.devModeButtonRow}>
            <button className={`${styles.actionButton} ${styles.secondary}`} onClick={() => onSubmit(password)}>
              잠금 해제
            </button>
            <button className={`${styles.actionButton} ${styles.ghost}`} onClick={onCancel}>
              취소
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
