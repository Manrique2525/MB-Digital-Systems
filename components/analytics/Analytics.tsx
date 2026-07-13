"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

export function Analytics() {
  useEffect(() => {
    if (!GA_ID && !META_PIXEL_ID) return;

    if (GA_ID) {
      const script = document.createElement("script");
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      function gtag(...args: unknown[]) {
        window.dataLayer!.push(args);
      }
      gtag("js", new Date());
      gtag("config", GA_ID, { send_page_view: false });
      window.gtag = gtag;
    }

    if (META_PIXEL_ID) {
      const fbScript = document.createElement("script");
      fbScript.async = true;
      fbScript.src = "https://connect.facebook.net/en_US/fbevents.js";
      document.head.appendChild(fbScript);

      /* eslint-disable @typescript-eslint/no-explicit-any */
      (window as any).fbq = (window as any).fbq || function (...args: unknown[]) {
        (window as any).fbq.q = (window as any).fbq.q || [];
        (window as any).fbq.q.push(args);
      };
      (window as any).fbq("init", META_PIXEL_ID);
      (window as any).fbq("track", "PageView");
    }
  }, []);

  return null;
}
