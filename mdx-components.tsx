import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import { Highlights } from "./components/Highlights";

const components: MDXComponents = {};

export function useMDXComponents(): MDXComponents {
  return { ...components, Image, Highlights };
}
