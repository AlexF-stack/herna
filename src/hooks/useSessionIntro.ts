"use client";

import { useCallback, useEffect, useState } from "react";

/**
 * Preloader runs once per full page load (while the experience mounts).
 * Skip / completion only lasts for this visit — refresh shows it again.
 */
export function useSessionIntro() {
  const [shouldShowIntro, setShouldShowIntro] = useState(true);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setShouldShowIntro(true);
    setReady(true);
  }, []);

  const markComplete = useCallback(() => {
    setShouldShowIntro(false);
  }, []);

  return { shouldShowIntro, ready, markComplete };
}
