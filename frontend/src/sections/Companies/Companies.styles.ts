import styled, { keyframes, css } from "styled-components";

const scroll = keyframes`
  to {
    transform: translate3d(-50%, 0, 0);
  }
`;

export const CompaniesWrapper = styled.section`
  padding: 9.6rem 2.4rem 0;
  position: relative;
  max-width: 1600px;
  margin: 0 auto;
  padding-bottom: 4.8rem;
`;

interface ScrollerProps {
  $isAnimated: boolean;
}

export const Scroller = styled.div<ScrollerProps>`
  max-width: 1400px;
  margin: 0 auto;
  padding-top: 2.4rem;

  ul {
    margin: 0;
    padding-inline: 0;
    list-style: none;
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    padding-block: 1rem;

    li {
      padding: 1rem;
      border-radius: 0.5rem;
      font-family: "Montserrat", sans-serif;
      white-space: nowrap;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;

      /* &.og-logo {
        border-radius: 20px;
      } */

      img {
        width: 250px;
        height: auto;
        filter: grayscale();
        object-fit: contain;
        display: block;
        transition: all 250ms ease;

        &:hover {
          filter: none;
        }
      }
    }
  }

  ${({ $isAnimated }) =>
    $isAnimated &&
    css`
      overflow: hidden;
      mask: linear-gradient(
        90deg,
        transparent,
        white 20%,
        white 80%,
        transparent
      );

      ul {
        flex-wrap: nowrap;
        animation: ${scroll} 90s linear infinite;
        width: max-content;
      }

      &:hover ul {
        animation-play-state: paused;
      }
    `}
`;

export const IntroHeadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  user-select: none;
`;
export const IntroHeading = styled.h3`
  font-family: "Roboto", sans-serif;
  font-size: clamp(1.25rem, 2.4vw, 2rem);
  color: #0777da;
  margin: 0 0 1rem;
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 100%;
    height: 3px;
    background: #f2c94c;
  }
`;
