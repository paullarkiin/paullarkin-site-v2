import { WorkGallery } from "@/components/WorkGallery";
import { Header } from "@/components/Header";
import { PageShell } from "@/components/PageShell";
import { GalleryItems } from "@/lib/gallery";

export default function Work() {
  return (
    <PageShell className="py-32 sm:items-start">
      <Header title="Work">
        <p className="mt-4 max-w-2xl text-base leading-relaxed">
          A collection of interface design, product concepts, and side projects
          from across my design and engineering work.
        </p>
      </Header>
      <WorkGallery items={GalleryItems} />
    </PageShell>
  );
}
