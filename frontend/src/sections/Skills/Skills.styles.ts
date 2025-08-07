import styled from "styled-components";
import Tilt from "react-vanilla-tilt";

export const SkillsWrapper = styled.section`
  padding: 0 2.4rem 0;
  position: relative;
  max-width: 1600px;
  margin: 0 auto;
`;

export const SkillsContainer = styled.div`
  margin: 0 auto;
  padding-top: 4.8rem;
  /* overflow: hidden !important; */
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 24px;
  row-gap: 24px;
  padding: 0 40px;

  @media screen and (max-width: 1076px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    place-items: center;
  }

  @media screen and (max-width: 680px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(6, 1fr);
  }

  @media screen and (max-width: 460px) {
    padding: 0;
  }

  @media screen and (max-width: 380px) {
    padding: 0 10px;
  }
`;

export const SkillTilt = styled(Tilt)`
  width: 90% !important;
  /* box-shadow: 4px 4px 8px red !important; */

  @media screen and (max-width: 680px) {
    width: 350px !important;
    height: 88vw !important;
  }

  @media screen and (max-width: 460px) {
    width: 50vh !important;
    height: 110vw !important;
  }

  @media screen and (max-width: 460px) {
    width: 40vh !important;
  }
`;

export const SkillCard = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  transition: transform 0.3s ease;

  p {
    font-size: clamp(16px, 2vw, 1.2rem);
    font-family: "Montserrat", sans-serif;
    line-height: 1.5;
    margin-top: 12px;
    text-align: center;

    @media screen and (max-width: 380px) {
      font-size: 12px !important;
    }
  }
`;

export const SkillImageContainer = styled.div`
  position: relative;
  width: fit-content;
  margin: 0 auto;
`;

export const SkillLogo = styled.img`
  transition: opacity 0.3s ease;
`;

export const SkillHoverLogo = styled(SkillLogo)`
  position: absolute;
  left: 0;
  opacity: 0;
`;

export const SkillImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  user-select: none;

  h4 {
    font-family: "Roboto", sans-serif;
    letter-spacing: 0.25px;
    font-size: clamp(18px, 2vw, 1.8rem);
    margin-bottom: 12px;
  }

  img {
    width: 200px;
    transition: opacity 0.2s ease-in-out;

    &.ps-logo,
    &.fb-logo,
    &.js-logo,
    &.react-logo,
    &.html-logo,
    &.css-logo,
    &.vite-logo {
      padding: 20px;
    }
  }

  &:hover {
    ${SkillLogo} {
      opacity: 0;
    }
    ${SkillHoverLogo} {
      opacity: 1;
    }
  }

  @media screen and (max-width: 1076px) {
    &.react-logo img,
    &.node-logo img {
      max-width: 247px;
    }

    &.node-logo img {
      padding-top: 25px;
    }
  }

  @media screen and (max-width: 380px) {
    img {
      max-width: 146px;
    }
  }
`;
