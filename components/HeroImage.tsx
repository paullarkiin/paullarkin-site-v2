"use client";

import { useState } from "react";

const placeholder = (
  <div className="w-full aspect-video rounded-2xl bg-surface-higher" />
);

export function HeroImage({ src, alt }: { src: string; alt: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) return placeholder;

  return (
    <img
      src={src}
      alt={alt ?? "image"}
      width={2400}
      height={1600}
      loading="eager"
      className="w-full rounded-2xl"
      onError={() => setFailed(true)}
    />
  );
}
