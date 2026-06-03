import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <div className="flex flex-col w-full items-center bg-background font-sans mb-24 ">
      <footer className="flex w-full max-w-3xl justify-between px-16 pb-16 pt-4 text-[14px] text-text-dim font-sans">
          <span>{siteConfig.copyright}</span>
          <span>{siteConfig.status}</span>
      </footer>
    </div>
  );
}
