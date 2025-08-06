// TypewriterCursor/TypewriterCursor.styles.ts
import styled, { keyframes } from "styled-components";

const cursorGrow = keyframes`
  0% {
    height: 0;
    transform: translateY(-50%);
  }
  100% {
    height: 100%;
    transform: translateY(-50%);
  }
`;

const cursorShrink = keyframes`
  0% {
    height: 100%;
    transform: translateY(-50%);
  }
  100% {
    height: 0;
    transform: translateY(-50%);
  }
`;

export const TypewriterContainer = styled.span`
  display: inline-flex;
  align-items: center;
`;

export const Cursor = styled.span`
  display: inline-block;
  margin-left: 6px;
  width: 3px;
  position: relative;
  height: 0.9em;
  vertical-align: baseline;
  flex-shrink: 0;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    height: 0;
    background-color: white;
    transform-origin: center;
  }

  &.cursor-appear::before {
    animation: ${cursorGrow} 0.15s ease-out forwards;
  }

  &.cursor-disappear::before {
    animation: ${cursorShrink} 0.15s ease-in forwards;
  }

  &.cursor-visible::before {
    height: 100%;
  }
`;
