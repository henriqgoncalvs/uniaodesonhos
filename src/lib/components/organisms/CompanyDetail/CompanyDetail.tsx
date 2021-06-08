import { AnchorButton } from 'lib/components/common/Button';

import * as S from './CompanyDetail.styles';

function CompanyDetail() {
  return (
    <S.Wrapper>
      <S.Header>
        <h3>Levis</h3>
        <img src="/img/tape-map.svg" />
        <S.PeopleDreaming>
          <p>876</p>
          <p>Sonhos sonhados juntos.</p>
        </S.PeopleDreaming>
      </S.Header>

      <S.Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet
        maximus arcu. Nam maximus pharetra imperdiet. Nam varius tellus vitae
        nisl malesuada, a vehicula ipsum mollis. Nunc sapien leo, ultrices id
        blandit eu, condimentum ut quam. Nulla fermentum metus et arcu pharetra,
        sit amet efficitur eros commodo. In a cursus arcu. Mauris tortor dui,
        mattis rutrum pulvinar eu, laoreet fermentum erat. Sed nisi ex,
        condimentum nec aliquet eu, finibus ac arcu. Integer dignissim eros eu
        nisi commodo, vel egestas nulla convallis. Cras eget leo vel tortor
        suscipit consequat in at enim.
      </S.Description>

      <S.DreamsWrapper>
        <S.DreamCardBanner bg="/img/tape-map.svg">
          <p>A viagem de Luis.</p>
          <AnchorButton
            colorStyle="blueFilled"
            border="squared"
            size="small"
            href={`/sonho/1`}
          >
            Sonhar
          </AnchorButton>
        </S.DreamCardBanner>
        <S.DreamCardBanner bg="/img/tape-map.svg">
          <p>A viagem de Luis.</p>
          <AnchorButton
            colorStyle="blueFilled"
            border="squared"
            size="small"
            href={`/sonho/1`}
          >
            Sonhar
          </AnchorButton>
        </S.DreamCardBanner>
        <S.DreamCardBanner bg="/img/tape-map.svg">
          <p>A viagem de Luis.</p>
          <AnchorButton
            colorStyle="blueFilled"
            border="squared"
            size="small"
            href={`/sonho/1`}
          >
            Sonhar
          </AnchorButton>
        </S.DreamCardBanner>
        <S.DreamCardBanner bg="/img/tape-map.svg">
          <p>A viagem de Luis.</p>
          <AnchorButton
            colorStyle="blueFilled"
            border="squared"
            size="small"
            href={`/sonho/1`}
          >
            Sonhar
          </AnchorButton>
        </S.DreamCardBanner>
        <S.DreamCardBanner bg="/img/tape-map.svg">
          <p>A viagem de Luis.</p>
          <AnchorButton
            colorStyle="blueFilled"
            border="squared"
            size="small"
            href={`/sonho/1`}
          >
            Sonhar
          </AnchorButton>
        </S.DreamCardBanner>
      </S.DreamsWrapper>
    </S.Wrapper>
  );
}

export default CompanyDetail;
