import { RefObject, useCallback, useState } from 'react';

import { Button } from 'lib/components/common/Button';
import Modal from 'lib/components/common/Modal';
import FormDream from 'lib/components/common/Modal/FormDream';
import toast from 'lib/components/common/Toast';
import { BannerProps } from 'lib/types/api';

import * as S from './HomeBanner.styles';

interface Props {
  refProp: RefObject<HTMLDivElement>;
  dreamsRef: RefObject<HTMLDivElement>;
  data: BannerProps;
}

const HomeBanner = ({ refProp, dreamsRef, data }: Props) => {
  const [modalOpen, setModalOpen] = useState(false);

  const notify = useCallback((type, message) => {
    toast({ type, message });
  }, []);

  const handleFormSuccess = () => {
    toggleModal();
    notify(
      'success',
      'Parabéns, seu sonho foi enviado com sucesso! Aguarde que entraremos em contato.',
    );
  };

  const handleFormError = () => {
    toggleModal();
    notify(
      'error',
      'Ooops, ocorreu algum erro :( Tente novamento ou entre em contato.',
    );
  };

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
              <FormDream
                handleFormSuccess={handleFormSuccess}
                handleFormError={handleFormError}
              />
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
