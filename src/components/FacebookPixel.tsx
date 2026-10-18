"use client";

import React, { useEffect } from "react";
import Script from "next/script";
import { SITE_CONFIG } from "@/config/site";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    _fbq?: unknown;
  }
}

export interface FbContactPayload {
  content_name?: string;
  content_category?: string;
  value?: number;
  currency?: string;
  test_event_code?: string;
}

export function trackFbContact(payload?: FbContactPayload) {
  const testEventCode = SITE_CONFIG.fbTestEventCode || "TEST84823";

  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", "Contact", {
      currency: "ARS",
      test_event_code: testEventCode,
      ...payload,
    });
  }
}

export default function FacebookPixel() {
  const pixelId = SITE_CONFIG.fbPixelId || "1713967079582707";
  const testEventCode = SITE_CONFIG.fbTestEventCode || "TEST84823";

  useEffect(() => {
    if (typeof window !== "undefined" && typeof window.fbq === "function") {
      window.fbq("track", "PageView", {
        test_event_code: testEventCode,
      });
    }
  }, [testEventCode]);

  return (
    <>
      <Script
        id="fb-pixel-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${pixelId}');
            fbq('track', 'PageView', { test_event_code: '${testEventCode}' });
          `,
        }}
      />
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  );
}
