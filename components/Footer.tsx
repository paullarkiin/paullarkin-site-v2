import { siteConfig } from "@/lib/site";
import { LiveClock } from "@/components/Clock";

export function Footer() {
  return (
    <div className="flex flex-col w-full items-center mb-24">
      <footer className="flex w-full max-w-3xl justify-between px-6 pt-4 text-sm text-text-muted sm:px-16">
        <span>{siteConfig.copyright}</span>
        <span className="flex items-center gap-2">
          {siteConfig.status} <LiveClock />
        </span>
      </footer>
    </div>
  );
}
