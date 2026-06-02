import type { CSSProperties } from "react";
import styles from "@/app/page.module.css";
import type { Particle } from "@/lib/quizHelpers";

type Props = {
  particles: Particle[];
};

export function ParticleLayer({ particles }: Props) {
  return (
    <div className={styles.particleLayer}>
      {particles.map((particle) => (
        <span
          className={styles.particle}
          key={particle.id}
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            background: particle.color,
            "--tx": `${particle.tx}px`,
            "--ty": `${particle.ty}px`,
          } as CSSProperties}
        />
      ))}
    </div>
  );
}
