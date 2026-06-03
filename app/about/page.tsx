import { siteConfig } from "@/lib/site";

export default function About() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-background font-sans">
      <main className="flex flex-1 w-full max-w-3xl flex-col px-16 pt-24 sm:items-start">
        <section className="mb-24 w-full">
          <h1 className="text-[14px] text-text-muted mb-8">About</h1>

          <div className="space-y-4 text-base text-text-muted">
            <p>
              I&apos;m {siteConfig.name}, a {siteConfig.role.toLowerCase()}{" "}
              based in {siteConfig.status}.
            </p>

            <p>
              Currently at{" "}
              <a
                href={siteConfig.nowAtUrl}
                className="text-text underline underline-offset-4 decoration-text transition-colors"
              >
                {siteConfig.nowAt}
              </a>{" "}
              working on{" "}
              <a
                href={siteConfig.productUrl}
                className="text-text underline underline-offset-4 decoration-text transition-colors"
              >
                {siteConfig.product}
              </a>
              , crafting interfaces, managing design systems and building design
              tooling.
            </p>

            <p>
              Previously at Salt Communications. Driven by an insatiable
              curiosity to learn and build things people can use day to day.
            </p>

            <p>
              Always open to chat — you can reach me at{" "}
              <a
                href="mailto:hello@paullarkin.dev"
                className="text-text underline underline-offset-4 decoration-text transition-colors"
              >
                email
              </a>{" "}
              or on{" "}
              <a
                href="https://github.com/paullarkiin"
                className="text-text underline underline-offset-4 decoration-text transition-colors"
              >
                Github
              </a>
              .
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
