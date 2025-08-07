import { useState, useEffect } from "react";

interface ScrollOpacityOptions {
  animateBackground?: boolean;
  animateBrightness?: boolean;
  startBg?: string;
  endBg?: string;
}

interface ScrollStyles {
  opacity: number;
  backgroundColor?: string;
  filter?: string;
}

const interpolateColor = (
  startColor: string,
  endColor: string,
  progress: number
): string => {
  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  };

  const start = hexToRgb(startColor);
  const end = hexToRgb(endColor);

  if (!start || !end) return startColor;

  const r = Math.round(start.r + (end.r - start.r) * progress);
  const g = Math.round(start.g + (end.g - start.g) * progress);
  const b = Math.round(start.b + (end.b - start.b) * progress);

  return `rgb(${r}, ${g}, ${b})`;
};

export function useScrollOpacity(
  elementId: string,
  offset?: number,
  fadeEndFactor?: number
): number;

export function useScrollOpacity(
  elementId: string,
  offset: number,
  fadeEndFactor: number,
  options: ScrollOpacityOptions
): ScrollStyles;

export function useScrollOpacity(
  elementId: string,
  offset: number = 100,
  fadeEndFactor: number = 0.7,
  options: ScrollOpacityOptions = {}
): number | ScrollStyles {
  const {
    animateBackground = false,
    animateBrightness = false,
    startBg = "#000000",
    endBg = "#ffffff",
  } = options;

  const [opacity, setOpacity] = useState<number>(0);
  const [backgroundColor, setBackgroundColor] = useState<string>(
    animateBackground ? startBg : "transparent"
  );
  const [brightness, setBrightness] = useState<number>(
    animateBrightness ? 0 : 1
  );

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById(elementId);
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementTop = rect.top;
      const elementHeight = rect.height;

      const fadeStartBrightness = windowHeight - offset;
      const fadeEndBrightness = windowHeight - elementHeight * fadeEndFactor;

      const fadeStartBg = windowHeight - offset * 2;
      const fadeEndBg = windowHeight - elementHeight * 1.5;

      let brightnessProgress = 0;
      if (
        elementTop <= fadeStartBrightness &&
        elementTop >= fadeEndBrightness
      ) {
        brightnessProgress =
          (fadeStartBrightness - elementTop) /
          (fadeStartBrightness - fadeEndBrightness);
        brightnessProgress = Math.min(1, Math.max(0, brightnessProgress));
      } else if (elementTop < fadeEndBrightness) {
        brightnessProgress = 1;
      }

      let bgProgress = 0;
      if (elementTop <= fadeStartBg && elementTop >= fadeEndBg) {
        bgProgress = (fadeStartBg - elementTop) / (fadeStartBg - fadeEndBg);
        bgProgress = Math.min(1, Math.max(0, bgProgress));
      } else if (elementTop < fadeEndBg) {
        bgProgress = 1;
      }

      setOpacity(brightnessProgress);

      if (animateBackground) {
        setBackgroundColor(interpolateColor(startBg, endBg, bgProgress));
      }

      if (animateBrightness) {
        setBrightness(brightnessProgress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [
    elementId,
    offset,
    fadeEndFactor,
    animateBackground,
    animateBrightness,
    startBg,
    endBg,
  ]);

  if (animateBackground || animateBrightness) {
    return {
      opacity,
      backgroundColor: animateBackground ? backgroundColor : undefined,
      filter: animateBrightness ? `brightness(${brightness})` : undefined,
    };
  }
  return opacity;
}
