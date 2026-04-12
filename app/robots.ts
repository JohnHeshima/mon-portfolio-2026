import type { MetadataRoute } from "next";

// The portfolio is public, so crawling stays fully open.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
  };
}
