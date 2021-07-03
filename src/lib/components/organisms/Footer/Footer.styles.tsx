import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  width: 100%;

  border-bottom: 0.3rem solid ${({ theme }) => theme.colors.black};

  margin-bottom: 3rem;
`;

export const Wrapper = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.large};

  margin: 0 auto;

  padding: 0 ${({ theme }) => theme.spacing.xxlarge};

  ${({ theme }) => css`
    ${theme.utils.display.flex.spaceBetween}

    ${media.lessThan('small')`
      flex-direction: column;
    `}
  `}

  gap: ${({ theme }) => theme.spacing.xxlarge};
`;

export const IllustrationWrapper = styled.div`
  flex: 0.5;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Illustration = styled.img`
  max-width: 100%;
`;

export const UniaoLogoWrapper = styled.div`
  flex: 1.15;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UniaoLogo = styled.img`
  max-width: 100%;
`;

export const FooterText = styled.p`
  flex: 0.7;

  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    font-family: ${theme.font.family.lato};
    font-weight: 400;
    color: ${theme.colors.black} !important;

    padding-bottom: 2rem;

    a {
      margin-top: 2rem;
      color: ${theme.colors.black} !important;
      font-size: ${theme.font.sizes.small};

      ${theme.utils.display.flex.center};

      svg {
        margin-right: 2rem;
      }
    }
  `}

  text-align: left;
`;

export const IconsWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;
