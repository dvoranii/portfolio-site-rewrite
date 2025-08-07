import { useState, useEffect, useRef } from "react";

export const useStaggeredFadeIn = (
  itemCount: number,
  delay = 200,
  threshold = 0.5 // Increased threshold
) => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]); // Changed to array for easier mapping
  const containerRef = useRef<HTMLDivElement>(null);
  const timeoutsRef = useRef<number[]>([]);
  const hasAnimatedRef = useRef(false); // Track if animation has run

  useEffect(() => {
    if (hasAnimatedRef.current) return; // Don't observe if already animated

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            hasAnimatedRef.current = true;

            // Clear any existing timeouts
            timeoutsRef.current.forEach((timeout) => clearTimeout(timeout));
            timeoutsRef.current = [];

            // Start the staggered animation
            for (let i = 0; i < itemCount; i++) {
              const timeout = setTimeout(() => {
                setVisibleItems((prev) => [...prev, i]);
              }, i * delay);
              timeoutsRef.current.push(timeout);
            }

            observer.disconnect(); // Fully disconnect instead of just unobserve
          }
        });
      },
      { threshold, rootMargin: "0px 0px -40px 0px" } // Added rootMargin
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
