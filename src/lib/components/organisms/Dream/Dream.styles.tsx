import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.main`
  max-width: ${({ theme }) => theme.breakpoints.large};

  display: flex;
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
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  ${media.lessThan('large')`
    flex-direction: column;
    align-items: center;
    padding-left: ${({ theme }) => theme.spacing.medium};
    padding-right: ${({ theme }) => theme.spacing.medium};
  `}
`;

export const PresentationWrapper = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin-right: 4rem;

  ${media.lessThan('large')`
    margin-right: 0;
  `}
`;

export const DreamImage = styled.img`
  width: 100%;
  height: auto;

  ${media.lessThan('large')`
    margin-bottom: 4rem;
  `}
`;

export const Content = styled.section`
  flex: 0.9;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  ${media.lessThan('large')`
    align-items: center;
  `}
`;

export const Description = styled.div`
  width: 100%;

  margin-bottom: 2rem;

  ${media.lessThan('large')`
    text-align: center;
    margin-bottom: 4rem;
  `}
`;

export const DreamData = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 2.5rem 4rem;

  align-items: center;

  margin-bottom: 4rem;

  ${media.lessThan('small')`
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-gap: 2rem;
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

export const TotalValue = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  p {
    font-weight: ${({ theme }) => theme.font.heavy};
    font-size: ${({ theme }) => theme.font.sizes.medium};
    font-family: ${({ theme }) => theme.font.family.pilat};

    margin: 0 0 4rem;
  }

  ${media.lessThan('medium')`
    align-items: center;
  `}
`;

export const TotalValueBounds = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  p {
    margin-top: 1rem;
    font-size: ${({ theme }) => theme.font.sizes.xxsmall};
  }
`;

export const DreamDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  p:first-child {
    font-weight: ${({ theme }) => theme.font.bold};
    font-size: ${({ theme }) => theme.font.sizes.medium};

    margin: auto;
  }

  p {
    font-size: ${({ theme }) => theme.font.sizes.xxsmall};
  }
`;

export const Companies = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  align-self: flex-start;
`;

export const CompaniesTitle = styled.div`
  font-size: ${({ theme }) => theme.font.sizes.medium};
  font-weight: ${({ theme }) => theme.font.bold};
  text-align: center;

  margin-bottom: 3rem;
  margin-top: 0;
`;

export const CompaniesTagWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: ${({ theme }) => theme.spacing.xxsmall};
`;

export const CompaniesTag = styled.div`
  background-color: ${({ theme }) => theme.colors.lighterSecondary};

  font-size: ${({ theme }) => theme.font.sizes.xxxsmall};

  padding: 1rem 1.5rem;
  border-radius: 1.6rem;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  button:first-child {
    margin-right: 2rem;
  }

  margin-bottom: 4rem;

  ${media.lessThan('large')`
    justify-content: center;
  `}

  ${media.lessThan('medium')`
    flex-direction: column;
    margin-bottom: 2rem;

    button {
      width: 100%;
      margin-bottom: 2rem;

      &:first-child {
        margin-right: 0rem;
      }
    }
  `}
`;

export const SocialWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  max-width: 100%;
`;

export const SocialTitle = styled.h2`
  font-size: ${({ theme }) => theme.font.bold};
  font-size: ${({ theme }) => theme.font.sizes.medium};

  margin-bottom: 2rem;
`;

export const SocialButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: min(100%, 50rem);

  button {
    flex: 0.3;
  }

  ${media.lessThan('medium')`
    flex-direction: column;

    button {
      width: 100%;
      margin-bottom: 2rem;
    }
  `}
`;
