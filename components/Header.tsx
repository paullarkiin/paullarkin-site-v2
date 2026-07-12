import { siteConfig } from "@/lib/site";

export function Header() {
  return (
    <header className="mb-12">
      <p className="text-base font-semibold text-text leading-tight">
        {siteConfig.name}
      </p>
      <p className="text-base text-text-muted mt-0.5">{siteConfig.role}</p>
    </header>
  );
}
