import { BackLink } from "@/components/BackLink";
import { HeroImage } from "@/components/HeroImage";
import { SectionHead } from "@/components/SectionHead";
export default function Work() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-background font-sans">
      <main className="flex flex-1 w-full max-w-3xl flex-col px-8 sm:px-16 pt-24 sm:items-start">
      <main className="flex flex-1 w-full max-w-3xl flex-col px-8 sm:px-16 pt-24 sm:items-start">
        <BackLink />
        <div className="flex flex-col gap-6 w-full mb-24">
          <SectionHead label="Work" />
          <HeroImage alt="" />
          <HeroImage alt="" />
        </div>
        <SectionHead label="Side projects" />
        <div className="grid grid-cols-2 gap-4 w-full mb-32">
          <HeroImage alt="" />
          <HeroImage alt="" />
          <HeroImage alt="" />
          <HeroImage alt="" />
        </div>
      </main>
    </div>
  );
}
