"use client";

import { useEffect, useState, useCallback } from "react";

export const INTRO_NAME = "johnny zheng";

type Phase = "typing" | "fading" | "ready";

export function useIntro() {
  const [typed, setTyped] = useState("");
  const [phase, setPhase] = useState<Phase>("typing");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPhase("ready");
    }
  }, []);

  useEffect(() => {
    if (phase !== "typing") return;

    if (typed.length < INTRO_NAME.length) {
      const id = window.setTimeout(() => {
        setTyped(INTRO_NAME.slice(0, typed.length + 1));
      }, 50);
      return () => window.clearTimeout(id);
    }

    const id = window.setTimeout(() => setPhase("fading"), 400);
    return () => window.clearTimeout(id);
  }, [phase, typed]);

  useEffect(() => {
    if (phase === "ready") return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [phase]);

  const finishFade = useCallback(() => {
    setPhase((current) => (current === "fading" ? "ready" : current));
  }, []);

  return {
    typed,
    ready: phase === "ready",
    showIntro: phase === "typing" || phase === "fading",
    fading: phase === "fading",
    showTypedName: phase === "typing" || phase === "fading",
    finishFade,
  };
}
