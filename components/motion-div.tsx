"use client";

import { type CSSProperties, type ReactNode } from "react";

// MotionDiv is currently a lightweight wrapper used to preserve layout hooks
// without adding scroll-linked motion or parallax effects.
type MotionDivProps = {
  children?: ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
  rotate?: number;
  reveal?: boolean;
  scale?: number;
  style?: CSSProperties;
  xDistance?: number;
};

export function MotionDiv({ children, className, style }: MotionDivProps) {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
}
