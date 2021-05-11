import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;

  border-bottom: 0.3rem solid ${({ theme }) => theme.colors.black};

  margin-bottom: 3rem;
`;

export const Wrapper = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.desktop};

  margin: 0 auto;

  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  gap: ${({ theme }) => theme.spacing.xxlarge};
`;

export const IllustrationWrapper = styled.div`
  flex: 0.5;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Illustration = styled.img`
  max-width: 100%;
`;

export const UniaoLogoWrapper = styled.div`
  flex: 1.15;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UniaoLogo = styled.img`
  max-width: 100%;
`;

export const FooterText = styled.p`
  flex: 0.7;

  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    font-family: ${theme.font.family.lato};
    font-weight: 400;
    color: ${theme.colors.black};

    margin-bottom: 0.2rem;
  `}

  text-align: right;
`;
