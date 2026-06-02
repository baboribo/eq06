import type { QuizQuestion } from "@/lib/gameConfig";

export type OptionView = {
  label: string;
  originalIndex: number;
};

export type AnswerState = "idle" | "retry" | "correct" | "wrong";

export type Particle = {
  id: string;
  x: number;
  y: number;
  tx: number;
  ty: number;
  color: string;
  size: number;
};

const particleColors = ["#00a0d8", "#00ccff", "#006ea0", "#00bbf0", "#0078b0"];

export function shuffle<T>(items: T[]) {
  const next = [...items];
  for (let i = next.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [next[i], next[j]] = [next[j], next[i]];
  }
  return next;
}

export function createParticles(x: number, y: number, count: number): Particle[] {
  const now = Date.now();
  return Array.from({ length: count }, (_, index) => {
    const angle = (Math.PI * 2 * index) / count + Math.random() * 0.35;
    const distance = 40 + Math.random() * 160;

    return {
      id: `${now}-${index}-${Math.random()}`,
      x,
      y,
      tx: Math.cos(angle) * distance,
      ty: Math.sin(angle) * distance,
      color: particleColors[Math.floor(Math.random() * particleColors.length)],
      size: 3 + Math.random() * 8,
    };
  });
}
