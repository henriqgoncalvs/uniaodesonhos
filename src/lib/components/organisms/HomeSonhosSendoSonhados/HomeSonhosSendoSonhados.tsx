import { RefObject } from 'react';
import Carousel from 'react-multi-carousel';

import { AnchorButton } from 'lib/components/common/Button';
import useDeviceType from 'lib/hooks/useDeviceType';
import { DreamsBeingDreamedProps } from 'lib/types/api';

import * as S from './HomeSonhosSendoSonhados.styles';

import 'react-multi-carousel/lib/styles.css';

interface Props {
  refProp: RefObject<HTMLDivElement>;
  data: DreamsBeingDreamedProps;
}

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    paritialVisibilityGutter: 60,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    paritialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 50,
  },
};

const HomeSonhosSendoSonhados = ({ refProp, data }: Props) => {
  const deviceType = useDeviceType();

  return (
    <S.Container ref={refProp}>
      <S.Title>{data.title}</S.Title>
      {data.dreams.length > 3 || deviceType === 'mobile' ? (
        <Carousel
          deviceType={deviceType}
          partialVisible
          arrows
          draggable
          ssr
          responsive={responsive}
          removeArrowOnDeviceType={['mobile']}
          infinite
          // autoPlay
          autoPlaySpeed={3000}
          swipeable
          itemClass="carousel-item"
          sliderClass="carousel-slider"
        >
          {data.dreams.map((dream) => (
            <S.SonhoCard key={dream.id}>
              <S.SonhoCardBanner bg={dream.thumbnail.url}></S.SonhoCardBanner>

              <S.SonhoCardContent>
                <S.TagWrapper>
                  {dream.dream_categories.map((category) => (
                    <S.Tag key={category.text} color="lighterSecondary">
                      {category.text}
                    </S.Tag>
                  ))}
                </S.TagWrapper>
                <p>{dream.title}</p>
                <AnchorButton
                  colorStyle="blueFilled"
                  border="squared"
                  size="small"
                  href={`/sonho/${dream.id}`}
                >
                  Apoiar
                </AnchorButton>
                <S.SonhoCardDescription>
                  {dream.shortDescription}
                </S.SonhoCardDescription>
                <S.TagWrapper>
                  {dream.companies.map((company) => (
                    <S.Tag key={company.title} color="lighterPrimary">
                      {company.title}
                    </S.Tag>
                  ))}
                </S.TagWrapper>
              </S.SonhoCardContent>
            </S.SonhoCard>
          ))}
        </Carousel>
      ) : (
        <S.SonhoGrid quantity={data.dreams.length}>
          {data.dreams.map((dream) => (
            <S.SonhoCard key={dream.id}>
              <S.SonhoCardBanner bg={dream.thumbnail.url}></S.SonhoCardBanner>

              <S.SonhoCardContent>
                <S.TagWrapper>
                  {dream.dream_categories.map((category) => (
                    <S.Tag key={category.text} color="lighterSecondary">
                      {category.text}
                    </S.Tag>
                  ))}
                </S.TagWrapper>
                <p>{dream.title}</p>
                <AnchorButton
                  colorStyle="blueFilled"
                  border="squared"
                  size="small"
                  href={`/sonho/${dream.id}`}
                >
                  Apoiar
                </AnchorButton>
                <S.SonhoCardDescription>
                  {dream.shortDescription}
                </S.SonhoCardDescription>
                <S.TagWrapper>
                  {dream.companies.map((company) => (
                    <S.Tag key={company.title} color="lighterPrimary">
                      {company.title}
                    </S.Tag>
                  ))}
                </S.TagWrapper>
              </S.SonhoCardContent>
            </S.SonhoCard>
          ))}
        </S.SonhoGrid>
      )}
    </S.Container>
  );
};

export default HomeSonhosSendoSonhados;
