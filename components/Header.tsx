import { siteConfig } from "@/lib/site";

type HeaderProps = {
  layout?: "row" | "col";
};

export function Header({ layout = "col" }: HeaderProps) {
  if (layout === "row") {
    return (
      <header className="flex w-full mb-24 items-center justify-between">
        <p className="text-base font-semibold text-text">{siteConfig.name}</p>
        <p className="text-base text-text-muted">{siteConfig.status}</p>
      </header>
    );
  }

  return (
    <header className="mb-24">
      <p className="text-base font-semibold text-text leading-tight">
        {siteConfig.name}
      </p>
      <p className="text-base text-text-muted mt-0.5">{siteConfig.role}</p>
    </header>
  );
}
