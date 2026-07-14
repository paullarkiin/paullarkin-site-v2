import { SelectedWorkList } from "@/components/SelectedWorkList";
import { ProjectGrid } from "@/components/ProjectGrid";
import { projects } from "@/lib/projects";
import { getAllWork } from "@/lib/work";
import { BackLink } from "@/components/BackLink";
export default function Work() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-background font-sans">
      <main className="flex flex-1 w-full max-w-3xl flex-col px-8 sm:px-16 pt-24 sm:items-start">
        <BackLink />
        <SelectedWorkList items={getAllWork()} label="All Work" />
        <ProjectGrid items={projects} />
      </main>
    </div>
  );
}
