import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  position: relative;
  top: 0%;

  min-height: 25rem;

  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export const Content = styled.div`
  flex: 1;

  padding: ${({ theme }) =>
    `${theme.spacing.xsmall} ${theme.spacing.small} ${theme.spacing.xxxlarge}`};

  display: flex;
  align-items: center;
  justify-content: space-between;

  z-index: 100;
`;

export const Logo = styled.img`
  height: 5rem;
  width: auto;
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  flex: 0.3;
`;

export const NavLink = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-family: ${theme.font.family.ptsans};
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.medium};
    font-style: italic;

    text-decoration: none;

    position: relative;

    &:after {
      content: '';
      opacity: 0;
      position: absolute;
      width: 100%;
      height: 1.2rem;
      background-color: ${theme.colors.secondary};

      bottom: 10%;
      left: 0;

      z-index: -1;

      transition: opacity 0.2s ease-in-out;
    }

    &:hover::after {
      opacity: 1;
    }

    &:hover {
      color: ${theme.colors.black};
    }
  `};
`;

export const Background = styled.div`
  position: absolute;
  z-index: 1;
  width: 100vw;
  height: 100%;

  flex: 1;

  bottom: 0rem;
  left: 0;

  img {
    position: absolute;
    bottom: 0%;
    left: 0%;

    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
