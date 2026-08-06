import { BackLink } from "@/components/BackLink";
import { HeroImage } from "@/components/HeroImage";
import { SectionHead } from "@/components/SectionHead";
import { PageShell } from "@/components/PageShell";
import { Header } from "@/components/Header";

export default function Work() {
  return (
    <PageShell className="pt-24 sm:items-start">
      <BackLink />
      <Header title="Work" />
      <div className="flex w-full flex-col gap-6 mb-24">
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
    </PageShell>
  );
}
