import { RefObject } from 'react';

import { AboutProps } from 'lib/types/api';

import * as S from './HomeAbout.styles';

interface Props {
  refProp: RefObject<HTMLDivElement>;
  data: AboutProps;
}

const HomeAbout = ({ refProp, data }: Props) => {
  return (
    <S.Container ref={refProp}>
      <S.UniaoWrapper>
        <S.IllustrationWrapper>
          <S.Illustration
            src={data.companyAbout.image.url}
            alt="Mascote da União de Sonhos brincando com um balão"
          />
        </S.IllustrationWrapper>
        <S.Content>
          <S.Title>{data.companyAbout.title}</S.Title>
          <S.Description>{data.companyAbout.description}</S.Description>
        </S.Content>
      </S.UniaoWrapper>

      <S.WordsLine>
        {data.pillar_abouts.map((pillar, index) => (
          <S.Word
            key={pillar.text}
            color={!(index % 2) ? 'secondary' : 'primary'}
          >
            {pillar.text}
          </S.Word>
        ))}
      </S.WordsLine>

      {data.company_abouts.map((company, index) => (
        <S.CompanyWrapper
          direction={index % 2 ? 'row-reverse' : undefined}
          key={company.title}
        >
          <S.Content>
            <S.CompanyTitle>{company.title}</S.CompanyTitle>
            <S.Description>{company.description}</S.Description>
          </S.Content>

          <S.CompanyImageWrapper>
            <S.CompanyLogo src={company.logo[0].url} alt={company.title} />
            <S.CompanyBackground src="/img/illustration-org-bg-about.svg" />
          </S.CompanyImageWrapper>
        </S.CompanyWrapper>
      ))}
    </S.Container>
  );
};

export default HomeAbout;
