import { useCallback, useEffect, useMemo, useRef, useState, type ChangeEvent, type PointerEvent } from "react";
import { MacWindow } from "@/components/MacWindow";
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
  minimized: boolean;
  maximized: boolean;
  onClose: () => void;
  onMinimize: () => void;
  onMaximize: () => void;
  onSetScore: (score: number) => void;
  onRevealAll: () => void;
  onRevealHint: () => void;
  onRevealAnswer: () => void;
  onCompleteWithCurrentScore: () => void;
  onCompleteWithZeroScore: () => void;
  onCompleteWithMaxScore: () => void;
  onCompleteWithCustomScore: (score: number) => void;
  onSkipToNext: () => void;
  onJumpToLast: () => void;
  onToggleBypassDelay: () => void;
  onToggleAutoCorrectNext: () => void;
  onToggleAutoPlay: () => void;
  onSetAutoPlaySpeed: (speed: number) => void;
  onResetGame: () => void;
  autoCorrectNext: boolean;
  bypassWrongDelay: boolean;
  autoPlayEnabled: boolean;
  autoPlaySpeed: number;
  showHint: boolean;
  showAnswer: boolean;
};

const tabs = [
  { key: "quick", label: "Quick" },
  { key: "flow", label: "Flow" },
  { key: "view", label: "View" },
];

export function DeveloperModeWindow({
  state,
  minimized,
  maximized,
  onClose,
  onMinimize,
  onMaximize,
  onSetScore,
  onRevealAll,
  onRevealHint,
  onRevealAnswer,
  onCompleteWithCurrentScore,
  onCompleteWithZeroScore,
  onCompleteWithMaxScore,
  onCompleteWithCustomScore,
  onSkipToNext,
  onJumpToLast,
  onToggleBypassDelay,
  onToggleAutoCorrectNext,
  onToggleAutoPlay,
  onSetAutoPlaySpeed,
  onResetGame,
  autoCorrectNext,
  bypassWrongDelay,
  autoPlayEnabled,
  autoPlaySpeed,
  showHint,
  showAnswer,
}: Props) {
  const [position, setPosition] = useState({ x: 64, y: 64 });
  const [customScore, setCustomScore] = useState(String(state.score));
  const [activeTab, setActiveTab] = useState<"quick" | "flow" | "view">("quick");
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const dragInfo = useRef<{ startX: number; startY: number; startLeft: number; startTop: number } | null>(null);

  useEffect(() => {
    setCustomScore(String(state.score));
  }, [state.score]);

  const startDrag = useCallback(
    (event: PointerEvent<HTMLDivElement>) => {
      if (maximized) return;
      dragInfo.current = {
        startX: event.clientX,
        startY: event.clientY,
        startLeft: position.x,
        startTop: position.y,
      };
      event.currentTarget.setPointerCapture(event.pointerId);
    },
    [maximized, position],
  );

  const onDrag = useCallback(
    (event: PointerEvent<HTMLDivElement>) => {
      if (!dragInfo.current) return;
      const dx = event.clientX - dragInfo.current.startX;
      const dy = event.clientY - dragInfo.current.startY;
      setPosition({ x: Math.max(16, dragInfo.current.startLeft + dx), y: Math.max(16, dragInfo.current.startTop + dy) });
    },
    [],
  );

  const endDrag = useCallback(() => {
    dragInfo.current = null;
  }, []);



  const onToggleMore = useCallback(() => {
    setShowMoreMenu((prev) => !prev);
  }, []);

  const speedLabel = useMemo(() => {
    if (autoPlaySpeed <= 400) return "초고속";
    if (autoPlaySpeed <= 900) return "빠름";
    if (autoPlaySpeed <= 1400) return "보통";
    return "느림";
  }, [autoPlaySpeed]);

  const windowStyle = {
    left: maximized ? 24 : position.x,
    top: maximized ? 24 : position.y,
    width: maximized ? "calc(100vw - 48px)" : undefined,
    height: maximized ? "calc(100vh - 48px)" : undefined,
  } as const;

  return (
    <MacWindow
      title="Developer Mode"
      subtitle="macOS 스타일 개발자 창"
      showSubtitle
      minimized={minimized}
      maximized={maximized}
      onClose={onClose}
      onMinimize={onMinimize}
      onMaximize={onMaximize}
      onMore={onToggleMore}
      moreAriaLabel="추가 옵션"
      titleBarPointerDown={startDrag}
      titleBarPointerMove={onDrag}
      titleBarPointerUp={endDrag}
      titleBarPointerCancel={endDrag}
      style={windowStyle}
    >
      <div className={styles.macWindowTabs}>
        {tabs.map((tab) => (
          <button
            key={tab.key}
            type="button"
            className={`${styles.macWindowTab} ${activeTab === tab.key ? styles.macWindowTabActive : ""}`}
            onClick={() => setActiveTab(tab.key as "quick" | "flow" | "view")}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {showMoreMenu && (
        <div className={styles.macWindowMorePanel}>
          <strong>추가 옵션</strong>
          <p>이 버튼은 macOS 창에 더보기 아이콘을 노출하고, 필요한 경우 세부 팬이나 도움말 메뉴를 확장할 수 있게 합니다.</p>
        </div>
      )}

      <div className={styles.devModeBody}>
        {activeTab === "quick" && (
          <>
            <div className={styles.devModeSection}>
              <div className={styles.devModeSectionTitle}>즉시 완료</div>
              <p className={styles.devModeSectionDescription}>
                화면을 바로 종료하거나 점수를 조정해서 결과 페이지로 이동합니다.
              </p>
              <div className={styles.devModeActionGrid}>
                <button className={styles.devModeButton} onClick={onCompleteWithZeroScore}>
                  0점으로 완료
                </button>
                <button className={styles.devModeButton} onClick={onCompleteWithCurrentScore}>
                  현재 점수로 완료
                </button>
                <button className={styles.devModeButton} onClick={onCompleteWithMaxScore}>
                  최대 점수로 완료
                </button>
              </div>
            </div>

            <div className={styles.devModeSection}>
              <div className={styles.devModeSectionTitle}>점수 조정</div>
              <p className={styles.devModeSectionDescription}>
                현재 점수를 즉시 바꾸거나, 원하는 값으로 결과 페이지를 넘길 수 있습니다.
              </p>
              <div className={styles.devModeFieldRow}>
                <input
                  className={styles.devModeInput}
                  type="number"
                  min={0}
                  value={customScore}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setCustomScore(e.target.value)}
                  placeholder="직접 점수 입력"
                />
                <button
                  className={styles.devModeButton}
                  onClick={() => onSetScore(Math.max(0, Number(customScore) || 0))}
                >
                  점수만 설정
                </button>
              </div>
              <button
                className={styles.devModeButton}
                onClick={() => onCompleteWithCustomScore(Math.max(0, Number(customScore) || 0))}
              >
                지정 점수로 완료
              </button>
            </div>
          </>
        )}

        {activeTab === "flow" && (
          <>
            <div className={styles.devModeSection}>
              <div className={styles.devModeSectionTitle}>자동 진행</div>
              <p className={styles.devModeSectionDescription}>
                자동으로 정답을 선택하고 다음 문제로 이동합니다. 속도를 조절해 테스트 페이스를 바꿔보세요.
              </p>
              <div className={styles.devModeToggleList}>
                <label className={styles.toggleSwitch}>
                  <span>자동 진행</span>
                  <input type="checkbox" checked={autoPlayEnabled} onChange={() => onToggleAutoPlay()} />
                  <span className={styles.toggleTrack} />
                </label>
              </div>
              <div className={styles.devModeFieldRow}>
                <label className={styles.devModeLabel} htmlFor="autoPlaySpeed">
                  속도 ({speedLabel})
                </label>
                <span className={styles.devModeValue}>{autoPlaySpeed}ms</span>
              </div>
              <input
                id="autoPlaySpeed"
                className={styles.devModeRange}
                type="range"
                min={200}
                max={1800}
                step={100}
                value={autoPlaySpeed}
                onChange={(event) => onSetAutoPlaySpeed(Number(event.target.value))}
                disabled={!autoPlayEnabled}
              />
            </div>

            <div className={styles.devModeSection}>
              <div className={styles.devModeSectionTitle}>게임 흐름 제어</div>
              <p className={styles.devModeSectionDescription}>
                지연 우회와 빠른 다음 이동을 통해 단계별 흐름을 확인할 수 있습니다.
              </p>
              <div className={styles.devModeToggleList}>
                <label className={styles.toggleSwitch}>
                  <span>오답 후 빠른 다음</span>
                  <input type="checkbox" checked={autoCorrectNext} onChange={() => onToggleAutoCorrectNext()} />
                  <span className={styles.toggleTrack} />
                </label>
                <label className={styles.toggleSwitch}>
                  <span>지연 우회</span>
                  <input type="checkbox" checked={bypassWrongDelay} onChange={() => onToggleBypassDelay()} />
                  <span className={styles.toggleTrack} />
                </label>
              </div>
              <div className={styles.devModeActionGrid}>
                <button className={styles.devModeToggleButton} onClick={onSkipToNext}>
                  다음 문제로 이동
                </button>
                <button className={styles.devModeToggleButton} onClick={onJumpToLast}>
                  마지막 문제로 이동
                </button>
              </div>
            </div>
          </>
        )}

        {activeTab === "view" && (
          <>
            <div className={styles.devModeSection}>
              <div className={styles.devModeSectionTitle}>개발자 보기</div>
              <p className={styles.devModeSectionDescription}>
                힌트와 정답 표시를 제어하여 문제를 디버깅하거나 빠르게 확인할 수 있습니다.
              </p>
              <div className={styles.devModeToggleList}>
                <label className={styles.toggleSwitch}>
                  <span>힌트 항상</span>
                  <input type="checkbox" checked={showHint} onChange={() => onRevealHint()} />
                  <span className={styles.toggleTrack} />
                </label>
                <label className={styles.toggleSwitch}>
                  <span>정답 항상</span>
                  <input type="checkbox" checked={showAnswer} onChange={() => onRevealAnswer()} />
                  <span className={styles.toggleTrack} />
                </label>
              </div>
              <div className={styles.devModeActionGrid}>
                <button className={styles.devModeToggleButton} onClick={onRevealAll}>
                  힌트+정답 표시
                </button>
                <button className={styles.devModeToggleButton} onClick={onResetGame}>
                  즉시 재시작
                </button>
              </div>
              <div className={styles.devModeHint}>
                현재 표시 상태를 조정하면 그대로 게임 진행 중에도 테스트할 수 있습니다.
              </div>
            </div>
          </>
        )}
      </div>
    </MacWindow>
  );
}
