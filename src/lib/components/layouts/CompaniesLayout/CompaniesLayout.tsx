import CompanyDetail from 'lib/components/organisms/CompanyDetail';

import * as S from './CompaniesLayout.styles';

function CompaniesLayout() {
  return (
    <S.Container>
      <S.Title>Parceiros que sonham</S.Title>

      <S.MainWrapper>
        <CompanyDetail />
        <CompanyDetail />
        <CompanyDetail />
        <CompanyDetail />
      </S.MainWrapper>
    </S.Container>
  );
}

export default CompaniesLayout;
