"use client";

import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "herna-intro-seen";

export function useSessionIntro() {
  const [shouldShowIntro, setShouldShowIntro] = useState(true);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const seen = sessionStorage.getItem(STORAGE_KEY);
      setShouldShowIntro(!seen);
    } catch {
      setShouldShowIntro(true);
    }
    setReady(true);
  }, []);

  const markComplete = useCallback(() => {
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
    setShouldShowIntro(false);
  }, []);

  return { shouldShowIntro, ready, markComplete };
}
