// TypewriterCursor/TypewriterCursor.tsx
import { useEffect, useState, useCallback } from "react";
import * as S from "./TypewriterCursor.styles";

export interface TypewriterCursorProps {
  text: string;
  speed?: number;
  onTypingComplete?: () => void;
  onSequenceComplete?: () => void;
}

export const TypewriterCursor: React.FC<TypewriterCursorProps> = ({
  text,
  speed = 60,
  onTypingComplete,
  onSequenceComplete,
}) => {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(false);
  const [cursorClass, setCursorClass] = useState("");

  // Helper functions for cursor animations
  const showCursorWithGrowAnimation = useCallback(() => {
    setShowCursor(true);
    setCursorClass("cursor-appear");
    setTimeout(() => setCursorClass("cursor-visible"), 80);
  }, []);

  const showCursorNormal = useCallback(() => {
    setShowCursor(true);
    setCursorClass("cursor-visible");
  }, []);

  const hideCursorNormal = useCallback(() => {
    setShowCursor(false);
    setCursorClass("");
  }, []);

  const hideCursorWithShrinkAnimation = useCallback(() => {
    setCursorClass("cursor-disappear");
    setTimeout(() => {
      setShowCursor(false);
      setCursorClass("");
    }, 150);
  }, []);

  useEffect(() => {
    // Reset states
    setDisplayText("");
    setShowCursor(false);
    setCursorClass("");

    let timeoutId: NodeJS.Timeout;
    let currentCharIndex = 0;

    // Step 1: Initial cursor blinks (exactly 2 times)
    const initialBlink = () => {
      // 1st blink: GROW → visible → normal OFF
      showCursorWithGrowAnimation();
      setTimeout(() => hideCursorNormal(), 400);

      // 2nd blink: normal ON → normal OFF
      setTimeout(() => showCursorNormal(), 800);
      setTimeout(() => hideCursorNormal(), 1200);

      // Start typing after the 2 blinks are complete
      setTimeout(startTyping, 1600);
    };

    // Step 2: Typing effect
    const startTyping = () => {
      const typeNextChar = () => {
        if (currentCharIndex < text.length) {
          setDisplayText(text.substring(0, currentCharIndex + 1));
          currentCharIndex++;
          timeoutId = setTimeout(typeNextChar, speed);
        } else {
          // Step 3: Typing complete, add space and final blinks
          setDisplayText(text + " "); // Add space after text
          onTypingComplete?.();
          setTimeout(finalBlinks, 300);
        }
      };
      typeNextChar();
    };

    // Step 3: Final cursor blinks (exactly 2 times) then disappear
    const finalBlinks = () => {
      // 1st blink: normal ON → normal OFF
      showCursorNormal();
      setTimeout(() => hideCursorNormal(), 400);

      // 2nd blink: normal ON → SHRINK (final disappearance)
      setTimeout(() => showCursorNormal(), 800);
      setTimeout(() => {
        hideCursorWithShrinkAnimation();
      }, 1200);
    };

    timeoutId = setTimeout(initialBlink, 500);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [
    text,
    speed,
    onTypingComplete,
    onSequenceComplete,
    showCursorWithGrowAnimation,
    showCursorNormal,
    hideCursorNormal,
    hideCursorWithShrinkAnimation,
  ]);

  return (
    <S.TypewriterContainer>
      {displayText}
      {showCursor && <S.Cursor className={cursorClass} />}
    </S.TypewriterContainer>
  );
};
