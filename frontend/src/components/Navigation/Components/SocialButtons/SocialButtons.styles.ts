import styled from "styled-components";

export const SocialsList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  max-width: 150px;
  margin: 0;
  padding: 0;

  li {
    padding: 0px 10px;
  }

  @media screen and (max-width: 768px) {
    padding: 0;
    justify-content: center;
    max-width: 100%;
    padding: 20px 0;

    li {
      padding: 0;
    }
  }
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SocialLogo = styled.img`
  min-width: 30px;
  width: 100%;
  max-width: 30px;
  filter: invert(1);
  transition: filter 0.3s ease;

  &:hover {
    filter: invert(0.8);
  }
`;
