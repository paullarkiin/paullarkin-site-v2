import { experience } from "@/lib/site";
import { SectionHead } from "@/components/SectionHead";
import { BackLink } from "@/components/BackLink";
import { PhotoGrid } from "@/components/PhotoGrid";

export default function About() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-background font-sans">
      <main className="flex flex-1 w-full max-w-3xl flex-col px-8 sm:px-16 pt-24 sm:items-start">
        <BackLink />
        <section className="mb-24 w-full">
          <SectionHead label="About" />

          <div className="space-y-4 text-base text-text pt-3.5">
            <p>
              I&apos;m Paul, a designer and developer based in Belfast,
              currently in my final year of computer science at Queen&apos;s
              University. I&apos;m excited by purposeful design and innovation,
              with a great love for simplicity.
            </p>

            <p>
              Originally, I was a chef until I went back into education and
              since then have found myself between the worlds of design and
              development. Always trying to merge the two. In doing so,
              I&apos;ve been able to explore my interests and work as a
              freelance digital designer and intern as a mobile software
              engineer. Learning to apply design from different perspectives.
              Which I am hoping to use to further my career in the design space.
            </p>

            <p>
              When I am not studying or working, you can find me in the gym
              lifting weights, helping to shape the visual identity of student
              societies, co-organising events and mentoring other students.
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
