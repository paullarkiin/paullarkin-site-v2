import type { IconName } from "@/lib/icons";

export type CuratedWorkListItem = {
  title: string;
  description: string;
  icon: IconName;
  href: string;
  date?: string;
};

export const curatedWorkList: CuratedWorkListItem[] = [
  {
    title: "MiniPay",
    description: "Design, Prototyping & Web",
    icon: "dollar",
    href: "/work/minipay",
    date: "2026",
  },
  {
    title: "Opera Browser AI",
    description: "React, UI Systems & R&D",
    icon: "chat",
    href: "/work/browser-ai",
    date: "2025",
  },
  {
    title: "Opera for Android",
    description: "Product Design & Development",
    icon: "ring",
    href: "/work/opera-for-android",
    date: "2025",
  },
  {
    title: "Other Projects",
    description: "Client & Personal",
    icon: "grid",
    href: "/work",
    date: "2025",
  },
];
