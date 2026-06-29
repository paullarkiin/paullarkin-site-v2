import type { ComponentType } from "react";

import { BarsIcon } from "@/components/icons/BarsIcon";
import { ChatIcon } from "@/components/icons/ChatIcon";
import { CircleIcon } from "@/components/icons/CircleIcon";
import { DotsIcon } from "@/components/icons/DotsIcon";
import { ElevateIcon } from "@/components/icons/ElevateIcon";
import { GridIcon } from "@/components/icons/GridIcon";
import { LayersIcon } from "@/components/icons/LayersIcon";
import { LinesIcon } from "@/components/icons/LinesIcon";
import { MonoIcon } from "@/components/icons/MonoIcon";
import { RingIcon } from "@/components/icons/RingIcon";

export const iconMap: Record<
  string,
  ComponentType<{ className?: string; label?: string }>
> = {
  bars: BarsIcon,
  chat: ChatIcon,
  circle: CircleIcon,
  dots: DotsIcon,
  elevate: ElevateIcon,
  grid: GridIcon,
  layers: LayersIcon,
  lines: LinesIcon,
  mono: MonoIcon,
  ring: RingIcon,
};

export type IconName = keyof typeof iconMap;
