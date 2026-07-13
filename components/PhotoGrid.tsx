"use client";

import { useState } from "react";
import Image from "next/image";

const photos = [
  { src: "/pride.webp", alt: "Pride parade" },
  { src: "/lake.webp", alt: "Lake view" },
  { src: "/hackathon.webp", alt: "Hackathon" },
];

export function PhotoGrid() {
  const [loaded, setLoaded] = useState<boolean[]>(photos.map(() => false));

  return (
    <div className="grid grid-cols-3 gap-2 pt-12">
      {photos.map(({ src, alt }, i) => (
        <div
          key={src}
          className="relative aspect-4/3 rounded-lg overflow-hidden border border-border-strong bg-border"
        >
          <Image
            src={src}
            alt={alt}
            fill
            priority
            className={`object-cover transition-opacity duration-1000 ${loaded[i] ? "opacity-100" : "opacity-0"}`}
            sizes="(max-width: 768px) 33vw, 256px"
            onLoad={() =>
              setLoaded((prev) => prev.map((v, j) => (j === i ? true : v)))
            }
          />
        </div>
      ))}
    </div>
  );
}
