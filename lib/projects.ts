import type { IconName } from "@/lib/icons";

export type ProjectItem = {
  title: string;
  description: string;
  icon: IconName;
  iconLabel?: string;
  href: string;
  comingSoon?: boolean;
};

export const projects: ProjectItem[] = [
  {
    title: "ElevateNI",
    description: "Co-founded a student-led conference",
    icon: "elevate",
    href: "https://www.instagram.com/ElevateNI",
  },
  {
    title: "Lakrits UI",
    description: "React Component Library",
    icon: "planet",
    href: "https://www.behance.net/gallery/150200543/UIUX-Case-Study-Trigger-Free",
  },
  {
    title: "UI Kitchen",
    description: "UI Experiments built in code",
    icon: "layers",
    href: "#",
    comingSoon: true,
  },
];
