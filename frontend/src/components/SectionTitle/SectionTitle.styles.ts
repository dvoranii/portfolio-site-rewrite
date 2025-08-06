import styled from "styled-components";

interface TitleContainerProps {
  $paddingTop?: string;
}

export const TitleContainer = styled.div<TitleContainerProps>`
  display: flex;
  justify-content: center;
  position: relative;
  padding-top: ${(props) => props.$paddingTop || "9.8rem"};
  user-select: none;

  @media screen and (max-width: 912px) {
    padding-top: 2.4rem;
  }

  @media screen and (max-width: 480px) {
    padding-bottom: 2.4rem;
  }

  @media screen and (max-width: 390px) {
    padding-bottom: 1.2rem;
  }
`;

interface TitleInnerProps {
  $backgroundWidth?: number;
  $backgroundPosition?: number;
}

export const TitleInner = styled.div<TitleInnerProps>`
  position: relative;
  border-bottom: 6px solid #0777da;

  &::before {
    content: "";
    width: ${(props) =>
      props.$backgroundWidth ? `${props.$backgroundWidth}px` : "74px"};
    left: ${(props) =>
      props.$backgroundPosition ? `${props.$backgroundPosition}%` : "71%"};
    height: 32px;
    background-color: #f2c94c;
    position: absolute;
    bottom: 26.5px;
    z-index: -1;
  }

  @media screen and (max-width: 480px) {
    transform: scale(0.8);
  }
`;

export const TitleText = styled.h2`
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  display: inline-block;
  font-size: 62px;
  color: #333;
  letter-spacing: 1.2px;
  margin-bottom: 1.2rem;
  font-weight: 600;
  z-index: 600;
  text-shadow: 2px 2px 4px #00000046;
`;
