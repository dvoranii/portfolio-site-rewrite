import styled, { keyframes } from "styled-components";

const dash = keyframes`
  0% {
    stroke-dashoffset: 745.74853515625;
  }
  100% {
    stroke-dashoffset: 0;
  }
`;

export const StyledCheckmark = styled.path`
  fill: none;
  stroke: rgb(0, 214, 0);
  stroke-width: 8;
  stroke-miterlimit: 10;
  stroke-dashoffset: 745.74853515625;
  stroke-dasharray: 745.74853515625;
  animation: ${dash} 2s ease-out forwards infinite;
`;

export const StyledSVG = styled.svg`
  display: block; /* Ensures proper rendering */
`;
