import bannerIllustration from 'assets/img/illustration-banner.svg';
import uniaoDeSonhosLogo from 'assets/img/uniaodesonhos-logo.svg';

import * as S from './HomeBanner.styles';

const HomeBanner = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Content>
          <S.UniaoDeSonhosLogo
            src={uniaoDeSonhosLogo}
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
            src={bannerIllustration}
            alt="Uma menina brincando com o mascote da União de Sonhos"
          />
        </S.IllustrationWrapper>
      </S.Wrapper>
    </S.Container>
  );
};

export default HomeBanner;
