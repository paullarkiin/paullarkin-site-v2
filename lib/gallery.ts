import type { ComponentType } from "react";
import { AnimatedGradient } from "@/components/gallery";

export type GalleryItem = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
  about?: string;
  tech?: string;
};

export type ComponentGalleryItem = {
  id: string;
  component: ComponentType;
  caption: string;
  about?: string;
  tech?: string;
};

export const GalleryItems: (GalleryItem | ComponentGalleryItem)[] = [
  {
    src: "/images/work/elevate.png",
    width: 2400,
    height: 1920,
    alt: "ElevateNI conference landing page with oversized typography and a purple-blue gradient",
    caption: "ElevateNI Website Concept",
    about: "Design",
  },
  {
    src: "/images/work/scroll-indicator.png",
    width: 2400,
    height: 1920,
    alt: "Opera AI chat interface with a scroll-to-bottom indicator above the input controls",
    caption: "Scroll Indicator for Opera AI Chat",
    about: "Development",
    tech: "React",
  },
  {
    id: "animated-gradient",
    component: AnimatedGradient,
    caption: "Animated Gradient Image Loading Concept",
    about: "Development",
    tech: "CSS",
  },
  {
    src: "/images/work/figma-sticky-notes.png",
    width: 2400,
    height: 1920,
    alt: "Two states of a Figma sticky notes plugin with note and colour controls",
    caption: "Figma Plugin for Easier Note Taking",
    about: "Design + Development",
    tech: "JavaScript",
  },
  {
    src: "/images/work/book-summaries-work.png",
    width: 2400,
    height: 1920,
    alt: "Saved Books interface showing six book covers in a three-column grid",
    caption: "Application for AI-Generated Book Summaries",
    about: "Development",
    tech: "NextJS",
  },
  {
    src: "/images/work/minipay-send.png",
    width: 2400,
    height: 1920,
    alt: "Two MiniPay send-flow screens for entering an amount and reviewing the recipient and total",
    caption: "MiniPay Send Flow",
    about: "Design",
  },
  {
    src: "/images/work/sloans.png",
    width: 2400,
    height: 1920,
    alt: "A dark Sloan's Gym landing page with oversized type and a gym interior photograph",
    caption: "Sloan’s Gym Landing Page Concept",
    about: "Design",
  },
  {
    src: "/images/work/ai-chat-upload.png",
    width: 2400,
    height: 1920,
    alt: "Opera AI chat input before and after attaching three cat images",
    caption: "Image Upload Flows for Opera AI Chat",
    about: "Design",
  },
  {
    src: "/images/work/minipay-card-landing.png",
    width: 2400,
    height: 1920,
    alt: "MiniPay digital card landing page with a signup form, phone mockup, and Visa card",
    caption: "MiniPay Digital Card Landing Page",
    about: "Design + Development",
    tech: "Webflow",
  },
  {
    src: "/images/work/design-system-preview.png",
    width: 2400,
    height: 1920,
    alt: "Two Android screens showing a component grid and editable button properties",
    caption: "Live Component Preview Tool for Opera for Android",
    about: "Design",
  },
  {
    src: "/images/work/ai-tab-ui.png",
    width: 2400,
    height: 1920,
    alt: "Tab cleanup interface grouping browser tabs into Travel and Shopping categories",
    caption: "AI Bookmark Cleanup UI Components",
    about: "Development",
    tech: "React",
  },
  {
    src: "/images/work/figma-strings-plugin.png",
    width: 2400,
    height: 1920,
    alt: "Two states of a Figma plugin listing languages for translating UI strings",
    caption: "Figma Plugin for Translating and Generating UI Copy",
    about: "Design + Development",
    tech: "JavaScript",
  },
  {
    src: "/images/work/ofa-design-system.png",
    width: 2400,
    height: 1920,
    alt: "Grid of Opera for Android design system components including controls, inputs, chips, and menus",
    caption: "Contributing to and Scaling the Opera for Android Design System",
    about: "Design",
  },
  {
    src: "/images/work/tiggerfree.png",
    width: 2400,
    height: 1920,
    alt: "TriggerFree movie search landing page displayed inside a tablet frame",
    caption: "TriggerFree Movie Search Concept",
    about: "Design",
  },
  {
    src: "/images/work/error.png",
    width: 2400,
    height: 1920,
    alt: "MiniPay error bottom sheet with an alert illustration and Retry button",
    caption: "Default Error Bottom Sheet for MiniPay",
    about: "Design",
  },
  {
    src: "/images/work/mobile-onboarding.png",
    width: 2400,
    height: 1920,
    alt: "Opera for Android onboarding concept prompting users to set Opera as their default browser",
    caption: "Onboarding Experiments for Opera for Android",
    about: "Design",
  },
];
