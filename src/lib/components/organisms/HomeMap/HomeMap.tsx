import { RefObject, useState } from 'react';

import { Button } from 'lib/components/common/Button';
import Modal from 'lib/components/common/Modal';
import FormDream from 'lib/components/common/Modal/FormDream';
import { MapProps } from 'lib/types/api';

import * as S from './HomeMap.styles';

interface Props {
  refProp: RefObject<HTMLDivElement>;
  data: MapProps;
}

const HomeMap = ({ refProp, data }: Props) => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => setModalOpen(!modalOpen);

  return (
    <S.Container ref={refProp}>
      <S.MapSection>
        <S.Title>{data.title}</S.Title>

        <Button colorStyle="yellowFilled" onClick={toggleModal}>
          SONHAR
        </Button>
        <Modal open={modalOpen} setOpen={setModalOpen}>
          <FormDream toggleModal={toggleModal} />
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
