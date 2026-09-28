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
      "Selected product design work for MiniPay, covering core payment flows and supporting experiences.",
    items: getProjectGalleryItems("minipay"),
  },
  "browser-ai": {
    title: "Opera Browser AI",
    description:
      "Selected product design and development work for AI-powered experiences in Opera.",
    items: getProjectGalleryItems("browser-ai"),
  },
  "opera-for-android": {
    title: "Opera for Android",
    description:
      "Selected product and design-system work for Opera’s Android browser.",
    items: getProjectGalleryItems("opera-for-android"),
  },
  other: {
    title: "Work",
    description:
      "A selection of product experiences, UI components, and side projects across design and engineering—from early concepts to shipped work.",
    items: getProjectGalleryItems("other"),
  },
} satisfies Record<ProjectGalleryId, ProjectGallery>;
