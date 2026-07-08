import Link from "next/link";
import { Header } from "@/components/Header";
import { ProjectGrid } from "@/components/ProjectGrid";
import { SelectedWorkList } from "@/components/SelectedWorkList";
import { WritingList } from "@/components/WritingList";
import { EmailIcon } from "@/components/icons/EmailIcon";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { OperaIcon } from "@/components/icons/OperaIcon";
import { PlaneIcon } from "@/components/icons/PlaneIcon";
import {
  intro,
  labItems,
  projects,
  selectedWork,
  siteConfig,
} from "@/lib/site";
import { getAllPosts } from "@/lib/posts";
import { LabGrid } from "@/components/LabGrid";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-background font-sans">
      <main className="flex flex-1 w-full max-w-3xl flex-col px-16 pt-24 sm:items-start">
        <Header layout="col" />
        <section className="mb-24">
          <p className="mb-4 text-text dark:text-text-muted">
            {intro.currentlyAt}
            <a
              href={intro.href}
              target="_blank"
              className="group ml-1 whitespace-nowrap font-semibold text-text underline underline-offset-4 decoration-(--color-border) hover:decoration-text transition-colors"
            >
              <OperaIcon className="mr-1 inline-block size-3.5 align-middle transition-colors group-hover:text-[#FF1B2D]" />
              {intro.hrefLabel}
            </a>{" "}
            {intro.currentlyWorkingOn}
            <a
              href={intro.productHref}
              target="_blank"
              className="group ml-0.5 whitespace-nowrap font-semibold text-text underline underline-offset-4 decoration-(--color-border) hover:decoration-text transition-colors"
            >
              <PlaneIcon className="mr-1 inline-block size-4 align-middle transition-colors group-hover:text-[#07955F]" />
              {intro.productLabel}
            </a>{" "}
            {intro.currentlyDoing}
          </p>
          <p className="text-text dark:text-text-muted">
            You can read more{" "}
            <Link
              href="/about"
              className="ml-0.5 font-semibold text-text underline underline-offset-4 decoration-(--color-border) hover:decoration-text transition-colors"
            >
              about me
            </Link>{" "}
            or reach me by{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              target="_blank"
              className="ml-0.5 whitespace-nowrap font-semibold text-text underline underline-offset-4 decoration-(--color-border) hover:decoration-text transition-colors"
            >
              <EmailIcon className="mr-1 inline-block size-4 align-middle" />
              email
            </a>{" "}
            or on{" "}
            <a
              href={siteConfig.github}
              target="_blank"
              className="ml-0.5 whitespace-nowrap font-semibold text-text underline underline-offset-4 decoration-(--color-border) hover:decoration-text transition-colors"
            >
              <GithubIcon className="mr-1 inline-block size-4.5 align-middle" />
              Github
            </a>
          </p>
        </section>
        <SelectedWorkList items={selectedWork} />
        <LabGrid
          items={labItems.map(({ tag, date, ...item }) => ({
            item,
            tag,
            date,
          }))}
        />
        <WritingList notes={getAllPosts()} />
      </main>
    </div>
  );
}
