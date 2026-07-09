import type { IconName } from "@/lib/icons";

export type SiteNavItem = {
  label: string;
  href: string;
};

export type WorkItem = {
  title: string;
  description: string;
  year: string;
  href: string;
  icon: IconName;
};

export type ProjectItem = {
  title: string;
  description: string;
  icon: IconName;
  iconLabel?: string;
  href: string;
  comingSoon?: boolean;
};

export type Note = {
  slug: string;
  title: string;
  date: string;
  summary?: string;
  readingTime?: string;
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  href?: string;
};

export const siteConfig = {
  url: "https://paullarkin.info",
  name: "Paul Larkin",
  role: "Design engineer",
  status: "Linköping, Sweden",
  nowAt: "Opera",
  nowAtUrl: "https://www.opera.com",
  product: "MiniPay",
  productUrl: "https://www.minipay.to",
  email: "hello@paullarkin.info",
  github: "https://github.com/paullarkiin",
  copyright: `© ${new Date().getFullYear()} Paul Larkin`,
};

export const siteFloatingNav: SiteNavItem[] = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Writing", href: "/writing" },
];

export const selectedWork: WorkItem[] = [
  {
    title: "Lakrits UI",
    description: "Component Library",
    year: "2026",
    href: "https://lakrits.paullarkin.info/",
    icon: "ring",
  },
  {
    title: "Book Summaries",
    description: "React App",
    year: "2026",
    href: "#",
    icon: "chat",
  },
  {
    title: "User Research Dashboard",
    description: "Internal tooling",
    year: "2025",
    href: "#",
    icon: "bars",
  },
  {
    title: "Design System Previewer",
    description: "Internal tooling",
    year: "2025",
    href: "#",
    icon: "grid",
  },
];

export const projects: ProjectItem[] = [
  {
    title: "UI Kitchen",
    description: "Exploration of UI concepts",
    icon: "layers",
    href: "#",
    comingSoon: true,
  },
  {
    title: "Trigger Free",
    description: "Hackathon project",
    icon: "planet",
    href: "https://www.behance.net/gallery/150200543/UIUX-Case-Study-Trigger-Free",
  },
  {
    title: "ElevateNI",
    description: "Conference organizing",
    icon: "elevate",
    href: "https://www.instagram.com/ElevateNI",
  },
];

export const notes: Note[] = [
  {
    slug: "exe-to-pixels-image-generation",
    title: "From Exe to Pixels: Image Generation For Malware Classification",
    date: "2026-03-15",
    summary: "Exploring how to build a image dataset of windows executables",
  },
  {
    slug: "publishing-app-google-play-store",
    title: "Publishing an App on the Google Play Store",
    date: "2026-03-15",
    summary: "Process of buiding an Android password generation app",
    readingTime: "6 min",
  },
  {
    slug: "analyzing-android-premium-sms-malware",
    title: "Analyizing Android Premium SMS Malware",
    date: "2026-03-15",
    summary:
      "Detailing the steps that I took when analyzing a malicious sample",
    readingTime: "6 min",
  },
];

export const experience: ExperienceItem[] = [
  {
    company: "Opera",
    role: "Design engineer · MiniPay",
    period: "2023 — Present",
    href: "https://www.opera.com",
  },
  {
    company: "Salt communications",
    role: "Intern software engineer",
    period: "2021 — 2022",
  },
  {
    company: "Freelance",
    role: "Design + Web development",
    period: "2018 - 2023",
  },
];

export const intro = {
  currentlyAt: "Currently at",
  currentlyWorkingOn: "working on",
  currentlyDoing:
    " — crafting interfaces, managing design systems and building design tooling. Driven by an insatiable curiosity to learn and build things people can use day to day.",
  href: siteConfig.nowAtUrl,
  hrefLabel: siteConfig.nowAt,
  productHref: siteConfig.productUrl,
  productLabel: siteConfig.product,
};
