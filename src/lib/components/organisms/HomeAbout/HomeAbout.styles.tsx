import styled, { DefaultTheme } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.breakpoints.desktop};

  margin: 0 auto;

  margin-top: ${({ theme }) => theme.spacing.xlarge};
  margin-bottom: ${({ theme }) => theme.spacing.small};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const UniaoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: ${({ theme }) => theme.spacing.xxlarge};
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
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: ${({ theme }) => theme.spacing.xlarge};
  margin-bottom: ${({ theme }) => theme.spacing.small};
`;

export const Word = styled.p`
  font-size: ${({ theme }) => theme.font.sizes.xxlarge};
  font-family: ${({ theme }) => theme.font.family.pilat};
  font-weight: ${({ theme }) => theme.font.black};

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

  margin-top: ${({ theme }) => theme.spacing.xlarge};
  margin-bottom: ${({ theme }) => theme.spacing.small};

  gap: ${({ theme }) => theme.spacing.xxlarge};
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
