import { MetadataRoute } from "next";
import { PROJECTS, SITE_URL } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL;

  const projectUrls = PROJECTS.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    ...projectUrls,
  ];
}
