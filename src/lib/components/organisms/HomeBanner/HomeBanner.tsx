import * as S from './HomeBanner.styles';

const HomeBanner = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Content>
          <S.UniaoDeSonhosLogo
            src="/img/uniaodesonhos-logo.svg"
            alt="Logo escrito União de Sonhos com uma nuvem ao lado esquerdo"
          />
          <S.Title>Colocando sonhos no mundo.</S.Title>
          <S.ButtonWrapper>
            <S.AnchorButton>Sonhar</S.AnchorButton>
            <S.Button>Quero apoiar um sonho</S.Button>
          </S.ButtonWrapper>
        </S.Content>
        <S.IllustrationWrapper>
          <S.Illustration
            src="/img/illustration-banner.svg"
            alt="Uma menina brincando com o mascote da União de Sonhos"
          />
        </S.IllustrationWrapper>
      </S.Wrapper>
    </S.Container>
  );
};

export default HomeBanner;
