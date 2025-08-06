import styled, { keyframes, css } from "styled-components";

const fadeInSlideLeft = keyframes`
  from {
    transform: translateX(20px);
    opacity: 0;
    visibility: hidden; 
  }
  to {
    transform: translateX(0);
    opacity: 1;
    visibility: visible;
  }
`;

const fadeInSlideDown = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-10px);
    visibility: hidden;
  }

  100% {
    opacity: 1;
    transform: translateY(0);
    visibility: visible;
  }
`;

const moveForever = keyframes`
  0% { transform: translate3d(-90px, 0, 0); }
  100% { transform: translate3d(85px, 0, 0); }
`;

export const HeroWrapper = styled.div`
  background-color: #0777da;
  padding-top: 3.2rem;
  position: relative;
  user-select: none;
`;

export const HeroInner = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px 40px 0px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 105px 0px 0px 0px;
  }
`;

export const TextWrapper = styled.div`
  flex: 1;
  margin-top: -120px;

  @media screen and (max-width: 768px) {
    text-align: center;
    margin-top: 0px;
  }
`;

export const Name = styled.h1`
  font-size: clamp(24px, 4vw, 4.8rem);
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.49);
  margin: 0;
  font-family: "Roboto", sans-serif;

  opacity: 0;
  visibility: hidden;
  transform: translateY(10px);

  animation: ${fadeInSlideDown} 0.5s ease forwards;
`;

export const JobTitle = styled.h2`
  font-size: clamp(1.2rem, 4vw, 2rem);
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.26);
  margin: 0.5rem 0;
  font-family: "Roboto", sans-serif;
  min-height: calc(clamp(1.2rem, 4vw, 2rem) * 1.2);
  line-height: 1.2;

  &:empty::before {
    content: "\\00a0";
    visibility: hidden;
  }
`;

export const WelcomeText = styled.p`
  font-size: clamp(0.875rem, 2vw, 1.25rem);
  color: white;
  margin: 0;
  font-family: "Montserrat", sans-serif;

  opacity: 0;
  visibility: hidden;
  transform: translateY(10px);

  animation: ${fadeInSlideDown} 0.5s ease forwards;
  animation-delay: 0.15s;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 40px;
  padding-top: 20px;
  padding-left: 14px;

  @media screen and (max-width: 768px) {
    justify-content: center;
    gap: 32px;
  }
`;

export const ButtonLink = styled.a`
  text-decoration: none;
`;

export const Button = styled.button`
  width: 128px;
  height: 36px;
  border-radius: 5px;
  font-family: "Montserrat", "Helvetica", "Arial", sans-serif;
  font-weight: 500;
  background: linear-gradient(267.29deg, #30deeb 6.46%, #34dbff 97.39%);
  color: white;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 1px;
  transform: scale(1.15);
  box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.09);
  outline: none;
  line-height: 42px;
  padding: 0;

  background: rgb(252, 252, 252);
  box-shadow: 0px 0px 0px 2px #fff;
  border-radius: 1px;
  color: #0d79de;
  font-weight: 600;

  &:hover {
    background: transparent;
    box-shadow: none;
    color: white;
  }

  span {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    top: -5%;
  }

  &::before,
  &::after {
    position: absolute;
    content: "";
    right: 0;
    top: 0;
    background: #33f1ff;
    transition: all 0.3s ease;
  }
  &::before {
    height: 0%;
    width: 3px;
  }
  &::after {
    width: 0%;
    height: 2px;
  }
  &:hover::before {
    height: 100%;
  }
  &:hover::after {
    width: 100%;
  }

  span::before,
  span::after {
    position: absolute;
    content: "";
    left: 0;
    bottom: -4%;
    background: #33f1ff;
    transition: all 0.3s ease;
  }
  span::before {
    width: 2px;
    height: 0%;
  }
  span::after {
    width: 0%;
    height: 2px;
  }
  span:hover::before {
    height: 100%;
  }
  span:hover::after {
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    width: 106px;
  }
`;

export const ImageWrapper = styled.div`
  flex: 2;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 2.8rem;
  }
`;

export const LaptopImage = styled.img<{ $loaded: boolean }>`
  height: auto;
  opacity: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  visibility: hidden;
  object-fit: contain;

  ${({ $loaded }) =>
    $loaded &&
    css`
      animation: ${fadeInSlideLeft} 1s cubic-bezier(0.68, -0.55, 0.27, 1.55)
        forwards;
    `}

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-left: 0px;
  }
`;

export const WavesContainer = styled.div`
  position: relative;
  width: 100%;
  height: 15vh;
  margin-bottom: -7px;
  min-height: 100px;
  max-height: 150px;
  overflow: hidden;
`;

export const WavesSVG = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const ParallaxGroup = styled.g`
  & > use {
    animation: ${moveForever} 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
  }
  & > use:nth-child(1) {
    animation-delay: -2s;
    animation-duration: 7s;
  }
  & > use:nth-child(2) {
    animation-delay: -3s;
    animation-duration: 10s;
  }
  & > use:nth-child(3) {
    animation-delay: -4s;
    animation-duration: 13s;
  }
  & > use:nth-child(4) {
    animation-delay: -5s;
    animation-duration: 20s;
  }
`;
