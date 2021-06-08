import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.main`
  max-width: ${({ theme }) => theme.breakpoints.large};

  display: grid;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  margin: ${({ theme }) => theme.spacing.small} auto
    ${({ theme }) => theme.spacing.xxlarge};

  ${media.lessThan('large')`
    align-items: center;
  `}
`;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.font.family.pilat};
  font-size: ${({ theme }) => theme.font.sizes.xxlarge};
  color: ${({ theme }) => theme.colors.primary};

  max-width: ${({ theme }) => theme.breakpoints.large};

  text-align: left;

  margin-top: 0;

  ${media.lessThan('large')`
    text-align: center;
  `}

  ${media.lessThan('medium')`
    padding-left: ${({ theme }) => theme.spacing.medium};
    padding-right: ${({ theme }) => theme.spacing.medium};
  `}

  ${media.lessThan('small')`
    padding-left: ${({ theme }) => theme.spacing.xxsmall};
    padding-right: ${({ theme }) => theme.spacing.xxsmall};
  `}
`;

export const MainWrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 6rem;
  grid-column-gap: 15rem;

  ${media.lessThan('large')`
    padding-left: ${({ theme }) => theme.spacing.medium};
    padding-right: ${({ theme }) => theme.spacing.medium};

    grid-template-columns: 1fr;
  `}
`;
