import { FooterProps } from 'lib/types/api';

import * as S from './Footer.styles';

type Props = {
  data: FooterProps;
};

const Footer = ({ data }: Props) => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.IllustrationWrapper>
          <S.Illustration
            src={data.image.url}
            alt="O mascote da União de Sonhos ao lado de uma flor amarela"
          />
        </S.IllustrationWrapper>

        <S.UniaoLogoWrapper>
          <S.UniaoLogo
            src={data.logo.image.url}
            alt={data.logo.alternativeText}
          />
        </S.UniaoLogoWrapper>

        <S.FooterText>{data.text}</S.FooterText>
      </S.Wrapper>
    </S.Container>
  );
};

export default Footer;
