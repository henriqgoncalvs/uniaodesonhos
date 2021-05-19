import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.large};

  margin: 0 auto;

  margin-top: ${({ theme }) => theme.spacing.xxxlarge};
  margin-bottom: ${({ theme }) => theme.spacing.xxxlarge};

  ${({ theme }) => css`
    ${theme.utils.display.flex.spaceBetween}
  `}

  ${media.lessThan('medium')`
    flex-direction: column;
  `}

  padding: 0 ${({ theme }) => theme.spacing.xxlarge};

  ${media.lessThan('medium')`
    padding: 0 ${({ theme }) => theme.spacing.medium};

    margin-top: ${({ theme }) => theme.spacing.medium};
    margin-bottom: ${({ theme }) => theme.spacing.large};
  `}
`;

export const MapSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  margin-right: ${({ theme }) => theme.spacing.xxlarge};

  ${media.lessThan('medium')`
    margin-right: 0;
    margin-bottom: ${({ theme }) => theme.spacing.xxlarge};
  `}

  flex: 0.8;
`;

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.font.family.pilat};
  font-size: ${({ theme }) => theme.font.sizes.xxlarge};
  color: ${({ theme }) => theme.colors.primary};

  width: 100%;
  text-align: left;
`;

export const MapImage = styled.img`
  width: 100%;

  margin-top: ${({ theme }) => theme.spacing.medium};
`;

export const DataContainer = styled.div`
  /* max-width: 100%; */

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  gap: ${({ theme }) => theme.spacing.large};

  background-color: ${({ theme }) => theme.colors.darkerPrimary};

  position: relative;

  padding: 2rem 5rem;

  ${media.lessThan('medium')`
    padding: 2.5rem 4rem;
  `}

  img {
    position: absolute;
    top: -2rem;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 50%;
  }
`;

export const DataWrapper = styled.div`
  display: flex;
  flex-direction: column;

  text-align: center;
`;

export const DataNumber = styled.p`
  font-size: ${({ theme }) => theme.font.sizes.xxlarge};
  font-family: ${({ theme }) => theme.font.family.pilat};
  font-weight: ${({ theme }) => theme.font.heavy};

  ${media.lessThan('medium')`
    font-size: ${({ theme }) => theme.font.sizes.xlarge};
  `}

  color: ${({ theme }) => theme.colors.white};

  margin: 0;
  margin-bottom: 1rem;
`;

export const DataDescription = styled.p`
  font-size: ${({ theme }) => theme.font.sizes.medium};

  ${media.lessThan('medium')`
    font-size: ${({ theme }) => theme.font.sizes.small};
  `}

  color: ${({ theme }) => theme.colors.white};

  margin: 0;
`;
