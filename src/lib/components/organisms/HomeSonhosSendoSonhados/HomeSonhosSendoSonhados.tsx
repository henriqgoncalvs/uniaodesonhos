import Carousel from 'react-multi-carousel';

import { AnchorButton } from 'lib/components/common/Button';

import dreams from './mocked-data/sonhos';
import * as S from './HomeSonhosSendoSonhados.styles';

import 'react-multi-carousel/lib/styles.css';

const responsive = {
  large: {
    breakpoint: { max: 1440, min: 1280 },
    items: dreams.length < 3 ? dreams.length : 3,
  },
  medium: {
    breakpoint: { max: 1280, min: 1024 },
    items: 2,
  },
  small: {
    breakpoint: { max: 1024, min: 0 },
    items: 1,
  },
};

const HomeSonhosSendoSonhados = () => {
  return (
    <S.Container>
      <S.Title>Sonhos sendo sonhados</S.Title>

      <Carousel
        centerMode
        arrows
        draggable
        ssr
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={3000}
        slidesToSlide={1}
        swipeable
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
