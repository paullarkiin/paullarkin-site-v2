import type { ComponentType } from "react";

import { BarsIcon } from "@/components/icons/BarsIcon";
import { ChatIcon } from "@/components/icons/ChatIcon";
import { CircleIcon } from "@/components/icons/CircleIcon";
import { DotsIcon } from "@/components/icons/DotsIcon";
import { DollarIcon } from "@/components/icons/DollarIcon";
import { ElevateIcon } from "@/components/icons/ElevateIcon";
import { GridIcon } from "@/components/icons/GridIcon";
import { LayersIcon } from "@/components/icons/LayersIcon";
import { LinesIcon } from "@/components/icons/LinesIcon";
import { MonoIcon } from "@/components/icons/MonoIcon";
import { PlanetIcon } from "@/components/icons/PlanetIcon";
import { RingIcon } from "@/components/icons/RingIcon";
import { OperaIcon } from "@/components/icons/OperaIcon";
import { PlaneIcon } from "@/components/icons/PlaneIcon";

export const iconMap: Record<
  string,
  ComponentType<{ className?: string; label?: string }>
> = {
  bars: BarsIcon,
  chat: ChatIcon,
  circle: CircleIcon,
  dots: DotsIcon,
  dollar: DollarIcon,
  elevate: ElevateIcon,
  grid: GridIcon,
  layers: LayersIcon,
  lines: LinesIcon,
  mono: MonoIcon,
  planet: PlanetIcon,
  ring: RingIcon,
  opera: OperaIcon,
  plane: PlaneIcon,
};

export type IconName = keyof typeof iconMap;
