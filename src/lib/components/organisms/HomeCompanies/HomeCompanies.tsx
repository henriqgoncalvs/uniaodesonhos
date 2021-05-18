import { AnchorButton } from 'lib/components/common/Button';

import * as S from './HomeCompanies.styles';

const HomeCompanies = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Content>
          <S.Title>Sonhando sonhos juntos</S.Title>

          <AnchorButton colorStyle="filled">VER DETALHES</AnchorButton>

          <S.CompaniesContainer>
            <img src="/img/companies/bis.svg" />
            <img src="/img/companies/coca.svg" />
            <img src="/img/companies/converse.svg" />
            <img src="/img/companies/puma.svg" />
            <img src="/img/companies/gnt.svg" />
            <img src="/img/companies/levis.svg" />
            <img src="/img/companies/transforma.svg" />
            <img src="/img/companies/Imagem 16.svg" />
            <img src="/img/companies/Imagem 17.svg" />
          </S.CompaniesContainer>
        </S.Content>
        <S.IllustrationWrapper>
          <S.Illustration
            src="/img/illustration-companies.svg"
            alt="Dois mascotes da União de Sonhos brincando"
          />
        </S.IllustrationWrapper>
      </S.Wrapper>

      <S.Background>
        <img src="/img/bg-companies.png" />
      </S.Background>
    </S.Container>
  );
};

export default HomeCompanies;
