import { siteConfig } from "@/lib/site";
import { LiveClock } from "@/components/Clock";

export function Footer() {
  return (
    <div className="flex flex-col w-full items-center bg-background font-sans mb-24 ">
      <footer className="flex w-full max-w-3xl justify-between px-8 sm:px-16 pt-4 text-sm text-text-muted font-sans">
        <span>{siteConfig.copyright}</span>
        <span className="flex items-center gap-2">
          {siteConfig.status} <LiveClock />
        </span>
      </footer>
    </div>
  );
}
