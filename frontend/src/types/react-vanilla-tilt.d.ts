declare module "react-vanilla-tilt" {
  import { ComponentType, HTMLAttributes } from "react";

  interface TiltProps extends HTMLAttributes<HTMLDivElement> {
    options?: {
      max?: number;
      perspective?: number;
      scale?: number;
      speed?: number;
      transition?: boolean;
      axis?: string | null;
      reset?: boolean;
      easing?: string;
      glare?: boolean;
      "max-glare"?: number;
      "glare-prerender"?: boolean;
      "mouse-event-element"?: string | null;
      gyroscope?: boolean;
      "gyroscope-min-angle-x"?: number;
      "gyroscope-max-angle-x"?: number;
      "gyroscope-min-angle-y"?: number;
      "gyroscope-max-angle-y"?: number;
    };
    style?: React.CSSProperties;
    className?: string;
  }

  const Tilt: ComponentType<TiltProps>;
  export default Tilt;
}
