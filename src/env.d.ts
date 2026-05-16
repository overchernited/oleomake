/// <reference types="astro/client" />

declare module "@lucide/astro" {
  import type { AstroComponentFactory } from "astro/runtime/server/index.js";
  interface IconProps {
    size?: number | string;
    color?: string;
    "stroke-width"?: number | string;
    class?: string;
    [key: string]: any;
  }
  export const Icon: AstroComponentFactory;
  export const MessageSquare: AstroComponentFactory;
  export const Mail: AstroComponentFactory;
  export const MapPin: AstroComponentFactory;
  export const User: AstroComponentFactory;
  export const Layers: AstroComponentFactory;
  export const ChevronDown: AstroComponentFactory;
  export const Rocket: AstroComponentFactory;
  export const Crown: AstroComponentFactory;
  export const Building: AstroComponentFactory;
  export const Send: AstroComponentFactory;
  export const Languages: AstroComponentFactory;
  export const MessageCircleWarning: AstroComponentFactory;
  export const Home: AstroComponentFactory;
  export const Briefcase: AstroComponentFactory;
  export const Check: AstroComponentFactory;
  export const Sparkles: AstroComponentFactory;
}
