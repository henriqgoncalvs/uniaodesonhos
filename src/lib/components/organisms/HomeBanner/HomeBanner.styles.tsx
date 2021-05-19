import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import homeBannerBg from 'assets/img/home-banner-bg.svg';

export const Container = styled.div`
  min-height: 100vh;
  background: url(${homeBannerBg}) no-repeat;
  background-position: center bottom;
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0 ${({ theme }) => theme.spacing.xxlarge} 20vh;
`;

export const Wrapper = styled.div`
  height: 100%;
  max-width: ${({ theme }) => theme.breakpoints.desktop};

  ${({ theme }) => css`
    ${theme.utils.display.flex.spaceBetween}
    gap: ${({ theme }) => theme.spacing.xxlarge};

    ${media.lessThan('medium')`
      flex-direction: column-reverse;
      gap: ${({ theme }) => theme.spacing.medium};
    `}
  `}
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xsmall};

  ${media.lessThan('medium')`
    align-items: center;
  `}
`;

export const UniaoDeSonhosLogo = styled.img`
  width: 80%;

  ${media.lessThan('small')`
    width: 100%;
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    width: 80%;
    font-size: ${theme.font.sizes.xxlarge};
    font-family: ${theme.font.family.lato};
    font-weight: 400;
    color: ${theme.colors.white};
    margin-top: ${({ theme }) => theme.spacing.xxsmall};

    ${media.lessThan('medium')`
      font-size: ${theme.font.sizes.xlarge};
      text-align: center;
      width: 100%;
    `}

    ${media.lessThan('small')`
      font-size: ${theme.font.sizes.large};
    `}
  `}
`;

export const ButtonWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.utils.display.flex.center}
    justify-content: flex-start;

    > button {
      margin-right: ${theme.spacing.medium};
    }

    ${media.lessThan('medium')`
      justify-content: center;
      flex-direction: column;
      gap: 0;

      > button {
        min-width: 100%;
        margin-right: 0;
        margin-bottom: ${theme.spacing.xxsmall};
      }
    `}
  `}
`;

export const IllustrationWrapper = styled.div`
  flex: 0.7;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Illustration = styled.img`
  width: 100%;

  ${media.between('small', 'medium')`
    width: 70%;
  `}
`;
