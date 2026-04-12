"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { logEvent } from "firebase/analytics";
import { getFirebaseAnalytics } from "@/lib/firebase-client";

// Initializes Firebase Analytics and records route changes in the App Router.
export function FirebaseAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    let isCancelled = false;

    async function trackPageView() {
      const analytics = await getFirebaseAnalytics();

      if (!analytics || isCancelled) {
        return;
      }

      const search = searchParams.toString();
      const pagePath = search ? `${pathname}?${search}` : pathname;

      logEvent(analytics, "page_view", {
        page_title: document.title,
        page_location: window.location.href,
        page_path: pagePath,
      });
    }

    void trackPageView();

    return () => {
      isCancelled = true;
    };
  }, [pathname, searchParams]);

  return null;
}
