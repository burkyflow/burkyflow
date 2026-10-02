import type { ReactNode } from "react";

// Subtle fade-up on scroll. Respects prefers-reduced-motion automatically.
export function Reveal({
  children,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <div className={`reveal ${className ?? ""}`}>
      {children}
    </div>
  );
}
