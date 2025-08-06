import styled from "styled-components";

export const SocialButtonContainer = styled.a`
  text-decoration: none;
`;

export const Button = styled.button`
  border: none;
  padding: 8px 16px;
  font-family: "Montserrat", sans-serif;
  letter-spacing: 0.5px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 250ms ease;
  background-color: rgb(236, 236, 236);
  width: 100%;
  border-radius: 4px;
  font-size: clamp(16px, 2vw, 1.2rem);

  &:hover {
    background: #0777da;
    cursor: pointer;
    color: white;

    img {
      filter: invert(1);
    }
  }
`;

export const Icon = styled.img`
  width: 44px;
  height: 44px;
  padding-right: 10px;
  transition: filter 250ms ease;
`;
