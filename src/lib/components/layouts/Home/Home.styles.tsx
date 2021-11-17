import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const FormDreamContainer = styled.div`
  background: ${({ theme }) => theme.colors.primary};

  width: 90%;
  height: 90%;
  max-width: 100rem;
  max-height: 40rem;

  border-radius: 0.3rem;
  padding: 8rem 3rem;

  margin: 4rem auto;

  transition: 835ms;

  position: relative;

  ${media.lessThan('small')`
    padding-top: 2rem;
    height: 80%;
    max-height: initial;

    padding: 8rem 1rem;

    margin: 4rem 1rem;

  `}
`;

export const FormDreamBody = styled.div`
  padding-top: 2rem;
  padding-bottom: 2rem;
  height: 100%;

  ${({ theme }) => css`
    ${theme.utils.display.flex.center}
  `};
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
