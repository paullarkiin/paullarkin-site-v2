import {
  getProjectGalleryItems,
  type ComponentGalleryItem,
  type GalleryItem,
  type ProjectGalleryId,
} from "@/lib/gallery";

export type ProjectGallery = {
  title: string;
  description: string;
  items: (GalleryItem | ComponentGalleryItem)[];
};

export const projectGalleries = {
  minipay: {
    title: "MiniPay",
    description:
      "At MiniPay, I design core payment experiences across sending, exchange, recovery, and cards. My work moves between interaction design, prototyping, and web implementation, in close collaboration with product and engineering.",
    items: getProjectGalleryItems("minipay"),
  },
  "browser-ai": {
    title: "Opera Browser AI",
    description:
      "At Opera, I work on AI-powered browser experiences across chat, media, and content management. I move between product design and front-end development, taking ideas from early interaction concepts through to production UI.",
    items: getProjectGalleryItems("browser-ai"),
  },
  "opera-for-android": {
    title: "Opera for Android",
    description:
      "On Opera for Android, I designed product features and the systems and tools behind them. My work covered onboarding, personalisation, downloads, content experiences, and contributions to the browser’s design system.",
    items: getProjectGalleryItems("opera-for-android"),
  },
  other: {
    title: "Work",
    description:
      "A selection of product experiences, UI components, and side projects across design and engineering—from early concepts to shipped work.",
    items: getProjectGalleryItems("other"),
  },
} satisfies Record<ProjectGalleryId, ProjectGallery>;
