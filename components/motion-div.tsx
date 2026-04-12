"use client";

import {
  type CSSProperties,
  type ReactNode,
  useEffect,
  useEffectEvent,
  useRef,
} from "react";

// This wrapper adds scroll-linked motion and staged reveal while respecting reduced motion.
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

export function MotionDiv({
  children,
  className,
  delay = 0,
  distance = 28,
  rotate = 0,
  reveal = true,
  scale = 0,
  style,
  xDistance = 0,
}: MotionDivProps) {
  const ref = useRef<HTMLDivElement>(null);
  const visibleRef = useRef(false);
  const reducedMotionRef = useRef(false);

  const applyMotion = useEffectEvent(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    if (reducedMotionRef.current) {
      element.style.opacity = "1";
      element.style.transform = "translate3d(0, 0, 0)";
      return;
    }

    const rect = element.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const progress = (viewportHeight - rect.top) / (viewportHeight + rect.height);
    const clamped = Math.min(1, Math.max(0, progress));
    const centered = clamped - 0.5;

    const parallaxY = centered * distance * -2;
    const parallaxX = centered * xDistance * -2;
    const parallaxRotate = centered * rotate * -2;
    const centeredScaleBoost =
      scale > 0 ? (0.5 - Math.abs(centered)) * scale * 2 : 0;
    const revealOffset = reveal && !visibleRef.current ? 28 : 0;

    element.style.opacity = reveal ? (visibleRef.current ? "1" : "0") : "1";
    element.style.transform =
      `translate3d(${parallaxX}px, ${parallaxY + revealOffset}px, 0) ` +
      `rotate(${parallaxRotate}deg) scale(${1 + centeredScaleBoost})`;
  });

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const syncMotionPreference = () => {
      reducedMotionRef.current = mediaQuery.matches;
      applyMotion();
    };

    syncMotionPreference();
    mediaQuery.addEventListener("change", syncMotionPreference);

    element.style.willChange = "transform, opacity";
    element.style.transition =
      "transform 720ms cubic-bezier(0.22, 1, 0.36, 1), opacity 640ms ease";
    element.style.transitionDelay = `${delay}ms`;

    let frameId = 0;

    const scheduleMotionFrame = () => {
      if (frameId) {
        return;
      }

      frameId = window.requestAnimationFrame(() => {
        frameId = 0;
        applyMotion();
      });
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          visibleRef.current = true;
          scheduleMotionFrame();
        } else if (!reveal) {
          visibleRef.current = false;
          scheduleMotionFrame();
        }
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    observer.observe(element);
    applyMotion();

    window.addEventListener("scroll", scheduleMotionFrame, { passive: true });
    window.addEventListener("resize", scheduleMotionFrame);

    return () => {
      observer.disconnect();
      mediaQuery.removeEventListener("change", syncMotionPreference);
      window.removeEventListener("scroll", scheduleMotionFrame);
      window.removeEventListener("resize", scheduleMotionFrame);

      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, [delay, reveal]);

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
