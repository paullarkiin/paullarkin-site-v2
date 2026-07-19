export function HeroImage({ src, alt }: { src?: string; alt: string }) {
  return src ? (
    <img
      src={src}
      alt={alt}
      width={2400}
      height={1600}
      loading="eager"
      className="w-full rounded-2xl"
    />
  ) : (
    <div className="w-full aspect-video rounded-lg bg-surface-higher" />
  );
}
