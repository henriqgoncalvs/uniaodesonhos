import styled, { DefaultTheme } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;

  margin: 0 auto;

  margin-top: ${({ theme }) => theme.spacing.xxxlarge};
  margin-bottom: ${({ theme }) => theme.spacing.small};

  /* display: flex; */
  /* flex-direction: column; */
  /* align-items: center; */
  /* justify-content: ${({ theme }) => theme.spacing.xxlarge}; */
`;

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.font.family.pilat};
  font-size: ${({ theme }) => theme.font.sizes.xxlarge};
  color: ${({ theme }) => theme.colors.primary};

  max-width: ${({ theme }) => theme.breakpoints.notebook};

  margin-left: auto;
  margin-right: auto;

  width: 100%;
  text-align: center;
`;

export const SonhoCard = styled.div`
  display: flex;
  flex-direction: column;

  flex: 0.25;
  max-width: 30rem;
`;

export const SonhoCardBanner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: url(${({ bg }: { bg: string }) => bg});

  padding: 2rem 3rem;

  min-height: 14rem;

  p {
    text-align: center;
    font-size: ${({ theme }) => theme.font.sizes.medium};
  }
`;

export const SonhoCardButton = styled.a`
  background-color: ${({ theme }) => theme.colors.primary};
  background-position: center;
  background-size: cover;
  border: 0.2rem solid ${({ theme }) => theme.colors.primary};

  padding: 1rem 2.5rem;

  font-size: ${({ theme }) => theme.font.sizes.xxsmall};
  font-family: ${({ theme }) => theme.font.family.ptsans};

  color: ${({ theme }) => theme.colors.black};

  text-decoration: none;
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