// remove this file when i move to the dynamic version later and handle it in the tsconfig.json

declare module "*.md" {
  import type { ComponentType } from "react";
  const Component: ComponentType;
  export default Component;
}
