import type { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "@/app/page.module.css";
import type { ButtonVariant } from "@/lib/gameConfig";

type ActionButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: ButtonVariant;
  children: ReactNode;
};

export function variantClass(variant: ButtonVariant) {
  return `${styles.actionButton} ${styles[variant]}`;
}

export function ActionButton({ variant, children, className = "", ...props }: ActionButtonProps) {
  return (
    <button className={`${variantClass(variant)} ${className}`} {...props}>
      {children}
    </button>
  );
}
