import { RefObject, useCallback, useState } from 'react';

import { Button } from 'lib/components/common/Button';
import Modal from 'lib/components/common/Modal';
import FormDream from 'lib/components/common/Modal/FormDream';
import toast from 'lib/components/common/Toast';

import mapData from './mocked-data/map-data';
import * as S from './HomeMap.styles';

interface Props {
  refProp: RefObject<HTMLDivElement>;
}

const HomeMap = ({ refProp }: Props) => {
  const [modalOpen, setModalOpen] = useState(false);

  const notify = useCallback((type, message) => {
    toast({ type, message });
  }, []);

  const toggleModal = () => setModalOpen(!modalOpen);

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

  return (
    <S.Container ref={refProp}>
      <S.MapSection>
        <S.Title>O impacto de sonhar junto</S.Title>

        <Button colorStyle="yellowFilled" onClick={toggleModal}>
          SONHAR
        </Button>
        <Modal open={modalOpen} setOpen={setModalOpen}>
          <FormDream
            handleFormSuccess={handleFormSuccess}
            handleFormError={handleFormError}
          />
        </Modal>

        <S.MapImage
          src="/img/map.svg"
          alt="Um mapa com várias conexões entre diferentes continentes"
        />
      </S.MapSection>

      <S.DataContainer>
        <img src="/img/tape-map.svg" />
        <S.DataContainer>
          <S.DataWrapper>
            <S.DataNumber>{mapData.dreamsDreamed.number}</S.DataNumber>
            <S.DataDescription>
              {mapData.dreamsDreamed.description}
            </S.DataDescription>
          </S.DataWrapper>
          <S.DataWrapper>
            <S.DataNumber>{mapData.impactedPeople.number}</S.DataNumber>
            <S.DataDescription>
              {mapData.impactedPeople.description}
            </S.DataDescription>
          </S.DataWrapper>
          <S.DataWrapper>
            <S.DataNumber>{mapData.ongs.number}</S.DataNumber>
            <S.DataDescription>{mapData.ongs.description}</S.DataDescription>
          </S.DataWrapper>
        </S.DataContainer>
      </S.DataContainer>
    </S.Container>
  );
};

export default HomeMap;
