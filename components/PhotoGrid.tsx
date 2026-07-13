"use client";

import Image from "next/image";

const photos = [
  { src: "/pride.webp", alt: "Pride parade" },
  { src: "/lake.webp", alt: "Lake view" },
  { src: "/hackathon.webp", alt: "Hackathon" },
];

export function PhotoGrid() {
  return (
    <div className="grid grid-cols-3 gap-2 pt-6">
      {photos.map(({ src, alt }) => (
        <div
          key={src}
          className="relative aspect-4/3 rounded-lg overflow-hidden border border-border-strong"
        >
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 33vw, 256px"
          />
        </div>
      ))}
    </div>
  );
}
