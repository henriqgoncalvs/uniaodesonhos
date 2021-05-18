import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding-top: 3rem;
  padding-bottom: 13rem;

  position: relative;
`;

export const Background = styled.div`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
`;

export const Wrapper = styled.div`
  height: 100%;
  max-width: ${({ theme }) => theme.breakpoints.notebook};

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: ${({ theme }) => theme.spacing.xxlarge};

  padding: 5rem ${({ theme }) => theme.spacing.xxlarge} 0;

  position: relative;
  z-index: 2;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xsmall};
`;

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.font.family.pilat};
  font-size: ${({ theme }) => theme.font.sizes.xxlarge};
  color: ${({ theme }) => theme.colors.white};

  width: 100%;
  text-align: left;

  margin-bottom: ${({ theme }) => theme.spacing.xxsmall};
`;

export const Button = styled.a`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.black};

  padding: 1.5rem 4rem;
  border-radius: 0.5rem;

  font-size: ${({ theme }) => theme.font.sizes.xxsmall};
  font-family: ${({ theme }) => theme.font.family.ptsans};

  text-transform: uppercase;

  text-decoration: none;
`;

export const CompaniesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  gap: ${({ theme }) => theme.spacing.large};

  img {
    width: 100%;
    max-width: 15rem;
    min-width: 8rem;
  }
`;

export const IllustrationWrapper = styled.div`
  flex: 0.4;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Illustration = styled.img`
  width: 80%;
  padding-top: 12rem;
`;
