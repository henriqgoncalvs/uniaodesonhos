import styled from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Header = styled.div`
  margin-bottom: 2rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  h3 {
    display: block;
    font-weight: ${({ theme }) => theme.font.heavy};
    font-size: ${({ theme }) => theme.font.sizes.xxlarge};
    font-family: ${({ theme }) => theme.font.family.pilat};

    ${media.lessThan('large')`
      margin: 2rem auto;
    `}
  }

  img {
    width: min(100%, 15rem);

    margin: 0 2rem;

    ${media.lessThan('small')`
      margin: 3rem auto;
    `}
  }

  ${media.lessThan('large')`
    justify-content: center;
  `}

  ${media.lessThan('small')`
    flex-direction: column;
  `}
`;

export const PeopleDreaming = styled.div`
  display: flex;
  flex-direction: column;

  align-items: flex-start;

  p:first-child {
    font-weight: ${({ theme }) => theme.font.heavy};
    font-size: ${({ theme }) => theme.font.sizes.xxlarge};
    font-family: ${({ theme }) => theme.font.family.pilat};

    margin: 0;
  }

  p:last-child {
    font-size: ${({ theme }) => theme.font.sizes.xxsmall};
  }

  ${media.lessThan('medium')`
    align-items: center;
  `}
`;

export const Description = styled.div`
  width: 100%;

  margin-bottom: auto;

  ${media.lessThan('large')`
    text-align: center;
    margin-bottom: 4rem;
  `}

  a {
    max-width: 20rem;
    margin-top: 3rem;
  }
`;

export const DreamsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;

  width: 100%;

  margin-top: 2rem;

  ${media.lessThan('small')`
    grid-template-columns: 1fr;
    grid-gap: 1rem;
  `}
`;

export const DreamCardBanner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: url(${({ bg }: { bg: string }) => bg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  padding: 2rem 3rem;

  min-height: 12rem;

  position: relative;

  p {
    z-index: 10;
    text-align: center;
    font-size: ${({ theme }) => theme.font.sizes.small};
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
