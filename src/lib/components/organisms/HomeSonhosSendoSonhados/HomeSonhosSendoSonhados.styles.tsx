import styled, { css, DefaultTheme } from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;

  margin: 0 auto;

  margin-top: ${({ theme }) => theme.spacing.xxxlarge};
  margin-bottom: ${({ theme }) => theme.spacing.small};

  ${({ theme }) => css`
    ${media.lessThan('medium')`
        margin-top: ${theme.spacing.small};
        margin-bottom: ${theme.spacing.small};
    `}

    .carousel-item {
      ${media.lessThan('small')`
        ${theme.utils.display.flex.center}
      `}
    }
  `}
`;

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.font.family.pilat};
  font-size: ${({ theme }) => theme.font.sizes.xxlarge};
  color: ${({ theme }) => theme.colors.primary};

  max-width: ${({ theme }) => theme.breakpoints.large};

  margin-left: auto;
  margin-right: auto;

  text-align: center;

  padding: 0 ${({ theme }) => theme.spacing.xxlarge};

  ${media.lessThan('medium')`
    padding-left: ${({ theme }) => theme.spacing.medium};
    padding-right: ${({ theme }) => theme.spacing.medium};
  `}
`;

export const SonhoCard = styled.div`
  display: flex;
  flex-direction: column;

  width: 95%;
`;

export const SonhoCardBanner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: url(${({ bg }: { bg: string }) => bg});
  background-size: 100% auto;
  background-position: center;
  background-repeat: no-repeat;

  padding: 2rem 3rem;

  min-height: 14rem;

  position: relative;

  p {
    z-index: 10;
    text-align: center;
    font-size: ${({ theme }) => theme.font.sizes.medium};
    font-weight: ${({ theme }) => theme.font.bold};

    background-color: ${({ theme }) => theme.colors.secondary};

    padding: ${({ theme }) => theme.spacing.xxxsmall};

    border-radius: ${({ theme }) => theme.utils.button.border.radius};
  }

  a {
    z-index: 10;
  }

  &:after {
    content: '';
    position: absolute;
    top: 0%;
    left: 0%;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.darkerPrimary};
    opacity: 0.3;
    filter: brightness(50%);
    z-index: 1;
  }
`;

export const SonhoCardContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;

  background-color: ${({ theme }) => theme.colors.secondary};

  padding: 2rem 3rem;
`;

export const SonhoCardDescription = styled.p`
  font-size: ${({ theme }) => theme.font.sizes.xsmall};
  color: ${({ theme }) => theme.colors.white};
`;

export const TagWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: ${({ theme }) => theme.spacing.xxsmall};
`;

export const Tag = styled.div`
  background-color: ${({
    theme,
    color,
  }: {
    theme: DefaultTheme;
    color: 'lighterPrimary' | 'lighterSecondary';
  }) => theme.colors[color]};

  font-size: ${({ theme }) => theme.font.sizes.xxxsmall};

  padding: 1rem 1.5rem;
  border-radius: 1.6rem;
`;
