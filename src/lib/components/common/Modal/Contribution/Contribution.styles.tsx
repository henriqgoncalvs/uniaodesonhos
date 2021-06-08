import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.main`
  width: 100%;

  ${({ theme }) => theme.utils.display.flex.spaceBetween};
  flex-direction: column;
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.font.sizes.large};
  font-weight: ${({ theme }) => theme.font.bold};
  font-family: ${({ theme }) => theme.font.family.pilat};
  text-align: center;

  margin-bottom: 5rem;
  margin-top: 0;
`;

export const TagWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xxsmall};

  width: min(60%, 40rem);

  ${media.lessThan('medium')`
    width: 100%;
  `}
`;

export const Tag = styled.a`
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.lighterSecondary};

  font-size: ${({ theme }) => theme.font.sizes.small};

  padding: 1rem 1.5rem;
  border-radius: 1.6rem;

  text-decoration: none;

  word-wrap: normal;
`;
