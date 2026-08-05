import Image from "next/image";
import type { ComponentGalleryItem, GalleryItem } from "@/lib/gallery";

export function WorkGallery({
  items,
}: {
  items: (GalleryItem | ComponentGalleryItem)[];
}) {
  return (
    <section
      aria-label="Selected work gallery"
      className="flex w-full min-w-0 flex-col gap-20 sm:gap-20"
    >
      {items.map((item, index) => (
        <figure key={index} className="w-full min-w-0">
          <div className="group relative w-full overflow-hidden rounded-[14px] bg-surface-higher outline-1 outline-border-strong sm:rounded-2xl">
            {/* Bottom information */}
            <div className="pointer-events-none absolute bottom-4 left-4 z-10 translate-y-2 rounded-lg bg-surface px-3 py-2 text-sm text-text opacity-0 transition duration-200 group-hover:translate-y-0 group-hover:opacity-100">
              {item.about || "Hello"}
            </div>

            {"component" in item ? (
              <item.component />
            ) : (
              <Image
                src={item.src}
                width={item.width}
                height={item.height}
                alt={item.alt}
                preload={index === 0}
                sizes="(max-width: 639px) calc(100vw - 48px), (max-width: 767px) calc(100vw - 128px), 640px"
                className="block h-auto w-full"
              />
            )}
          </div>
          <figcaption className="mt-3 text-center text-xs leading-[18px] text-text-muted">
            {item.caption}
          </figcaption>
        </figure>
      ))}
    </section>
  );
}
