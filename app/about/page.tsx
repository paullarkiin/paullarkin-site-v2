import { SectionHead } from "@/components/SectionHead";
import { BackLink } from "@/components/BackLink";
import { PhotoGrid } from "@/components/PhotoGrid";

// Uncomment when re-enabling the Experience section below:
// type ExperienceItem = {
//   company: string;
//   role: string;
//   period: string;
//   href?: string;
// };
//
// const experience: ExperienceItem[] = [
//   {
//     company: "Opera",
//     role: "Design engineer · MiniPay",
//     period: "2023 — Present",
//     href: "https://www.opera.com",
//   },
//   {
//     company: "Salt communications",
//     role: "Intern software engineer",
//     period: "2021 — 2022",
//   },
//   {
//     company: "Freelance",
//     role: "Design + Web development",
//     period: "2018 - 2023",
//   },
// ];

export default function About() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-background font-sans">
      <main className="flex flex-1 w-full max-w-3xl flex-col px-8 sm:px-16 pt-24 sm:items-start">
        <BackLink />
        <section className="mb-24 w-full">
          <SectionHead label="About" />

          <div className="space-y-6 text-base leading-relaxed text-text pt-3.5">
            <p>
              I&apos;m Paul, Irish, living in Sweden. I&apos;m a designer and
              developer inspired by purposeful design, with a great love for
              simplicity.
            </p>

            <p>
              Right now I&apos;m a UI engineer at Opera, working primarily on
              MiniPay. More recently, I&apos;ve focused on bringing design and
              engineering closer together — working across teams, building
              product concepts, and informing product decisions through
              prototyping and internal tooling.
            </p>

            <p>
              Before that, I was a chef until returning to education, where I
              fell into a cybersecurity rabbit hole and thought I might become a
              malware analyst. That was until COVID, when I reconnected with
              design and interned as a software engineer at Salt Communications,
              combining all three worlds.
            </p>

            <p>
              On the side, I co-founded ElevateNI student conference with
              friends, have been featured by Adobe, and I'm dabbling in the
              open-soucing some of my projects.
            </p>

            <p>Thanks for stopping by. Always happy to chat.</p>

            <p>
              Reach me at{" "}
              <a
                href="mailto:hello@paullarkin.info"
                className="font-semibold text-text underline underline-offset-4 decoration-(--color-border) hover:decoration-text transition-colors"
              >
                hello@paullarkin.info
              </a>
            </p>
          </div>

          <PhotoGrid />
        </section>

        {/* <section className="mb-24 w-full">
          <SectionHead label="Experience" />

          <div className="flex flex-col">
            {experience.map((item, idx) => (
              <div
                key={item.company}
                className={`flex items-baseline justify-between gap-4 py-3.5 ${
                  idx < experience.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <div className="flex-1 min-w-0">
                  <p className="text-base font-medium text-text">
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        className="underline underline-offset-4 decoration-(--color-border) hover:decoration-text transition-colors"
                      >
                        {item.company}
                      </a>
                    ) : (
                      item.company
                    )}
                  </p>
                  <p className="text-[13px] text-text-muted leading-normal mt-0.5">
                    {item.role}
                  </p>
                </div>
                <span className="text-[12px] text-text-muted font-mono shrink-0 whitespace-nowrap">
                  {item.period}
                </span>
              </div>
            ))}
          </div>
        </section> */}

        <section className="mb-24 w-full">
          <SectionHead label="Colophon" />

          <p className="text-base text-text-muted leading-normal pt-3.5">
            This site is built with Next.js, Tailwind CSS, and MDX. The typeface
            used is Manrope, a modern sans-serif font.
          </p>
        </section>
      </main>
    </div>
  );
}
