import * as S from './Footer.styles';

const Footer = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.IllustrationWrapper>
          <S.Illustration
            src="/img/illustration-footer.svg"
            alt="O mascote da União de Sonhos ao lado de uma flor amarela"
          />
        </S.IllustrationWrapper>

        <S.UniaoLogoWrapper>
          <S.UniaoLogo
            src="/img/uniaodesonhos-logo-footer.svg"
            alt="Nuvem azul com o texto a direita escrito União de Sonhos"
          />
        </S.UniaoLogoWrapper>

        <S.FooterText>Colocando sonhos no mundo.</S.FooterText>
      </S.Wrapper>
    </S.Container>
  );
};

export default Footer;
