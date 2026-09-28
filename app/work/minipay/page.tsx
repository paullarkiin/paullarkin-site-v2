import type { Metadata } from "next";
import { ProjectGalleryPage } from "@/components/ProjectGalleryPage";
import { projectGalleries } from "@/lib/projectGalleries";

const project = projectGalleries.minipay;

export const metadata: Metadata = {
  title: "MiniPay | Paul Larkin",
  description: project.description,
};

export default function MiniPayPage() {
  return <ProjectGalleryPage projectId="minipay" />;
}
