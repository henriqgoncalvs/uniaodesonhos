import { RefObject, useState } from 'react';

import { Button } from 'lib/components/common/Button';
import Modal from 'lib/components/common/Modal';

import * as S from './HomeBanner.styles';

interface Props {
  refProp: RefObject<HTMLDivElement>;
  dreamsRef: RefObject<HTMLDivElement>;
}

const HomeBanner = ({ refProp, dreamsRef }: Props) => {
  const [modalOpen, setModalOpen] = useState(true);

  const toggleModal = () => setModalOpen(!modalOpen);

  return (
    <S.Container ref={refProp}>
      <S.Wrapper>
        <S.Content>
          <S.UniaoDeSonhosLogo
            src="/img/uniaodesonhos-logo.svg"
            alt="Logo escrito União de Sonhos com uma nuvem ao lado esquerdo"
          />
          <S.Title>Colocando sonhos no mundo.</S.Title>
          <S.ButtonWrapper>
            <Button colorStyle="yellowFilled" onClick={toggleModal}>
              Sonhar
            </Button>
            <Button
              colorStyle="yellowLine"
              onClick={() => dreamsRef?.current?.scrollIntoView()}
            >
              Quero apoiar um sonho
            </Button>
            <Modal open={modalOpen} setOpen={setModalOpen}>
              <p>Ola modal</p>
            </Modal>
          </S.ButtonWrapper>
        </S.Content>
        <S.IllustrationWrapper>
          <S.Illustration
            src="/img/illustration-banner.svg"
            alt="Uma menina brincando com o mascote da União de Sonhos"
          />
        </S.IllustrationWrapper>
      </S.Wrapper>
    </S.Container>
  );
};

export default HomeBanner;
