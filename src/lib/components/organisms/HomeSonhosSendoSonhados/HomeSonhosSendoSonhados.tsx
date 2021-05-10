import * as S from './HomeSonhosSendoSonhados.styles';

const HomeSonhosSendoSonhados = () => {
  return (
    <S.Container>
      <S.Title>Sonhos sendo sonhados</S.Title>

      <S.SonhoCard>
        <S.SonhoCardBanner bg="/img/map.svg">
          <p>A viagem de Luis</p>
          <S.SonhoCardButton>Sonhar</S.SonhoCardButton>
        </S.SonhoCardBanner>

        <S.SonhoCardContent>
          <S.TagWrapper>
            <S.Tag color="lighterSecondary">Financiamento</S.Tag>
            <S.Tag color="lighterSecondary">Tempo</S.Tag>
          </S.TagWrapper>
          <S.SonhoCardDescription>
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
            ipsum Lorem ipsum.
          </S.SonhoCardDescription>
          <S.TagWrapper>
            <S.Tag color="lighterPrimary">Financiamento</S.Tag>
            <S.Tag color="lighterPrimary">Tempo</S.Tag>
          </S.TagWrapper>
        </S.SonhoCardContent>
      </S.SonhoCard>
    </S.Container>
  );
};

export default HomeSonhosSendoSonhados;
