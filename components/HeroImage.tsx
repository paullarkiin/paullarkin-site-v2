"use client";

import { useState } from "react";
import Image from "next/image";

const placeholder = (
  <div className="w-full aspect-video rounded-lg bg-surface-higher" />
);

export function HeroImage({ src, alt }: { src: string; alt: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) return placeholder;

  return (
    <Image
      src={src}
      alt={alt}
      width={768}
      height={480}
      className="w-full h-auto rounded-lg border border-border"
      priority
      onError={() => setFailed(true)}
    />
  );
}
