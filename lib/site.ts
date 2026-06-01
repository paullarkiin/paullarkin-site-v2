export type SiteNavItem = {
  label: string;
  href: string;
};

export const siteConfig = {
  name: "Paul Larkin",
  role: "Design engineer",
  status: "Linköping, Sweden",
  nowAt: "Opera",
  nowAtUrl: "https://www.opera.com",
  product: "MiniPay",
  productUrl: "https://www.minipay.to",
  copyright: `Copyright ${new Date().getFullYear()}`,
};

export const siteFloatingNav: SiteNavItem[] = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Writing", href: "/writing" },
];

export type WorkItem = {
  title: string;
  description: string;
  year: string;
  href: string;
  wip?: boolean;
};

export type LabItem = {
  title: string;
  description: string;
  preview: "dots" | "mono" | "bars" | "circle";
  previewLabel?: string;
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
    title: "Lakrits UI Library",
    description: "Components, tokens, Figma → React with Code Connect",
    year: "2026",
    href: "#",
    wip: true,
  },
  {
    title: "User Research Dashboard",
    description: "Internal tooling for the design team at Opera",
    year: "2026",
    href: "#",
  },
  {
    title: "Aria Browser AI",
    description: "Prototyping kit for shared web-core components",
    year: "2025",
    href: "#",
  },
  {
    title: "Figma Strings Plugin",
    description: "UX copy and visual system for failure states",
    year: "2024",
    href: "#",
  },
  {
    title: "Design System Previewer",
    description: "Internal tool for live previewing design system changes",
    year: "2025",
    href: "#",
  },
];

export const projects: LabItem[] = [
  {
    title: "Summaries",
    description: "Book summaries and reviews",
    preview: "dots",
    href: "#",
  },
  {
    title: "ElevateNI",
    description: "Student Conference",
    preview: "mono",
    href: "#",
  },
];

export const labItems: (LabItem & { tag: string; date: string })[] = [
  {
    title: "Summaries",
    description: "Book summaries and reviews",
    preview: "dots",
    href: "#",
    tag: "INTERACTION",
    date: "12/18/25",
  },
  {
    title: "Malware workbench",
    description: "UI concept for static analysis",
    preview: "mono",
    previewLabel: "$ > analyze",
    href: "#",
    tag: "TOOLING",
    date: "02/03/26",
  },
  {
    title: "Savings tracker",
    description: "React Native + Expo",
    preview: "bars",
    href: "#",
    tag: "PRODUCT",
    date: "04/22/26",
  },
];

export const notes: Note[] = [
  {
    slug: "building-minipay-primitives",
    title: "Building MiniPay's component primitives",
    date: "2026-03-15",
    summary: "How we built a shared component library from scratch.",
    readingTime: "6 min",
  },
  {
    slug: "figma-to-code-pipeline",
    title: "Our Figma to code pipeline",
    date: "2025-11-20",
    summary: "Connecting design tokens to production React components.",
    readingTime: "4 min",
  },
  {
    slug: "design-engineering-role",
    title: "What design engineering means to me",
    date: "2025-08-10",
    readingTime: "3 min",
  },
];

export const intro = {
  currentlyAt: "Currently at ",
  currentlyWorkingOn: "working on ",
  currentlyDoing:
    " — building interfaces, design systems, and the tooling that connects Figma to production code.",
  secondary:
    "I care about interfaces that feel inevitable, the small interaction details others overlook, and bridging design and engineering on real products.",
  href: siteConfig.nowAtUrl,
  hrefLabel: siteConfig.nowAt,
  productHref: siteConfig.productUrl,
  productLabel: siteConfig.product,
};
