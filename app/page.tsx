import { Header } from "@/components/Header";
import { ProjectGrid } from "@/components/ProjectGrid";
import { WorkList } from "@/components/WorkList";
import { SelectedWorkList } from "@/components/SelectedWorkList";
import { WritingList } from "@/components/WritingList";
import { intro, notes, projects, selectedWork } from "@/lib/site";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-background font-sans">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between px-16 pt-24 sm:items-start">
        <Header layout="col" />
        <section className="mb-24">
          <p className="mb-4">
            {intro.currentlyAt}
            <a
              href={intro.href}
              className="whitespace-nowrap text-text underline underline-offset-4 decoration-text transition-colors"
            >
              {/* <OperaIcon className="mr-1 mb-0.5 inline-block size-4 align-[-0.15em]" /> */}
              {intro.hrefLabel}
            </a>{" "}
            {intro.currentlyWorkingOn}
            <a
              href={intro.productHref}
              className="whitespace-nowrap text-text underline underline-offset-4 decoration-text transition-colors"
            >
              {/* <MiniPayIcon className="mr-1 mb-0.5 inline-block size-4 align-[-0.15em]" /> */}
              {intro.productLabel}
            </a>{" "}
            {intro.currentlyDoing}
          </p>
          <p className="text-text-muted">{intro.secondary}</p>
        </section>
        {/* <WorkList items={selectedWork} /> */}
        <SelectedWorkList items={selectedWork} />

        <ProjectGrid items={projects} />
        {/* <LabGrid
          items={labItems.map(({ tag, date, ...item }) => ({
            item,
            tag,
            date,
          }))}
        /> */}
        <WritingList notes={notes} />
      </main>
    </div>
  );
}
