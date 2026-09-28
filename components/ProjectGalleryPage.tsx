"use client";

import { useState } from "react";
import { BackLink } from "@/components/BackLink";
import { Header } from "@/components/Header";
import { PageShell } from "@/components/PageShell";
import { WorkGallery } from "@/components/WorkGallery";
import type {
  GalleryDiscipline,
  ProjectGalleryId,
} from "@/lib/gallery";
import { projectGalleries } from "@/lib/projectGalleries";

const disciplineOptions: { value: GalleryDiscipline; label: string }[] = [
  { value: "design", label: "Design" },
  { value: "development", label: "Development" },
];

export function ProjectGalleryPage({
  projectId,
}: {
  projectId: ProjectGalleryId;
}) {
  const project = projectGalleries[projectId];
  const availableDisciplines = disciplineOptions.filter(({ value }) =>
    project.items.some((item) => item.disciplines?.includes(value)),
  );
  const [activeDiscipline, setActiveDiscipline] = useState<GalleryDiscipline>(
    availableDisciplines[0]?.value ?? "design",
  );
  const visibleItems = activeDiscipline
    ? project.items.filter((item) =>
        item.disciplines?.includes(activeDiscipline),
      )
    : project.items;

  return (
    <PageShell className="py-32 sm:items-start">
      <BackLink />

      <Header title={project.title}>
        <p className="mt-4 max-w-2xl text-base leading-relaxed">
          {project.description}
        </p>
      </Header>

      {availableDisciplines.length > 1 ? (
        <div
          role="group"
          aria-label={`${project.title} work discipline`}
          className="-mt-4 mb-12 flex items-center gap-3"
        >
          {availableDisciplines.map(({ value, label }) => {
            const isActive = value === activeDiscipline;

            return (
              <button
                key={value}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveDiscipline(value)}
                className={`min-w-28 rounded-full px-5 py-2 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-text ${
                  isActive
                    ? "bg-surface-higher font-medium text-text"
                    : "cursor-pointer font-normal text-text-muted/60 hover:text-text-muted"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      ) : null}

      <WorkGallery items={visibleItems} />
    </PageShell>
  );
}
