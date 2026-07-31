"use client";

import { useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "";

function getSessionId(): string {
  if (typeof window === "undefined") return "";
  try {
    let id = localStorage.getItem("visitor_session_id");
    if (!id) {
      id = crypto.randomUUID();
      localStorage.setItem("visitor_session_id", id);
    }
    return id;
  } catch {
    return "";
  }
}

async function apiPost(
  endpoint: string,
  data: Record<string, unknown>
): Promise<void> {
  if (!API_URL) return;
  try {
    await fetch(`${API_URL}/api/v1${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ session_id: getSessionId(), ...data }),
    });
  } catch {
    // Silently fail — never block the user
  }
}

export function useTracking() {
  const pathname = usePathname();

  const trackPageView = useCallback(() => {
    apiPost("/track/page", {
      url: pathname,
      title: typeof document !== "undefined" ? document.title : "",
      referrer:
        typeof document !== "undefined" && document.referrer
          ? document.referrer
          : null,
    });
  }, [pathname]);

  const trackEvent = useCallback(
    (
      eventType: string,
      section?: string,
      meta?: Record<string, unknown>
    ) => {
      apiPost("/track/event", { event_type: eventType, section, meta });
    },
    []
  );

  return { trackEvent, trackPageView, getSessionId };
}

export function useSectionViewOnce(
  eventType: string,
  ref: React.RefObject<HTMLElement | null>
) {
  const { trackEvent } = useTracking();
  const storageKey = `viewed_${eventType}`;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    try {
      if (sessionStorage.getItem(storageKey)) return;
    } catch {
      // storage unavailable — still fire
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          trackEvent(eventType, ref.current?.id);
          try {
            sessionStorage.setItem(storageKey, "1");
          } catch {
            // ignore
          }
          observer.disconnect();
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [eventType, ref, trackEvent, storageKey]);
}
