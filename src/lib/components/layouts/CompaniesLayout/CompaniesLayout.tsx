import CompanyDetail from 'lib/components/organisms/CompanyDetail';
import { CompaniesProps } from 'lib/types/api';

import * as S from './CompaniesLayout.styles';

type Props = {
  companies: CompaniesProps[];
};

function CompaniesLayout({ companies }: Props) {
  return (
    <S.Container>
      <S.Title>Parceiros que sonham</S.Title>

      <S.MainWrapper>
        {companies?.map((company) => (
          <CompanyDetail key={company.id} company={company} />
        ))}
      </S.MainWrapper>
    </S.Container>
  );
}

export default CompaniesLayout;
