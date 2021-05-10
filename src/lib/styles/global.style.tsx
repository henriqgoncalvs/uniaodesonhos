import {
  createGlobalStyle,
  css,
  DefaultTheme,
  GlobalStyleComponent,
} from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle: GlobalStyleComponent<
  unknown,
  DefaultTheme
> = createGlobalStyle`
  ${normalize}

  // PT Sans
  @font-face {
  font-family: 'PT Sans';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('/fonts/PT-Sans-Regular.woff2') format('woff2'), /* Modern Browsers */
}
  @font-face {
    font-family: 'PT Sans';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url('/fonts/PT-Sans-700.woff2') format('woff2'), /* Modern Browsers */
  }

  // Lato
  @font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('/fonts/Lato-Regular.woff2') format('woff2'), /* Modern Browsers */
  }

  // Pilat
  @font-face {
    font-family: 'Pilat';
    font-style: normal;
    font-weight: 900;
    font-display: swap;
    src: url('/fonts/PilatWide-Black.woff2') format('woff2'), /* Modern Browsers */
  }

  @font-face {
    font-family: 'Pilat';
    font-style: normal;
    font-weight: 800;
    font-display: swap;
    src: url('/fonts/PilatWide-Heavy.woff2') format('woff2'), /* Modern Browsers */
  }

  @font-face {
    font-family: 'Pilat';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url('/fonts/PilatWide-Bold.woff2') format('woff2'), /* Modern Browsers */
  }

	* {
		-webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
	}

  ${({ theme }) => css`
    html {
      font-family: ${theme.font.family.lato};
      font-size: 62.5%;
      scroll-behavior: smooth;
    }
    body {
      background-color: ${theme.colors.bodyBackground};
      color: ${theme.colors.black};
      font-size: ${theme.font.sizes.small};
    }

    img {
      pointer-events: none;
    }

    a,
    button {
      cursor: pointer;
    }
  `}
`;

export default GlobalStyle;
