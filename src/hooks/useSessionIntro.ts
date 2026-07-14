"use client";

import { useCallback, useState } from "react";

/**
 * Preloader shows immediately on first paint (no ready-gate flash).
 * Completing skips it for the rest of this page load only.
 */
export function useSessionIntro() {
  const [shouldShowIntro, setShouldShowIntro] = useState(true);

  const markComplete = useCallback(() => {
    setShouldShowIntro(false);
  }, []);

  return { shouldShowIntro, markComplete };
}
