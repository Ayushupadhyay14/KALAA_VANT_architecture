import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PROJECTS } from "@/data/projects";
import ProjectDetailClient from "./ProjectDetailClient";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | Studio Kalaa Vant",
    };
  }

  return {
    title: `${project.title} | Studio Kalaa Vant Architecture`,
    description: `${project.shortDescription} Located in ${project.location}. Designed by Studio Kalaa Vant.`,
    openGraph: {
      title: `${project.title} — Studio Kalaa Vant`,
      description: project.shortDescription,
      images: [
        {
          url: project.heroImage,
          width: 1800,
          height: 1000,
          alt: project.title,
        },
      ],
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailClient project={project} />;
}
