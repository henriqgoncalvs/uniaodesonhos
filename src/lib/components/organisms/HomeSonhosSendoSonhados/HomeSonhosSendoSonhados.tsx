import Carousel from 'react-multi-carousel';

import { AnchorButton } from 'lib/components/common/Button';

import dreams from './mocked-data/sonhos';
import * as S from './HomeSonhosSendoSonhados.styles';

import 'react-multi-carousel/lib/styles.css';

interface Props {
  deviceType: string;
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

const HomeSonhosSendoSonhados = ({ deviceType }: Props) => {
  return (
    <S.Container>
      <S.Title>Sonhos sendo sonhados</S.Title>
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
      >
        {dreams.map((dream) => (
          <S.SonhoCard key={dream.id}>
            <S.SonhoCardBanner bg={dream.photo}>
              <p>{dream.title}</p>
              <AnchorButton
                colorStyle="blueFilled"
                border="squared"
                size="small"
                href={dream.url}
              >
                Sonhar
              </AnchorButton>
            </S.SonhoCardBanner>

            <S.SonhoCardContent>
              <S.TagWrapper>
                {dream.tags.map((tag) => (
                  <S.Tag key={tag} color="lighterSecondary">
                    {tag}
                  </S.Tag>
                ))}
              </S.TagWrapper>
              <S.SonhoCardDescription>
                {dream.description}
              </S.SonhoCardDescription>
              <S.TagWrapper>
                {dream.partners.map((partner) => (
                  <S.Tag key={partner} color="lighterPrimary">
                    {partner}
                  </S.Tag>
                ))}
              </S.TagWrapper>
            </S.SonhoCardContent>
          </S.SonhoCard>
        ))}
      </Carousel>
    </S.Container>
  );
};

export default HomeSonhosSendoSonhados;
