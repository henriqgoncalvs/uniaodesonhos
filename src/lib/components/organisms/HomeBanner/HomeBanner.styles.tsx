import styled, { css } from 'styled-components';

import homeBannerBg from 'assets/img/home-banner-bg.svg';

export const Container = styled.div`
  min-height: 100vh;
  background: url(${homeBannerBg}) center no-repeat;
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: ${({ theme }) => theme.spacing.xlarge};
  padding-bottom: ${({ theme }) => theme.spacing.xlarge};
`;

export const Wrapper = styled.div`
  height: 100%;
  max-width: ${({ theme }) => theme.breakpoints.desktop};

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: ${({ theme }) => theme.spacing.xxlarge};
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xsmall};
`;

export const UniaoDeSonhosLogo = styled.img`
  width: 80%;
`;

export const Title = styled.h1`
  width: 60%;

  ${({ theme }) => css`
    font: ${theme.font.sizes.xxlarge} ${theme.font.family.lato};
    color: ${theme.colors.white};
    margin: ${({ theme }) => theme.spacing.xxsmall};
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
`;
