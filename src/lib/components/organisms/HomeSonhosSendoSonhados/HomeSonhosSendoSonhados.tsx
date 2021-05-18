import Carousel from 'react-multi-carousel';

import dreams from './mocked-data/sonhos';
import * as S from './HomeSonhosSendoSonhados.styles';

import 'react-multi-carousel/lib/styles.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1280 },
    items: dreams.length < 4 ? dreams.length : 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1280, min: 768 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
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
              <S.SonhoCardButton href={dream.url}>Sonhar</S.SonhoCardButton>
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
