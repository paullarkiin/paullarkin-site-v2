import { intro } from "@/lib/site";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div>
          <section>
            <p>
              {intro.currentlyAt}{" "}
              <a
                href={intro.href}
                className="whitespace-nowrap text-text underline underline-offset-4 decoration-border-strong hover:decoration-text transition-colors"
              >
                {/* <OperaIcon className="mr-1 mb-0.5 inline-block size-4 align-[-0.15em]" /> */}
                {intro.hrefLabel}
              </a>{" "}
              {intro.currentlyWorkingOn}
              <a
                href={intro.productHref}
                className="whitespace-nowrap text-text underline underline-offset-4 decoration-border-strong hover:decoration-text transition-colors"
              >
                {/* <MiniPayIcon className="mr-1 mb-0.5 inline-block size-4 align-[-0.15em]" /> */}
                {intro.productLabel}
              </a>{" "}
              {intro.currentlyDoing}
            </p>
            <p className="text-text-muted">{intro.secondary}</p>
          </section>
        </div>
      </main>
    </div>
  );
}
