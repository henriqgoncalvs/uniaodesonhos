import aboutIllustration from 'assets/img/illustration-about.svg';

import * as S from './HomeAbout.styles';

const HomeAbout = () => {
  return (
    <S.Container>
      <S.IllustrationWrapper>
        <S.Illustration
          src={aboutIllustration}
          alt="Mascote da União de Sonhos brincando com um balão"
        />
      </S.IllustrationWrapper>
      <S.Content>
        <S.Title>União de Sonhos</S.Title>
        <S.Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet
          maximus arcu. Nam maximus pharetra imperdiet. Nam varius tellus vitae
          nisl malesuada, a vehicula ipsum mollis. Nunc sapien leo, ultrices id
          blandit eu, condimentum ut quam. Nulla fermentum metus et arcu
          pharetra, sit amet efficitur eros commodo. In a cursus arcu. Mauris
          tortor dui, mattis rutrum pulvinar eu, laoreet fermentum erat. Sed
          nisi ex, condimentum nec aliquet eu, finibus ac arcu. Integer
          dignissim eros eu nisi commodo, vel egestas nulla convallis. Cras eget
          leo vel tortor suscipit consequat in at enim.
        </S.Description>
      </S.Content>
    </S.Container>
  );
};

export default HomeAbout;
