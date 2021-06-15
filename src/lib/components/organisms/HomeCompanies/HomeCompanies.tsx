import { RefObject } from 'react';

import { AnchorButton } from 'lib/components/common/Button';
import useDeviceType from 'lib/hooks/useDeviceType';
import { CompaniesDreamingTogetherProps } from 'lib/types/api';

import * as S from './HomeCompanies.styles';

interface Props {
  refProp: RefObject<HTMLDivElement>;
  data: CompaniesDreamingTogetherProps;
}

const HomeCompanies = ({ refProp, data }: Props) => {
  const deviceType = useDeviceType();

  return (
    <S.Container ref={refProp}>
      <S.Wrapper>
        <S.Content>
          <S.Title>{data.title}</S.Title>

          <AnchorButton colorStyle="yellowFilled" href="/parceiros">
            VER DETALHES
          </AnchorButton>

          {data.companyCategory?.map((category) => (
            <div key={category.title}>
              <h3>{category.title}</h3>

              <S.CompaniesContainer>
                {category.companies.map((company) => (
                  <img
                    src={company.image?.url}
                    key={company.title}
                    alt={company.title}
                  />
                ))}
              </S.CompaniesContainer>
            </div>
          ))}
        </S.Content>
        <S.IllustrationWrapper>
          <S.Illustration
            src={data.image.url}
            alt="Dois mascotes da União de Sonhos brincando"
          />
        </S.IllustrationWrapper>
      </S.Wrapper>

      {deviceType === 'desktop' && (
        <S.Background>
          <img src="/img/bg-companies.png" />
        </S.Background>
      )}
    </S.Container>
  );
};

export default HomeCompanies;
