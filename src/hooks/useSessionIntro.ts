"use client";

import { useCallback, useState } from "react";

const SESSION_KEY = "herna-intro-seen";

function readSeen(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return sessionStorage.getItem(SESSION_KEY) === "1";
  } catch {
    return false;
  }
}

/**
 * First visit in a tab: show the cinematic preloader.
 * After completion (or skip), hide it for the rest of the session.
 */
export function useSessionIntro() {
  const [shouldShowIntro, setShouldShowIntro] = useState(() => !readSeen());

  const markComplete = useCallback(() => {
    try {
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      /* ignore */
    }
    setShouldShowIntro(false);
  }, []);

  return { shouldShowIntro, markComplete };
}
