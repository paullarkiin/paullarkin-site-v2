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
    alt: "A dark Sloan's Gym landing page with oversized type and a gym interior photograph.",
    caption: "Sloan’s Gym landing page concept",
    about: "Concept",
  },
  {
    src: "/images/work/scroll-indictor.png",
    width: 2400,
    height: 1920,
    alt: "A tablet-framed saved-books interface with six book covers arranged in a three-column grid.",
    caption: "Book summaries reading companion",
  },
  {
    id: "animated-gradient",
    component: AnimatedGradient,
    caption: "Ambient gradient motion study",
  },
  {
    src: "/images/work/figma-sticky-notes.png",
    width: 2400,
    height: 1920,
    alt: "A movie search landing page shown inside a dark tablet frame.",
    caption: "TiggerFree movie search concept",
  },
  {
    src: "/images/work/book-summaries-work.png",
    width: 2400,
    height: 1920,
    alt: "A grid of blue interface components including switches, buttons, text fields, menus, and status controls.",
    caption: "Lakrits UI component explorations",
  },

  {
    src: "/images/work/minipay-send.png",
    width: 2400,
    height: 1920,
    alt: "A tablet-framed saved-books interface with six book covers arranged in a three-column grid.",
    caption: "Book summaries reading companion",
  },
  {
    src: "/images/work/sloans.png",
    width: 2400,
    height: 1920,
    alt: "A dark Sloan's Gym landing page with oversized type and a gym interior photograph.",
    caption: "Sloan’s Gym landing page concept",
  },
  {
    src: "/images/work/ai-chat-upload.png",
    width: 2400,
    height: 1920,
    alt: "A movie search landing page shown inside a dark tablet frame.",
    caption: "TiggerFree movie search concept",
  },
  {
    src: "/images/work/minipay-card-landing.png",
    width: 2400,
    height: 1920,
    alt: "Three dark-blue mobile weather screens showing search, Mars conditions, and a forecast.",
    caption: "Planetary weather app concept",
  },
  {
    src: "/images/work/design-system-preview.png",
    width: 2400,
    height: 1920,
    alt: "A dark Sloan's Gym landing page with oversized type and a gym interior photograph.",
    caption: "Sloan’s Gym landing page concept",
  },
  {
    src: "/images/work/ai-tab-ui.png",
    width: 2400,
    height: 1920,
    alt: "A dark Sloan's Gym landing page with oversized type and a gym interior photograph.",
    caption: "Sloan’s Gym landing page concept",
  },
  {
    src: "/images/work/figma-strings-plugin.png",
    width: 2400,
    height: 1920,
    alt: "A movie search landing page shown inside a dark tablet frame.",
    caption: "TiggerFree movie search concept",
  },
  {
    src: "/images/work/ofa-design-system.png",
    width: 2400,
    height: 1920,
    alt: "A movie search landing page shown inside a dark tablet frame.",
    caption: "TiggerFree movie search concept",
  },
  {
    src: "/images/work/tiggerfree.png",
    width: 2400,
    height: 1920,
    alt: "A movie search landing page shown inside a dark tablet frame.",
    caption: "TiggerFree movie search concept",
  },
  {
    src: "/images/work/error.png",
    width: 2400,
    height: 1920,
    alt: "A dark Sloan's Gym landing page with oversized type and a gym interior photograph.",
    caption: "Sloan’s Gym landing page concept",
  },
  {
    src: "/images/work/mobile-onboarding.png",
    width: 2400,
    height: 1920,
    alt: "A dark Sloan's Gym landing page with oversized type and a gym interior photograph.",
    caption: "Sloan’s Gym landing page concept",
  },
];
