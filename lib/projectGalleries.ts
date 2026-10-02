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
      "MiniPay is a self-custodial stablecoin wallet for sending dollar-based funds globally using a phone number. I design its core sending, exchange, recovery, and card experiences, working across interaction design, prototyping, and web implementation.",
    items: getProjectGalleryItems("minipay"),
  },
  "browser-ai": {
    title: "Opera Browser AI",
    description:
      "Opera Browser AI is an assistant built into the browser for searching, creating, and working with online content. I design and build experiences across chat, media, and content management, taking ideas from early interaction concepts through to production React UI.",
    items: getProjectGalleryItems("browser-ai"),
  },
  "opera-for-android": {
    title: "Opera for Android",
    description:
      "Opera for Android is a feature-rich mobile browser for phones and tablets. I designed onboarding, personalisation, downloads, and content experiences, while contributing to the design system and internal tools used across the wider product team.",
    items: getProjectGalleryItems("opera-for-android"),
  },
  other: {
    title: "Independent Work",
    description:
      "A selection of client work, UI components, and side projects across design and engineering—from early concepts to shipped work.",
    items: getProjectGalleryItems("other"),
  },
} satisfies Record<ProjectGalleryId, ProjectGallery>;
