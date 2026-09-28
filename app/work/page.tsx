import { WorkGallery } from "@/components/WorkGallery";
import { BackLink } from "@/components/BackLink";
import { Header } from "@/components/Header";
import { PageShell } from "@/components/PageShell";
import { projectGalleries } from "@/lib/projectGalleries";

const project = projectGalleries.other;

export default function Work() {
  return (
    <PageShell className="py-32 sm:items-start">
      <BackLink />

      <Header title={project.title}>
        <p className="mt-4 max-w-2xl text-base leading-relaxed">
          {project.description}
        </p>
      </Header>
      <WorkGallery items={project.items} />
    </PageShell>
  );
}
