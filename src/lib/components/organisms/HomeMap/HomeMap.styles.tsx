import styled from 'styled-components';

export const Container = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.large};

  margin: 0 auto;

  margin-top: ${({ theme }) => theme.spacing.xxxlarge};
  margin-bottom: ${({ theme }) => theme.spacing.xxxlarge};

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.xxlarge};

  padding: 0 ${({ theme }) => theme.spacing.xxlarge};
`;

export const MapSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

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
`;

export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  gap: ${({ theme }) => theme.spacing.large};

  background-color: ${({ theme }) => theme.colors.darkerPrimary};

  position: relative;

  padding: 2rem 5rem;

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

  color: ${({ theme }) => theme.colors.white};

  margin: 0;
  margin-bottom: 1rem;
`;

export const DataDescription = styled.p`
  font-size: ${({ theme }) => theme.font.sizes.medium};

  color: ${({ theme }) => theme.colors.white};

  margin: 0;
`;
