import styled, { css } from 'styled-components';
import media from 'styled-media-query';

type ModalProps = {
  open: boolean;
};

export const ModalOverlay = styled.div<ModalProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.35);

  display: flex;

  transition: 650ms;

  z-index: 100000;

  ${({ open }) =>
    open
      ? css`
          opacity: 1;
          height: 100%;
        `
      : css`
          opacity: 0;
          height: 0;
          overflow: hidden;
        `}
`;

export const Modal = styled.div`
  background: ${({ theme }) => theme.colors.primary};

  width: 90%;
  height: 90%;
  max-width: 100rem;
  max-height: 40rem;

  border-radius: 0.3rem;
  padding: 5rem 3rem;

  margin: 0 2rem;

  transition: 835ms;

  position: relative;

  ${media.lessThan('small')`
    padding-top: 2rem;
    height: 80%;
    max-height: initial;
  `}
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 25px;

  margin: 0 auto;
`;

export const ModalBody = styled.div`
  padding-top: 2rem;
  padding-bottom: 2rem;
  height: 100%;

  ${({ theme }) => css`
    ${theme.utils.display.flex.center}
  `};
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
    background: ${({ theme }) => theme.colors.white};
    transform: rotate(-45deg);

    position: absolute;

    top: 75%;
    left: 33%;

    transform: rotate(45deg) translate(-50%, -50%);

    &:after {
      content: '';
      width: 4rem;
      height: 0.3rem;
      background: ${({ theme }) => theme.colors.white};

      position: absolute;
      bottom: 0;
      left: 0;

      transform: rotate(90deg);
    }
  }
`;

export const TopLeftDetail = styled.img`
  position: absolute;
  top: 0%;
  left: 0%;

  width: 20%;
  max-width: 13rem;
`;

export const BottomRightDetail = styled.img`
  position: absolute;
  bottom: 0%;
  right: 0%;

  width: 20%;
  max-width: 13rem;
`;
