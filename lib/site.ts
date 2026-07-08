export type SiteNavItem = {
  label: string;
  href: string;
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

import type { IconName } from "@/lib/icons";

export type WorkItem = {
  title: string;
  description: string;
  year: string;
  href: string;
  wip?: boolean;
  icon: IconName;
};

export type LabItem = {
  title: string;
  description: string;
  icon: IconName;
  iconLabel?: string;
  href: string;
};

export type Note = {
  slug: string;
  title: string;
  date: string;
  summary?: string;
  readingTime?: string;
};

export const selectedWork: WorkItem[] = [
  {
    title: "Lakrits UI",
    description: "Component Library",
    year: "2026",
    href: "https://lakrits.paullarkin.info/",
    icon: "ring",
    wip: true,
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
    icon: "grid",
  },
  {
    title: "Design System Previewer",
    description: "Internal tooling",
    year: "2025",
    href: "#",
    icon: "layers",
  },
];

export const projects: LabItem[] = [
  {
    title: "Lakrits UI",
    description: "React component library",
    icon: "ring",
    href: "https://github.com/paullarkiin/lakrits",
  },
  {
    title: "ElevateNI",
    description: "Student Conference",
    icon: "elevate",
    href: "https://www.instagram.com/ElevateNI",
  },
];

export const labItems: (LabItem & { tag: string; date: string })[] = [
  {
    title: "ElevateNI",
    description: "Student Confernece",
    icon: "dots",
    href: "#",
    tag: "",
    date: "",
  },
  {
    title: "UI Kitchen",
    description: "UI concept for static analysis",
    icon: "mono",
    iconLabel: "$ > analyze",
    href: "#",
    tag: "",
    date: "",
  },
  {
    title: "NASA Picture of the day",
    description: "React Native + Expo",
    icon: "bars",
    href: "#",
    tag: "",
    date: "",
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
  // {
  //   slug: "building-minipay-primitives",
  //   title: "Building MiniPay's component primitives",
  //   date: "2026-03-15",
  //   summary: "How we built a shared component library from scratch.",
  //   readingTime: "6 min",
  // },
  // {
  //   slug: "figma-to-code-pipeline",
  //   title: "Our Figma to code pipeline",
  //   date: "2025-11-20",
  //   summary: "Connecting design tokens to production React components.",
  //   readingTime: "4 min",
  // },
  // {
  //   slug: "design-engineering-role",
  //   title: "What design engineering means to me",
  //   date: "2025-08-10",
  //   readingTime: "3 min",
  // },
];

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  href?: string;
};

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
  currentlyAt: "Currently at ",
  currentlyWorkingOn: "working on ",
  currentlyDoing:
    " — crafting interfaces, managing design systems and building design tooling. Driven by an insatiable curiosity to learn and build things people can use day to day.",
  href: siteConfig.nowAtUrl,
  hrefLabel: siteConfig.nowAt,
  productHref: siteConfig.productUrl,
  productLabel: siteConfig.product,
};
