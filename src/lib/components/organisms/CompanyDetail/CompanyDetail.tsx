import { AnchorButton } from 'lib/components/common/Button';
import { CompaniesProps } from 'lib/types/api';

import * as S from './CompanyDetail.styles';

type Props = {
  company: CompaniesProps;
};

function CompanyDetail({ company }: Props) {
  return (
    <S.Wrapper>
      <S.Header>
        <h3>{company.title}</h3>
        <div>
          <img src={company.image.url} />
          <S.PeopleDreaming>
            <p>{company.dreams.length}</p>
            <p>Sonhos sonhados juntos.</p>
          </S.PeopleDreaming>
        </div>
      </S.Header>

      <S.Description>{company.description}</S.Description>

      <S.DreamsWrapper>
        {company.dreams.map((dream) => (
          <S.DreamCardBanner key={dream.id} bg={dream.thumbnail.url}>
            <p>{dream.title}</p>
            <AnchorButton
              colorStyle="blueFilled"
              border="squared"
              size="small"
              href={`/sonho/${dream.id}`}
            >
              Sonhar
            </AnchorButton>
          </S.DreamCardBanner>
        ))}
      </S.DreamsWrapper>
    </S.Wrapper>
  );
}

export default CompanyDetail;
