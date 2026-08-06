import { WorkGallery } from "@/components/WorkGallery";
import { GalleryItems } from "@/lib/gallery";

export default function Work() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-background font-sans">
      <main className="flex w-full max-w-3xl flex-1 flex-col px-6 py-32 sm:items-start sm:px-16">
        <header className="mb-14 w-full max-w-2xl">
          <div className="mb-4 flex items-center gap-3">
            <h1 className="text-sm font-normal text-text-muted">Work</h1>
          </div>
          <p className="text-base leading-relaxed text-text">
            A collection of interface design, product concepts, and side
            projects from across my design and engineering work.
          </p>
        </header>
        <WorkGallery items={GalleryItems} />
      </main>
    </div>
  );
}
