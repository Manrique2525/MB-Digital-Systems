"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useTracking } from "@/components/hooks/useTracking";

let lastTrackedPath: string | null = null;

export function PageViewTracker() {
  const pathname = usePathname();
  const { trackPageView } = useTracking();

  useEffect(() => {
    if (lastTrackedPath === pathname) return;
    lastTrackedPath = pathname;
    trackPageView();
  }, [pathname, trackPageView]);

  return null;
}
