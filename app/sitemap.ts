import type { MetadataRoute } from "next";

// Minimal sitemap until more public routes are introduced.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "/",
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
