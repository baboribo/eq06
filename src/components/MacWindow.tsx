"use client";

import { motion } from "framer-motion";
import { useCallback, useRef, useState, type CSSProperties, type ReactNode } from "react";
import styles from "@/app/page.module.css";

type Props = {
  title: string;
  subtitle?: string;
  showSubtitle?: boolean;
  minimized: boolean;
  maximized: boolean;
  onClose: () => void;
  onMinimize: () => void;
  onMaximize: () => void;
  onMore?: () => void;
  moreAriaLabel?: string;
  onResizeStart?: () => void;
  onResizeEnd?: (width: number, height: number) => void;
  titleBarPointerDown?: (event: React.PointerEvent<HTMLDivElement>) => void;
  titleBarPointerMove?: (event: React.PointerEvent<HTMLDivElement>) => void;
  titleBarPointerUp?: (event: React.PointerEvent<HTMLDivElement>) => void;
  titleBarPointerCancel?: (event: React.PointerEvent<HTMLDivElement>) => void;
  style?: CSSProperties;
  children: ReactNode;
};

export function MacWindow({
  title,
  subtitle,
  showSubtitle,
  minimized,
  maximized,
  onClose,
  onMinimize,
  onMaximize,
  onMore,
  moreAriaLabel,
  onResizeStart,
  onResizeEnd,
  titleBarPointerDown,
  titleBarPointerMove,
  titleBarPointerUp,
  titleBarPointerCancel,
  style,
  children,
}: Props) {
  const [width, setWidth] = useState(700);
  const [height, setHeight] = useState(500);
  const resizeInfo = useRef<{ startX: number; startY: number; startWidth: number; startHeight: number } | null>(null);

  const startResize = useCallback((event: React.PointerEvent<HTMLDivElement>) => {
    event.preventDefault();
    onResizeStart?.();
    resizeInfo.current = {
      startX: event.clientX,
      startY: event.clientY,
      startWidth: width,
      startHeight: height,
    };
    document.addEventListener("pointermove", handleResizeMove);
    document.addEventListener("pointerup", handleResizeEnd);
  }, [width, height, onResizeStart]);

  const handleResizeMove = (event: PointerEvent) => {
    if (!resizeInfo.current) return;
    const dx = event.clientX - resizeInfo.current.startX;
    const dy = event.clientY - resizeInfo.current.startY;
    const newWidth = Math.max(400, resizeInfo.current.startWidth + dx);
    const newHeight = Math.max(300, resizeInfo.current.startHeight + dy);
    setWidth(newWidth);
    setHeight(newHeight);
  };

  const handleResizeEnd = () => {
    if (resizeInfo.current) {
      onResizeEnd?.(width, height);
    }
    resizeInfo.current = null;
    document.removeEventListener("pointermove", handleResizeMove);
    document.removeEventListener("pointerup", handleResizeEnd);
  };

  const animationVariants = {
    initial: { opacity: 0, scale: 0.9, y: 20 },
    animate: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.8, y: -40 },
    minimize: { opacity: 0, scale: 0.3, y: 500 },
    maximize: { opacity: 1, scale: 1, y: 0 },
  };

  const windowWidth = maximized ? "calc(100vw - 48px)" : `${width}px`;
  const windowHeight = maximized ? "calc(100vh - 48px)" : `${height}px`;

  if (minimized) {
    return null;
  }

  return (
    <motion.section
      className={styles.macWindow}
      style={{
        ...style,
        width: windowWidth,
        height: windowHeight,
      }}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={animationVariants}
      transition={{
        type: "spring",
        damping: 20,
        stiffness: 300,
        duration: 0.3,
      }}
      role="dialog"
      aria-label={title}
    >
      <header
        className={styles.macWindowTitleBar}
        onPointerDown={titleBarPointerDown}
        onPointerMove={titleBarPointerMove}
        onPointerUp={titleBarPointerUp}
        onPointerCancel={titleBarPointerCancel}
      >
        <div className={styles.macWindowControls}>
          <button
            className={`${styles.macCircle} ${styles.macClose}`}
            onClick={onClose}
            onPointerDown={(event) => event.stopPropagation()}
            aria-label="닫기"
          />
          <button
            className={`${styles.macCircle} ${styles.macMinimize}`}
            onClick={onMinimize}
            onPointerDown={(event) => event.stopPropagation()}
            aria-label="최소화"
          />
          <button
            className={`${styles.macCircle} ${styles.macMaximize}`}
            onClick={onMaximize}
            onPointerDown={(event) => event.stopPropagation()}
            aria-label={maximized ? "복원" : "최대화"}
          />
        </div>

        <div className={styles.macWindowHeaderContent}>
          <div className={styles.macWindowTitle}>{title}</div>
          {showSubtitle && subtitle ? <div className={styles.macWindowSubtitle}>{subtitle}</div> : null}
        </div>

        <div className={styles.macWindowHeaderActions}>
          {onMore ? (
            <button
              className={styles.macMoreButton}
              onClick={onMore}
              onPointerDown={(event) => event.stopPropagation()}
              aria-label={moreAriaLabel ?? "더보기"}
            >
              ⋯
            </button>
          ) : null}
        </div>
      </header>

      <div className={styles.macWindowContent}>{children}</div>

      {!maximized && (
        <div className={styles.macWindowResizeHandle} onPointerDown={startResize} />
      )}
    </motion.section>
  );
}
