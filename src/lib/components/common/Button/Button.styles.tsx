import styled, { css, DefaultTheme } from 'styled-components';

interface StyledButtonProps {
  colorStyle: 'filled' | 'line';
}
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    StyledButtonProps {}

export interface AnchorProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    StyledButtonProps {}

const typeModifiers = {
  filled: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.secondary};
    border: none;
    color: ${theme.colors.black};
  `,
  line: (theme: DefaultTheme) => css`
    border: 2px solid ${theme.colors.secondary};
    color: ${theme.colors.black};
  `,
};

const commonStyles = ({ theme }: { theme: DefaultTheme }) => `
  padding: 1.5rem 3rem;
  border-radius: 1rem;

  font-size: ${theme.font.sizes.xsmall};
  font-family: ${theme.font.family.ptsans};

  text-decoration: none;

  transition: all 0.2s ease-in-out;

  &:hover {
    filter: brightness(110%);
  }
`;

export const Button = styled.button<ButtonProps>`
  ${({ theme, colorStyle }) => css`
    ${colorStyle && typeModifiers[colorStyle](theme)};
  `}

  ${({ theme }) => commonStyles({ theme })}
`;

export const AnchorButton = styled.a<AnchorProps>`
  ${({ theme, colorStyle }) => css`
    ${colorStyle && typeModifiers[colorStyle](theme)};
  `}

  ${({ theme }) => commonStyles({ theme })}
`;
