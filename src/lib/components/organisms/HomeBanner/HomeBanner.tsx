import { AnchorButton, Button } from 'lib/components/common/Button';

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
            <Button colorStyle="yellowFilled">Sonhar</Button>
            <AnchorButton colorStyle="yellowLine" href="/fdaf">
              Quero apoiar um sonho
            </AnchorButton>
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
