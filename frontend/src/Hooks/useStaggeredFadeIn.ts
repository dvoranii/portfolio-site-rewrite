import { useState, useEffect, useRef } from "react";

export const useStaggeredFadeIn = (
  itemCount: number,
  delay = 200,
  threshold = 0.5
) => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const timeoutsRef = useRef<number[]>([]);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (hasAnimatedRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            hasAnimatedRef.current = true;

            timeoutsRef.current.forEach((timeout) => clearTimeout(timeout));
            timeoutsRef.current = [];

            for (let i = 0; i < itemCount; i++) {
              const timeout = setTimeout(() => {
                setVisibleItems((prev) => [...prev, i]);
              }, i * delay);
              timeoutsRef.current.push(timeout);
            }

            observer.disconnect();
          }
        });
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );

    const currentRef = containerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      observer.disconnect();
      timeoutsRef.current.forEach((timeout) => clearTimeout(timeout));
    };
  }, [itemCount, delay, threshold]);

  return { containerRef, visibleItems };
};
