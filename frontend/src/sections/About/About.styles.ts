import styled from "styled-components";

export const AboutWrapper = styled.section`
  padding: 12.4rem 2.4rem 0;
  position: relative;
  max-width: 1600px;
  margin: 0 auto;
`;

export const AboutContent = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  padding: 2.4rem;
  position: relative;
`;

export const AboutText = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: clamp(1rem, 1.25vw + 0.5rem, 1.35rem);
  line-height: 1.7;
  margin-bottom: 1.5rem;
  color: #333;

  span {
    font-weight: bold;
    color: #444;
  }
`;

export const ExpertiseHeading = styled.h3`
  font-family: "Roboto", sans-serif;
  font-size: clamp(1.25rem, 2vw, 1.75rem);
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

export const ExpertiseList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0.8rem 0 1.2rem;
  margin-inline-start: 24px;
`;

export const ExpertiseItem = styled.li`
  position: relative;
  padding-left: 2rem;
  margin-bottom: 0.8rem;
  font-family: "Montserrat", sans-serif;
  font-size: clamp(1rem, 1.25vw + 0.5rem, 1.35rem);
  line-height: 1.6;
  color: #444;

  &::before {
    content: "✓";
    position: absolute;
    left: 0;
    color: #0777da;
    font-weight: bold;
  }
`;

export const CallToAction = styled.p`
  font-family: "Montserrat", sans-serif;
  font-style: italic;
  font-size: clamp(18px, 2vw, 1.4rem);
  color: #555;
  margin-top: 2rem;
  text-align: center;
  padding-top: 2.4rem;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(to right, lavender 20%, #2780de);
  }
`;

export const SkillsContainer = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr 1fr;
  text-align: center;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 900px) {
    grid-template-columns: repeat(4, 1fr);
    width: 100%;
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Skill = styled.div`
  font-size: clamp(0.95rem, 1.1vw + 0.5rem, 1.15rem);
  width: fit-content;
  border: 1px solid #ccc;
  padding: 1rem 2rem;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.1);
  font-family: "Montserrat", sans-serif;
  transition: all 250ms ease;
  margin: 0 auto;
  background: white;
  display: flex;
  align-items: center;
  height: fit-content;

  &:nth-child(1):hover {
    border-color: #ff6b6b;
  }
  &:nth-child(2):hover {
    border-color: #4ecdc4;
  }
  &:nth-child(3):hover {
    border-color: #45b7d1;
  }
  &:nth-child(4):hover {
    border-color: #ffbe0b;
  }
  &:nth-child(5):hover {
    border-color: #fb5607;
  }
  &:nth-child(6):hover {
    border-color: #8338ec;
  }
  &:nth-child(7):hover {
    border-color: #3a86ff;
  }
  &:nth-child(8):hover {
    border-color: #ff006e;
  }
  &:nth-child(9):hover {
    border-color: #1b9aaa;
  }
  &:nth-child(10):hover {
    border-color: #06d6a0;
  }

  &:hover {
    transform: scale(1.05) translateY(-4px);
    box-shadow: 6px 6px 8px rgba(0, 0, 0, 0.15);
    cursor: default;
  }
`;

export const SocialsAndSkillsWrapper = styled.div`
  display: flex;
  width: 90%;
  margin: 0 auto;
  gap: 2.4rem;
`;

export const SocialButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  width: 100%;
  max-width: 200px;
  padding-right: 2.4rem;
  border-right: 1px solid #bbb;
  gap: 1.2rem;
`;
