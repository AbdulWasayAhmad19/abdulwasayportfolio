"use client";

import React, { useEffect, useRef, useState } from "react";
import { useScroll } from "@/hooks/smooth-scroll/use-scroll";

const NAME = "ABDUL WASAY";
const TYPE_MS = 180; // per character, matches the pace of the reference video
const HOLD_MS = 900; // pause on the finished name at 100%
const FADE_MS = 700;

/**
 * First-visit loader modelled on the reference video: black screen, the name typed out letter by
 * letter in white, a white dot with two small red triangles jittering at the caret, and a
 * 0 → 100% counter underneath. Children are remounted once it clears so the hero entrance plays
 * after the loader, not behind it. Skipped for repeat visits in the session and reduced motion.
 */
export function Preloader({ children }: { children: React.ReactNode }) {
  const [phase, setPhase] = useState<"idle" | "running" | "leaving" | "done">("idle");
  const [typed, setTyped] = useState(0);
  const [progress, setProgress] = useState(0);
  const [jitter, setJitter] = useState({ dx: 0, dy: 0, tx: 0, ty: 0 });
  const stopScroll = useScroll((s) => s.stop);
  const startScroll = useScroll((s) => s.start);
  const nameRef = useRef<HTMLSpanElement>(null);
  const [caret, setCaret] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || sessionStorage.getItem("aw-loaded")) {
      setPhase("done");
      return;
    }
    sessionStorage.setItem("aw-loaded", "1");
    setPhase("running");
    stopScroll();

    const total = NAME.length * TYPE_MS + HOLD_MS;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = now - start;
      setTyped(Math.min(NAME.length, Math.floor(t / TYPE_MS) + 1));
      setProgress(Math.min(100, Math.round((t / (total - HOLD_MS * 0.4)) * 100)));
      // Caret cluster jitters like the particles in the video.
      const j = now / 90;
      setJitter({
        dx: Math.sin(j * 1.7) * 2,
        dy: Math.cos(j * 1.3) * 2,
        tx: Math.sin(j * 2.3 + 1) * 4,
        ty: Math.cos(j * 1.9 + 2) * 4,
      });
      if (t < total) raf = requestAnimationFrame(tick);
      else {
        setProgress(100);
        setPhase("leaving");
        setTimeout(() => {
          setPhase("done");
          startScroll();
          window.scrollTo(0, 0);
        }, FADE_MS);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      startScroll();
    };
  }, [stopScroll, startScroll]);

  // Position the caret at the right edge of the typed text.
  useEffect(() => {
    const el = nameRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const parent = el.parentElement?.getBoundingClientRect();
    if (!parent) return;
    setCaret({ x: r.right - parent.left, y: r.top - parent.top });
  }, [typed, phase]);

  const showLoader = phase === "running" || phase === "leaving";

  return (
    <>
      {showLoader && (
        <div
          role="status"
          aria-live="polite"
          aria-label={`Loading portfolio, ${progress} percent`}
          className="fixed inset-0 z-[1000] flex flex-col items-center justify-center bg-black text-white select-none"
          style={{
            opacity: phase === "leaving" ? 0 : 1,
            transition: `opacity ${FADE_MS}ms cubic-bezier(0.2, 0, 0, 1)`,
          }}
        >
          <div className="relative">
            <span
              ref={nameRef}
              className="font-sans text-[9vw] sm:text-[6.5vw] md:text-[5vw] font-medium tracking-[0.01em] leading-none whitespace-pre"
              aria-hidden="true"
            >
              {NAME.slice(0, typed)}
            </span>
            {/* Caret cluster: white dot + two red triangles, as in the reference animation */}
            <span
              className="absolute pointer-events-none"
              style={{ left: caret.x, top: caret.y, transform: "translate(0.35em, 0)" }}
              aria-hidden="true"
            >
              <span
                className="absolute block rounded-full bg-white"
                style={{ width: "0.16em", height: "0.16em", left: jitter.dx, top: jitter.dy, fontSize: "9vw" }}
              />
              <svg
                className="absolute"
                style={{ left: `calc(0.34em + ${jitter.tx}px)`, top: `calc(-0.02em + ${jitter.ty}px)`, fontSize: "9vw" }}
                width="0.13em"
                height="0.11em"
                viewBox="0 0 13 11"
              >
                <polygon points="0,0 13,5.5 0,11" fill="#e11d48" />
              </svg>
              <svg
                className="absolute"
                style={{ left: `calc(0.14em - ${jitter.tx}px)`, top: `calc(0.3em - ${jitter.ty}px)`, fontSize: "9vw" }}
                width="0.13em"
                height="0.11em"
                viewBox="0 0 13 11"
              >
                <polygon points="0,0 13,0 6.5,11" fill="#e11d48" />
              </svg>
            </span>
          </div>

          {/* 0 → 100% */}
          <div className="absolute bottom-10 left-8 right-8 sm:left-12 sm:right-12 flex items-end justify-between font-mono text-xs sm:text-sm tracking-[0.25em] uppercase text-white/70">
            <span>Loading portfolio</span>
            <span className="text-white text-3xl sm:text-5xl font-medium tabular-nums tracking-tight">{progress}%</span>
          </div>
          <div className="absolute bottom-6 left-8 right-8 sm:left-12 sm:right-12 h-px bg-white/15" aria-hidden="true">
            <div className="h-full bg-[#e11d48]" style={{ width: `${progress}%` }} />
          </div>
        </div>
      )}

      {/* Remount the page once the loader clears so entrance animations play after it. */}
      <div key={phase === "done" ? "ready" : "loading"} style={{ visibility: showLoader ? "hidden" : "visible" }}>
        {children}
      </div>
    </>
  );
}
