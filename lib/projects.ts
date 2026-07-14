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
