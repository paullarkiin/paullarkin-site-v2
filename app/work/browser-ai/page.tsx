import type { Metadata } from "next";
import { ProjectGalleryPage } from "@/components/ProjectGalleryPage";
import { projectGalleries } from "@/lib/projectGalleries";

const project = projectGalleries["browser-ai"];

export const metadata: Metadata = {
  title: "Opera Browser AI | Paul Larkin",
  description: project.description,
};

export default function BrowserAIPage() {
  return <ProjectGalleryPage projectId="browser-ai" />;
}
