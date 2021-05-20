import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  width: 100%;

  ${({ theme }) => theme.utils.display.flex.spaceBetween};
`;

export const FormContainer = styled.div`
  flex: 1;

  ${({ theme }) => theme.utils.display.flex.center}

  > form {
    ${({ theme }) => theme.utils.display.flex.center}
    justify-content: space-around;
    align-items: flex-start;
    flex: 1;

    ${media.lessThan('small')`
      flex-direction: column;
      align-items: center;
    `}

    input,
    textarea {
      ${({ theme }) => css`
        background-color: ${theme.colors.input};
        color: ${theme.colors.black};
        font-size: ${theme.font.sizes.small};

        margin-bottom: ${theme.font.sizes.xxsmall};

        border-radius: 0.2rem;

        &::placeholder {
          color: ${theme.colors.white};
        }
      `}
      border: none;
      padding: 1rem 0.8rem;
    }

    input {
      width: 80%;
    }

    textarea {
      width: 100%;
      resize: none;
    }

    input[type='range'] {
      -webkit-appearance: none;
      appearance: none;
      padding: 0;
      border-radius: 10rem;

      &::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 2rem;
        height: 2rem;
        background-color: ${({ theme }) => theme.colors.white};
        cursor: pointer;

        border-radius: 100%;
      }

      &::-moz-range-thumb {
        width: 100%;
        height: 2rem;
        background-color: ${({ theme }) => theme.colors.input};
        cursor: pointer;
      }
    }

    label {
      ${({ theme }) => css`
        color: ${theme.colors.white};
        font-size: ${theme.font.sizes.small};

        margin-top: ${theme.font.sizes.xxxsmall};
        margin-bottom: ${theme.font.sizes.xxsmall};
      `}
    }

    button {
      margin-top: 2rem;
    }

    div {
      height: 100%;
      ${({ theme }) => theme.utils.display.flex.spaceBetween}
      flex-direction: column;

      &:first-child {
        flex: 1;
      }

      &:last-child {
        flex: 1;

        ${media.lessThan('medium')`
          flex: 0.8;
          padding-right: 2.5rem;
        `}

        ${media.lessThan('small')`
          margin-top: 1rem;
          padding-right: 0;
        `}
      }
    }
  }
`;

export const IllustrationWrapper = styled.div`
  flex: 0.6;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  ${media.lessThan('medium')`
    display: none;
  `}
`;

export const Illustration = styled.img`
  width: 80%;
`;
