import { iconMap } from "@/lib/icons";

export default function IconsPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="mb-8 text-lg font-medium text-text">Icon Reference</h1>
      <div className="grid grid-cols-3 gap-4 sm:grid-cols-5">
        {Object.entries(iconMap).map(([name, Icon]) => (
          <div
            key={name}
            className="flex flex-col items-center gap-2 rounded-xl bg-surface p-4"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-surface-higher/50">
              <Icon className="h-6 w-6 text-text" />
            </div>
            <span className="text-[11px] text-text-muted">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
