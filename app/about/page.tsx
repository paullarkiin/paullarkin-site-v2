import { SectionHead } from "@/components/SectionHead";
import { PhotoGrid } from "@/components/PhotoGrid";

export default function About() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-background font-sans">
      <main className="flex flex-1 w-full max-w-3xl flex-col px-6 sm:px-16 p-32 sm:items-start">
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
              friends, have been featured by Adobe, and I&apos;m dabbling in the
              open-sourcing some of my projects.
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

        <section className="w-full">
          <SectionHead label="Colophon" />

          <p className="text-base text-text leading-normal pt-3.5">
            This site is built with Next.js, Tailwind CSS, and MDX. The typeface
            used is Manrope, a modern sans-serif font.
          </p>
        </section>
      </main>
    </div>
  );
}
