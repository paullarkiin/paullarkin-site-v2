import Link from "next/link";
import { Header } from "@/components/Header";
import { ProjectGrid } from "@/components/ProjectGrid";
import { SelectedWorkList } from "@/components/SelectedWorkList";
import { WritingList } from "@/components/WritingList";
import { intro, projects, selectedWork, siteConfig } from "@/lib/site";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-background font-sans">
      <main className="flex flex-1 w-full max-w-3xl flex-col px-16 pt-24 sm:items-start">
        <Header layout="col" />
        <section className="mb-24">
          <p className="mb-4">
            {intro.currentlyAt}
            <a
              href={intro.href}
              target="_blank"
              className="whitespace-nowrap text-text underline underline-offset-4 decoration-text transition-colors"
            >
              {/* <OperaIcon className="mr-1 mb-0.5 inline-block size-4 align-[-0.15em]" /> */}
              {intro.hrefLabel}
            </a>{" "}
            {intro.currentlyWorkingOn}
            <a
              href={intro.productHref}
              target="_blank"
              className="whitespace-nowrap text-text underline underline-offset-4 decoration-text transition-colors"
            >
              {/* <MiniPayIcon className="mr-1 mb-0.5 inline-block size-4 align-[-0.15em]" /> */}
              {intro.productLabel}
            </a>{" "}
            {intro.currentlyDoing}
          </p>
          <p className="text-text">
            You can read more{" "}
            <Link
              href="/about"
              className="underline underline-offset-4 decoration-text transition-colors"
            >
              about me
            </Link>{" "}
            or reach me by{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              target="_blank"
              className="whitespace-nowrap underline underline-offset-4 decoration-text transition-colors"
            >
              <svg
                className="mr-1 inline-block size-4 align-middle"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
              </svg>
              email
            </a>{" "}
            or on{" "}
            <a
              href={siteConfig.github}
              target="_blank"
              className="whitespace-nowrap underline underline-offset-4 decoration-text transition-colors"
            >
              <svg
                className="mr-1 inline-block size-4.5 align-middle"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
              </svg>
              Github
            </a>
            . {intro.secondary}
          </p>
        </section>
        <SelectedWorkList items={selectedWork} />
        <ProjectGrid items={projects} />
        <WritingList notes={getAllPosts()} />
      </main>
    </div>
  );
}
