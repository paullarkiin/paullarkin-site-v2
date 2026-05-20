import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <div className="flex flex-col items-center bg-zinc-50 font-sans dark:bg-black">
      <footer className="w-full max-w-3xl px-16 pb-16 pt-4 text-left text-[12px] text-text-dim font-mono bg-white dark:bg-black">
        {siteConfig.copyright}
      </footer>
    </div>
  );
}
