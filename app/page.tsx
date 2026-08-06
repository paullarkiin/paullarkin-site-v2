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
import { PageShell } from "@/components/PageShell";

export default function Home() {
  return (
    <PageShell className="py-32 sm:items-start">
      <Header title={siteConfig.name} subtitle={siteConfig.role} />
      <section className="mb-32">
        <p className="mb-4 text-text">
          Currently at{" "}
          <a
            href={siteConfig.nowAtUrl}
            target="_blank"
            className="group whitespace-nowrap font-semibold text-text underline decoration-border underline-offset-4 transition-colors hover:decoration-text"
          >
            <OperaIcon className="ml-0.5 mr-1 inline-block size-3.5 align-[-0.125em] transition-colors group-hover:text-[#FF1B2D]" />
            {siteConfig.nowAt}
          </a>{" "}
          working on{" "}
          <a
            href={siteConfig.productUrl}
            target="_blank"
            className="group whitespace-nowrap font-semibold text-text underline decoration-border underline-offset-4 transition-colors hover:decoration-text"
          >
            <PlaneIcon className="mr-1 inline-block size-4 align-middle transition-colors group-hover:text-[#07955F]" />
            {siteConfig.product}
          </a>
          {
            " — crafting interfaces and building design tooling. I enjoy making useful things and care a lot about making them feel simple and considered."
          }
        </p>
        <p className="text-text">
          You can read more{" "}
          <Link
            href="/about"
            className="font-semibold text-text underline decoration-border underline-offset-4 transition-colors hover:decoration-text"
          >
            about me
          </Link>{" "}
          or reach me by{" "}
          <a
            href={`mailto:${siteConfig.email}`}
            target="_blank"
            className="whitespace-nowrap font-semibold text-text underline decoration-border underline-offset-4 transition-colors hover:decoration-text"
          >
            <EmailIcon className="mr-1 inline-block size-4 align-middle" />
            email
          </a>
          {"."}
        </p>
      </section>
      <SelectedWorkList items={getAllWork()} />
      <ProjectGrid items={projects} />
      <WritingList notes={getAllPosts().slice(0, 3)} />
    </PageShell>
  );
}
