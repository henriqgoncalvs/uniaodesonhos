import styled, { css, DefaultTheme } from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.large};

  margin: 0 auto;

  margin-top: ${({ theme }) => theme.spacing.xlarge};
  margin-bottom: ${({ theme }) => theme.spacing.small};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 0 ${({ theme }) => theme.spacing.xxlarge};

  ${media.lessThan('medium')`
    padding: 0 ${({ theme }) => theme.spacing.medium};
  `}
`;

export const UniaoWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.utils.display.flex.spaceBetween}
  `}

  margin-right: ${({ theme }) => theme.spacing.xxlarge};

  ${media.lessThan('medium')`
    flex-direction: column;

    margin-right: 0;
    margin-bottom: ${({ theme }) => theme.spacing.medium};
  `}
`;

export const IllustrationWrapper = styled.div`
  flex: 0.8;
`;

export const Illustration = styled.img`
  width: 100%;
`;

export const Content = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  ${media.lessThan('medium')`
    text-align: center;

    align-items: center;
  `}
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.font.sizes.xxlarge};
  font-family: ${({ theme }) => theme.font.family.pilat};
  font-weight: ${({ theme }) => theme.font.heavy};

  color: ${({ theme }) => theme.colors.primary};

  margin-bottom: ${({ theme }) => theme.spacing.xxsmall};
`;

export const Description = styled.p`
  font-size: ${({ theme }) => theme.font.sizes.xsmall};
`;

export const WordsLine = styled.div`
  ${({ theme }) => css`
    ${theme.utils.display.flex.spaceBetween}

    ${media.lessThan('medium')`
      flex-direction: column;
    `}
  `}
`;

export const Word = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    font-family: ${theme.font.family.pilat};
    font-weight: ${theme.font.black};

    margin-left: ${theme.font.sizes.medium};
    margin-right: ${theme.font.sizes.medium};

    ${media.lessThan('large')`
      font-size: ${theme.font.sizes.xlarge};
    `}

    ${media.lessThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};
      margin: ${theme.font.sizes.xlarge} 0;
    `}

    ${media.lessThan('small')`
      font-size: ${theme.font.sizes.xlarge};
      margin: ${theme.font.sizes.medium} 0;
    `}
  `}

  color: ${({
    theme,
    color = 'primary',
  }: {
    theme: DefaultTheme;
    color?: 'primary' | 'secondary';
  }) => theme.colors[color]};

  text-transform: uppercase;
`;

export const CompanyWrapper = styled.div`
  display: flex;
  flex-direction: ${({ direction }: { direction?: 'row-reverse' }) =>
    direction};
  align-items: center;
  justify-content: space-between;

  ${media.lessThan('medium')`
    flex-direction: column-reverse;
  `}

  /* margin-top: ${({ theme }) => theme.spacing.xlarge}; */
  margin-bottom: ${({ theme }) => theme.spacing.small};

  & > div {
    margin-right: ${({ theme }) => theme.spacing.xxlarge};

    ${media.lessThan('medium')`
      margin-right: 0;
      margin-top: ${({ theme }) => theme.spacing.xxlarge};
    `}
  }
`;

export const CompanyTitle = styled.h3`
  font-size: ${({ theme }) => theme.font.sizes.xxlarge};
  font-family: ${({ theme }) => theme.font.family.pilat};
  font-weight: ${({ theme }) => theme.font.heavy};

  color: ${({ theme }) => theme.colors.secondary};

  margin-bottom: ${({ theme }) => theme.spacing.xxsmall};
`;

export const CompanyImageWrapper = styled.div`
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
`;

export const CompanyBackground = styled.img`
  max-width: 90%;
  height: auto;

  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);

  z-index: 1;
`;

export const CompanyLogo = styled.img`
  width: 50%;

  position: relative;

  z-index: 2;
`;
