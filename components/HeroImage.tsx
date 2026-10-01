import Image from "next/image";

type HeroImageProps = {
  src?: string;
  alt: string;
  width?: number;
  height?: number;
};

export function HeroImage({
  src,
  alt,
  width = 2400,
  height = 1920,
}: HeroImageProps) {
  return src ? (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      preload
      sizes="(max-width: 639px) calc(100vw - 48px), (max-width: 767px) calc(100vw - 128px), 640px"
      className="h-auto w-full rounded-2xl"
    />
  ) : (
    <div className="w-full aspect-video rounded-lg bg-surface-higher" />
  );
}
