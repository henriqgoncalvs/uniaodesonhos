import { RefObject, useState } from 'react';

import { Button } from 'lib/components/common/Button';
import Modal from 'lib/components/common/Modal';
import FormDream from 'lib/components/common/Modal/FormDream';
import { BannerProps } from 'lib/types/api';

import * as S from './HomeBanner.styles';

interface Props {
  refProp: RefObject<HTMLDivElement>;
  dreamsRef: RefObject<HTMLDivElement>;
  data: BannerProps;
}

const HomeBanner = ({ refProp, dreamsRef, data }: Props) => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => setModalOpen(!modalOpen);

  return (
    <S.Container ref={refProp}>
      <S.Wrapper>
        <S.Content>
          <S.UniaoDeSonhosLogo
            src={data.logo.image.url}
            alt={data.logo.alternativeText}
          />
          <S.Title>{data.title}</S.Title>
          <S.ButtonWrapper>
            <Button colorStyle="yellowFilled" onClick={toggleModal}>
              {data.primaryButtonText}
            </Button>
            <Button
              colorStyle="yellowLine"
              onClick={() => dreamsRef?.current?.scrollIntoView()}
            >
              {data.secondaryButtonText}
            </Button>
            <Modal open={modalOpen} setOpen={setModalOpen}>
              <FormDream toggleModal={toggleModal} />
            </Modal>
          </S.ButtonWrapper>
        </S.Content>
        <S.IllustrationWrapper>
          <S.Illustration
            src={data.bannerImage.url}
            alt="Uma menina brincando com o mascote da União de Sonhos"
          />
        </S.IllustrationWrapper>
      </S.Wrapper>
    </S.Container>
  );
};

export default HomeBanner;
