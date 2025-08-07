import styled, { css } from "styled-components";

interface NavWrapperProps {
  $isFixed: boolean;
}

interface NavListProps {
  $navActive: boolean;
}

interface BurgerLineProps {
  $navActive: boolean;
  $lineNumber: 1 | 2 | 3;
}

export const NavWrapper = styled.div<NavWrapperProps>`
  background: #0777da;
  transition: all 150ms ease;
  position: relative;
  top: 0;
  width: 100%;
  z-index: 99;

  ${({ $isFixed }) =>
    $isFixed &&
    css`
      position: fixed;
      top: 0;
      animation: slideIn 0.3s ease-in-out forwards;
    `}

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-50%);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow-x: hidden;
  font-family: "Montserrat", sans-serif;
`;

export const NavLogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const NavLogo = styled.img`
  padding: 20px;
  max-width: 125px;

  @media screen and (max-width: 768px) {
    max-width: 85px;
  }
`;

export const NavList = styled.ul<NavListProps>`
  display: flex;
  list-style: none;
  justify-content: space-evenly;
  align-items: center;
  padding-right: 40px;
  transition: transform 250ms ease;
  z-index: 99;
  margin: 0;

  li {
    padding: 0px 20px;
    color: white;
    opacity: 0;
    transform: translateY(-20px);
    transition: all 0.5s ease;

    &:hover {
      cursor: pointer;
      filter: brightness(0.9);
    }
  }

  ${({ $navActive }) =>
    $navActive &&
    css`
      li {
        opacity: 1;
        transform: translateY(0);

        &:nth-of-type(1) {
          transition-delay: 0s;
        }

        &:nth-of-type(2) {
          transition-delay: 0.1s;
        }

        &:nth-of-type(3) {
          transition-delay: 0.2s;
        }

        &:nth-of-type(4) {
          transition-delay: 0.3s;
        }

        &:nth-of-type(5) {
          transition-delay: 0.4s;
        }

        &:nth-of-type(6) {
          transition-delay: 0.5s;
        }
      }
    `}

  @media screen and (min-width: 768px) {
    li {
      opacity: 1;
      transform: translateY(0px);
    }
  }

  @media screen and (max-width: 768px) {
    position: fixed;
    top: 0;
    right: 0;
    width: 50%;
    height: 100vh;
    background: #0777da;
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 80px;
    transform: translateX(100%);
    transition: all 250ms ease;
    justify-content: space-evenly;
    padding-right: 0;

    ${({ $navActive }) =>
      $navActive &&
      css`
        transform: translateX(0%);
      `}

    li {
      padding: 15px 20px;
      width: 100%;
      text-align: center;
    }
  }
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: white;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: rgba(255, 255, 255, 0.8);
  }
`;

export const Burger = styled.div`
  padding: 20px;
  display: none;
  transition: all 150ms ease;
  z-index: 99;
  user-select: none;

  &:hover {
    cursor: pointer;
    filter: brightness(0.9);
  }

  @media screen and (max-width: 768px) {
    display: block;
    padding-top: 14px;
  }
`;

export const BurgerLine = styled.div<BurgerLineProps>`
  width: 25px;
  height: 3px;
  background-color: white;
  margin: 5px;
  border-radius: 10px;
  transition: all 150ms ease;

  ${({ $navActive, $lineNumber }) => {
    if ($navActive) {
      switch ($lineNumber) {
        case 1:
          return css`
            transform: rotate(-45deg) translate(-5px, 6px);
          `;
        case 2:
          return css`
            opacity: 0;
          `;
        case 3:
          return css`
            transform: rotate(45deg) translate(-5px, -6px);
          `;
      }
    }
  }}
`;

export const NavOverlay = styled.div`
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9;
`;

// Additional mobile styles for fixed nav
export const NavWrapperFixed = styled(NavWrapper)`
  @media screen and (max-width: 768px) {
    height: 80px;

    ${NavLogo} {
      max-width: 90px;
    }
  }
`;
