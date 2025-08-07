import { useState, useEffect } from "react";

export const useScrollOpacity = (
  elementId: string,
  offset = 100,
  fadeEndFactor = 0.7
) => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById(elementId);
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const elementTop = rect.top;
      const elementHeight = rect.height;

      const fadeStart = windowHeight - offset;
      const fadeEnd = windowHeight - elementHeight * fadeEndFactor;

      let newOpacity = 0;

      if (elementTop <= fadeStart && elementTop >= fadeEnd) {
        const progress = (fadeStart - elementTop) / (fadeStart - fadeEnd);
        newOpacity = Math.min(1, Math.max(0, progress));
      } else if (elementTop < fadeEnd) {
        newOpacity = 1;
      }

      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [elementId, offset]);

  return opacity;
};
