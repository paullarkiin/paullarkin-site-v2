import type { ComponentType } from "react";
import { AnimatedGradient } from "@/components/gallery";

export type ProjectGalleryId =
  | "minipay"
  | "browser-ai"
  | "opera-for-android"
  | "other";

export type GalleryDiscipline = "design" | "development";

export type GalleryLink = {
  label: string;
  href: string;
  external?: boolean;
};

export function getProjectGalleryItems(project: ProjectGalleryId) {
  return GalleryItems.filter((item) => item.project === project);
}

export type GalleryItem = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
  project?: ProjectGalleryId;
  disciplines?: GalleryDiscipline[];
  about?: string;
  tech?: string;
  link?: GalleryLink;
};

export type ComponentGalleryItem = {
  id: string;
  component: ComponentType;
  caption: string;
  project?: ProjectGalleryId;
  disciplines?: GalleryDiscipline[];
  about?: string;
  tech?: string;
  link?: GalleryLink;
};

export const GalleryItems: (GalleryItem | ComponentGalleryItem)[] = [
  {
    src: "/images/work/minipay-send.png",
    width: 2400,
    height: 1920,
    alt: "Two MiniPay send-flow screens for entering an amount and reviewing the recipient and total",
    caption: "MiniPay Send Flow",
    project: "minipay",
    disciplines: ["design"],
    about: "Design",
  },
  {
    src: "/images/work/minipay-sheets.png",
    width: 2400,
    height: 1920,
    alt: "Two MiniPay bottom sheets for choosing a deposit method and local currency",
    caption: "MiniPay Deposit Method and Currency Selection",
    project: "minipay",
    disciplines: ["design"],
    about: "Design",
  },
  {
    src: "/images/work/minipay-exchange.png",
    width: 2400,
    height: 1920,
    alt: "MiniPay withdrawal screens showing a review bottom sheet and final USDT confirmation",
    caption: "MiniPay Withdrawal Review and Confirmation",
    project: "minipay",
    disciplines: ["design"],
    about: "Design",
  },
  {
    src: "/images/work/minipay-recovery.png",
    width: 2400,
    height: 1920,
    alt: "Three MiniPay screens warning about, confirming, and delaying access to a secret recovery phrase",
    caption: "MiniPay Secret Recovery Phrase Flow",
    project: "minipay",
    disciplines: ["design"],
    about: "Design",
  },
  {
    src: "/images/work/error.png",
    width: 2400,
    height: 1920,
    alt: "MiniPay error bottom sheet with an alert illustration and Retry button",
    caption: "Default Error Bottom Sheet for MiniPay",
    project: "minipay",
    disciplines: ["design"],
    about: "Design",
  },
  {
    src: "/images/work/minipay-card-landing.png",
    width: 2400,
    height: 1920,
    alt: "MiniPay digital card landing page with a signup form, phone mockup, and Visa card",
    caption: "MiniPay Digital Card Landing Page",
    project: "minipay",
    disciplines: ["development"],
    about: "Design + Development",
    tech: "Webflow",
  },
  {
    src: "/images/work/scroll-indicator.png",
    width: 2400,
    height: 1920,
    alt: "Opera AI chat interface with a scroll-to-bottom indicator above the input controls",
    caption: "Scroll Indicator for Opera AI Chat",
    project: "browser-ai",
    disciplines: ["development"],
    about: "Development",
    tech: "React",
  },
  {
    src: "/images/work/ai-football.png",
    width: 2400,
    height: 1920,
    alt: "Opera AI chat showing a football betting recommendation with odds and a Bet9ja action",
    caption: "Rich Football Betting Response for Opera AI",
    project: "browser-ai",
    disciplines: ["development"],
    about: "Development",
    tech: "React",
  },
  {
    src: "/images/work/ai-bookmarks.png",
    width: 2400,
    height: 1920,
    alt: "Opera browser tab-grouping interface organising nine open tabs into Travel and Shopping groups",
    caption: "AI Tab Grouping Interface",
    project: "browser-ai",
    disciplines: ["development"],
    about: "Development",
    tech: "React",
  },
  {
    src: "/images/work/ai-chat-upload.png",
    width: 2400,
    height: 1920,
    alt: "Opera AI chat input before and after attaching three cat images",
    caption: "Image Upload Flows for Opera AI Chat",
    project: "browser-ai",
    disciplines: ["design"],
    about: "Design",
  },
  {
    src: "/images/work/ai-saved-images.png",
    width: 2400,
    height: 1920,
    alt: "Opera AI image-generation chat and an actions sheet for saving, sharing, or setting the image as wallpaper",
    caption: "AI-Generated Image Actions for Opera AI",
    project: "browser-ai",
    disciplines: ["design"],
    about: "Design",
  },
  {
    src: "/images/work/ai-ui-update.png",
    width: 2400,
    height: 1920,
    alt: "Opera AI mobile start screen with Aria branding, history controls, and a multimodal chat input",
    caption: "Opera AI Mobile Interface Refresh",
    project: "browser-ai",
    disciplines: ["development"],
    about: "Development",
    tech: "React",
  },
  {
    src: "/images/projects/user-dashboard/userdash.png",
    width: 2400,
    height: 1920,
    alt: "A research knowledge hub built to improve how teams access and share user insights.",
    caption: "User Research Dashboard",
    about: "Design + Development",
    project: "opera-for-android",
    disciplines: ["development"],
    tech: "NextJS",
    link: {
      label: "View Project",
      href: "/work/user-dashboard",
    },
  },
  {
    src: "/images/work/figma-sticky-notes.png",
    width: 2400,
    height: 1920,
    alt: "Two states of a Figma sticky notes plugin with note and colour controls",
    caption: "Figma Plugin for Easier Note Taking",
    about: "Design + Development",
    project: "opera-for-android",
    disciplines: ["development"],
    tech: "JavaScript",
  },
  {
    src: "/images/work/opera-ds-app.png",
    width: 2400,
    height: 1920,
    alt: "Two Android screens showing a component grid and editable button properties",
    caption: "Live Component Preview Tool for Opera for Android",
    project: "opera-for-android",
    disciplines: ["design"],
    about: "Design",
    link: {
      label: "View Project",
      href: "/work/design-system-preview",
    },
  },
  {
    src: "/images/work/opera-downloads.png",
    width: 2400,
    height: 1920,
    alt: "Opera for Android Downloads screen with search results filtered to audio and PDF files",
    caption: "Downloads Search and Filtering for Opera for Android",
    project: "opera-for-android",
    disciplines: ["design"],
    about: "Design",
  },
  {
    src: "/images/work/opera-import.png",
    width: 2400,
    height: 1920,
    alt: "Two Opera for Android screens for importing bookmarks from Chrome, a file, or Google Takeout",
    caption: "Bookmark Import Flow for Opera for Android",
    project: "opera-for-android",
    disciplines: ["design"],
    about: "Design",
  },
  {
    src: "/images/work/ofa-design-system.png",
    width: 2400,
    height: 1920,
    alt: "Grid of Opera for Android design system components including controls, inputs, chips, and menus",
    caption: "Contributing to and Scaling the Opera for Android Design System",
    project: "opera-for-android",
    disciplines: ["design"],
    about: "Design",
  },
  {
    src: "/images/work/opera-cards.png",
    width: 2400,
    height: 1920,
    alt: "Opera for Android start page with feature cards for live scores, VPN Pro, and the news feed",
    caption: "Start Page Feature Recommendation Cards",
    project: "opera-for-android",
    disciplines: ["design"],
    about: "Design",
  },

  {
    src: "/images/work/opera-wallpapers.png",
    width: 2400,
    height: 1920,
    alt: "Opera for Android wallpaper library and start-page wallpaper selection sheet",
    caption: "Wallpaper Selection for Opera for Android",
    project: "opera-for-android",
    disciplines: ["design"],
    about: "Design",
  },
  {
    src: "/images/work/figma-strings-plugin.png",
    width: 2400,
    height: 1920,
    alt: "Two states of a Figma plugin listing languages for translating UI strings",
    caption: "Figma Plugin for Translating and Generating UI Copy",
    about: "Design + Development",
    disciplines: ["development"],
    project: "opera-for-android",
    tech: "JavaScript",
  },
  {
    src: "/images/work/mobile-onboarding.png",
    width: 2400,
    height: 1920,
    alt: "Opera for Android onboarding concept prompting users to set Opera as their default browser",
    caption: "Onboarding Experiments for Opera for Android",
    project: "opera-for-android",
    disciplines: ["design"],
    about: "Design",
  },
  {
    src: "/images/work/elevate.png",
    width: 2400,
    height: 1920,
    alt: "ElevateNI conference landing page with oversized typography and a purple-blue gradient",
    caption: "ElevateNI Website Concept",
    project: "other",
    about: "Design",
  },
  {
    src: "/images/work/book-summaries-work.png",
    width: 2400,
    height: 1920,
    alt: "Saved Books interface showing six book covers in a three-column grid",
    caption: "Application for AI-Generated Book Summaries",
    about: "Development",
    project: "other",
    tech: "NextJS",
    link: {
      label: "View Project",
      href: "/work/book-summaries",
    },
  },
  {
    src: "/images/work/lakrits-ui.png",
    width: 2400,
    height: 1920,
    alt: "Lakrits UI wordmark surrounded by wireframe component illustrations",
    caption: "Lakrits UI Component Library",
    project: "other",
    about: "Development",
    link: {
      label: "View Project",
      href: "/work/lakrits-ui",
    },
  },
  {
    id: "animated-gradient",
    component: AnimatedGradient,
    caption: "Animated Gradient Image Loading Concept",
    project: "other",
    about: "Development",
    tech: "CSS",
  },
  {
    src: "/images/work/tiggerfree.png",
    width: 2400,
    height: 1920,
    alt: "TriggerFree movie search landing page displayed inside a tablet frame",
    caption: "TriggerFree Movie Search Concept",
    project: "other",
    about: "Design",
    link: {
      label: "View Project",
      href: "https://www.behance.net/gallery/150200543/UIUX-Case-Study-Trigger-Free",
      external: true,
    },
  },
  {
    src: "/images/work/sloans.png",
    width: 2400,
    height: 1920,
    alt: "A dark Sloan's Gym landing page with oversized type and a gym interior photograph",
    caption: "Sloan’s Gym Landing Page Concept",
    project: "other",
    about: "Design",
  },
];
