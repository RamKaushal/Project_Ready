import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://aioptic.dev", changeFrequency: "weekly", priority: 1 },
    { url: "https://aioptic.dev/dashboard", changeFrequency: "weekly", priority: 0.8 },
  ];
}
