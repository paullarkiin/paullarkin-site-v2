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
