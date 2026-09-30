import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/icons/ArrowUpRightIcon";
import type {
  ComponentGalleryItem,
  GalleryItem,
  GalleryLink,
} from "@/lib/gallery";

const captionLinkClassName =
  "inline-flex items-center gap-0.5 font-medium text-text underline decoration-border underline-offset-2 transition-colors hover:decoration-text";

function CaptionLink({ link }: { link: GalleryLink }) {
  if (link.external) {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noreferrer"
        className={captionLinkClassName}
      >
        {link.label}
        <ArrowUpRightIcon className="size-3" />
      </a>
    );
  }

  return (
    <Link href={link.href} className={captionLinkClassName}>
      {link.label}
    </Link>
  );
}

function GalleryItemLink({
  link,
  caption,
}: {
  link: GalleryLink;
  caption: string;
}) {
  const className =
    "absolute inset-0 z-20 cursor-pointer rounded-[14px] focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-text sm:rounded-2xl";
  const ariaLabel = `${link.label}: ${caption}`;

  if (link.external) {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noreferrer"
        aria-label={ariaLabel}
        className={className}
      />
    );
  }

  return (
    <Link href={link.href} aria-label={ariaLabel} className={className} />
  );
}

export function WorkGallery({
  items,
}: {
  items: (GalleryItem | ComponentGalleryItem)[];
}) {
  return (
    <section
      aria-label="Selected work gallery"
      className="flex w-full min-w-0 flex-col gap-20"
    >
      {items.map((item, index) => {
        const about = item.about?.trim();
        const tech = item.tech?.trim();

        return (
          <figure key={index} className="w-full min-w-0">
            <div className="group relative w-full overflow-hidden rounded-[14px] bg-surface-higher outline-1 outline-border-strong sm:rounded-2xl">
              {(about || tech) && (
                <div className="pointer-events-none absolute bottom-4 left-4 z-10 flex flex-wrap gap-2 opacity-0 transition duration-300 sm:translate-y-2 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100">
                  {about && (
                    <div className="rounded-lg bg-surface px-3 py-2 text-sm text-text">
                      {about}
                    </div>
                  )}

                  {tech && (
                    <div className="rounded-lg bg-surface px-3 py-2 text-sm text-text">
                      {tech}
                    </div>
                  )}
                </div>
              )}

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

              {item.link && (
                <GalleryItemLink link={item.link} caption={item.caption} />
              )}
            </div>

            <figcaption className="mt-3 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center text-xs leading-4.5 text-text-muted">
              <span>{item.caption}</span>
              {item.link && (
                <>
                  <span aria-hidden="true">·</span>
                  <CaptionLink link={item.link} />
                </>
              )}
            </figcaption>
          </figure>
        );
      })}
    </section>
  );
}
