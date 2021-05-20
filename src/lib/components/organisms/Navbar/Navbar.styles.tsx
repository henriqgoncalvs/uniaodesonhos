import styled, { css } from 'styled-components';
import media from 'styled-media-query';

interface NavbarProps {
  open: boolean;
}

export const Container = styled.div<NavbarProps>`
  width: 50%;
  max-width: 50rem;
  height: 100vh;

  ${media.lessThan('small')`
    width: 100%;
    height: 100%;
  `}

  background-color: ${({ theme }) => theme.colors.secondary};

  /* padding: 4rem 8rem; */

  ${({ theme }) => css`
    ${theme.utils.display.flex.center}

    justify-content: flex-start;

    padding-left: 12rem;

    ${media.lessThan('small')`
      padding-left: 0;
      justify-content: center;
    `}
  `}

  position: fixed;
  top: 0;
  left: ${({ open }) => (open ? '0' : '-100%')};
  z-index: 1001;

  transition: 850ms;
`;

export const OpenButton = styled.div<NavbarProps>`
  width: 5rem;
  height: 4rem;
  border-radius: 0.8rem;

  position: fixed;

  top: 5rem;
  left: 5rem;

  display: ${({ open }) => (open ? 'none' : 'initial')};

  background-color: ${({ theme }) => theme.colors.darkerPrimary};

  transition: 2ms;
  cursor: pointer;

  ${({ theme }) => theme.utils.display.flex.center}

  ${media.lessThan('small')`
    top: 3rem;
    left: 2rem;
  `}
`;

export const CloseButton = styled.div`
  width: 5rem;
  height: 5rem;
  position: absolute;

  top: 5rem;
  right: 5rem;

  ${media.lessThan('small')`
    top: 3rem;
    right: 2rem;
  `}

  cursor: pointer;

  & > div {
    width: 4rem;
    height: 0.3rem;
    background: ${({ theme }) => theme.colors.black};
    transform: rotate(-45deg);

    position: absolute;

    top: 75%;
    left: 33%;

    transform: rotate(45deg) translate(-50%, -50%);

    &:after {
      content: '';
      width: 4rem;
      height: 0.3rem;
      background: ${({ theme }) => theme.colors.black};

      position: absolute;
      bottom: 0;
      left: 0;

      transform: rotate(90deg);
    }
  }
`;

export const LinksWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.utils.display.flex.spaceBetween};

    flex-direction: column;

    align-items: flex-start;

    ${media.lessThan('small')`
      align-items: center;
    `}
  `}

  height: 60%;
`;

export const Link = styled.button`
  ${({ theme }) => css`
    font-family: ${theme.font.family.ptsans};
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.bold};

    background: none;
    border: none;

    position: relative;
    /* z-index: 102; */

    &:after {
      content: '';
      opacity: 0;
      position: absolute;
      width: 100%;
      height: 1.2rem;
      background-color: ${theme.colors.primary};

      bottom: 10%;
      left: 0;

      z-index: -1;

      transition: opacity 0.2s ease-in-out;
    }

    &:hover::after {
      opacity: 1;
    }
  `}
`;

export const NavFooter = styled.div`
  position: absolute;
  bottom: 5rem;
  left: 50%;

  transform: translateX(-50%);

  ${({ theme }) => css`
    ${theme.utils.display.flex.spaceBetween};
    flex-direction: column;
  `}
`;

export const FooterCity = styled.p`
  font-size: ${({ theme }) => theme.font.sizes.small};
  font-style: italic;
`;

export const IconsWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.utils.display.flex.spaceBetween};

    a {
      color: ${theme.colors.black};

      ${theme.utils.display.flex.center};

      &:first-child {
        margin-right: 2rem;
      }
    }
  `}
`;
