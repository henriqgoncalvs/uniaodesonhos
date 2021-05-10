import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.breakpoints.desktop};

  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: ${({ theme }) => theme.spacing.xxlarge};

  margin-top: ${({ theme }) => theme.spacing.xlarge};
  margin-bottom: ${({ theme }) => theme.spacing.small};
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
