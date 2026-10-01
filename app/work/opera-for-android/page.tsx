import type { Metadata } from "next";
import { ProjectGalleryPage } from "@/components/ProjectGalleryPage";
import { projectGalleries } from "@/lib/projectGalleries";

const project = projectGalleries["opera-for-android"];

export const metadata: Metadata = {
  title: "Opera for Android | Paul Larkin",
  description: project.description,
};

export default function OperaForAndroidPage() {
  return <ProjectGalleryPage projectId="opera-for-android" />;
}
