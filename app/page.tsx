import Link from "next/link";
import { Header } from "@/components/Header";
import { SelectedWorkList } from "@/components/SelectedWorkList";
import { WritingList } from "@/components/WritingList";
import { EmailIcon } from "@/components/icons/EmailIcon";
import { OperaIcon } from "@/components/icons/OperaIcon";
import { PlaneIcon } from "@/components/icons/PlaneIcon";
import { siteConfig } from "@/lib/site";
import { projects } from "@/lib/projects";
import { getAllPosts } from "@/lib/posts";
import { getAllWork } from "@/lib/work";
import { ProjectGrid } from "@/components/ProjectGrid";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-background font-sans">
      <main className="flex flex-1 w-full max-w-3xl flex-col px-6 sm:px-16 p-32 sm:items-start">
        <Header />
        <section className="mb-32">
          <p className="mb-4 text-text dark:text-text-muted">
            Currently at{" "}
            <a
              href={siteConfig.nowAtUrl}
              target="_blank"
              className="group whitespace-nowrap font-semibold text-text underline underline-offset-4 decoration-(--color-border) hover:decoration-text transition-colors"
            >
              <OperaIcon className="ml-0.5 mr-1 inline-block size-3.5 align-[-0.125em] transition-colors group-hover:text-[#FF1B2D]" />
              {siteConfig.nowAt}
            </a>{" "}
            working on{" "}
            <a
              href={siteConfig.productUrl}
              target="_blank"
              className="group whitespace-nowrap font-semibold text-text underline underline-offset-4 decoration-(--color-border) hover:decoration-text transition-colors"
            >
              <PlaneIcon className="mr-1 inline-block size-4 align-middle transition-colors group-hover:text-[#07955F]" />
              {siteConfig.product}
            </a>
            {
              " — crafting interfaces, managing design systems and building design tooling. Driven by an insatiable curiosity to learn and build things people can use day to day."
            }
          </p>
          <p className="text-text dark:text-text-muted">
            You can read more{" "}
            <Link
              href="/about"
              className="font-semibold text-text underline underline-offset-4 decoration-(--color-border) hover:decoration-text transition-colors"
            >
              about me
            </Link>{" "}
            or reach me by{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              target="_blank"
              className="whitespace-nowrap font-semibold text-text underline underline-offset-4 decoration-(--color-border) hover:decoration-text transition-colors"
            >
              <EmailIcon className="mr-1 inline-block size-4 align-middle" />
              email
            </a>{" "}
          </p>
        </section>
        <SelectedWorkList items={getAllWork()} />
        <ProjectGrid items={projects} />
        <WritingList notes={getAllPosts().slice(0, 3)} />
      </main>
    </div>
  );
}
