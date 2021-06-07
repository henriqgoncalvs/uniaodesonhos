import { RefObject, useCallback, useState } from 'react';

import { Button } from 'lib/components/common/Button';
import Modal from 'lib/components/common/Modal';
import FormDream from 'lib/components/common/Modal/FormDream';
import toast from 'lib/components/common/Toast';
import { MapProps } from 'lib/types/api';

import * as S from './HomeMap.styles';

interface Props {
  refProp: RefObject<HTMLDivElement>;
  data: MapProps;
}

const HomeMap = ({ refProp, data }: Props) => {
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
        <S.Title>{data.title}</S.Title>

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
          src={data.mapImage.url}
          alt="Um mapa com várias conexões entre diferentes continentes"
        />
      </S.MapSection>

      <S.DataContainer>
        <S.DataContainer>
          <img src="/img/tape-map.svg" />
          {data.mapNumbers.map((mapNumber) => (
            <S.DataWrapper key={mapNumber.description}>
              <S.DataNumber>{mapNumber.number}</S.DataNumber>
              <S.DataDescription>{mapNumber.description}</S.DataDescription>
            </S.DataWrapper>
          ))}
        </S.DataContainer>
      </S.DataContainer>
    </S.Container>
  );
};

export default HomeMap;
