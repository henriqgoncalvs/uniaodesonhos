import { useCallback, useState } from 'react';
import Link from 'next/link';

import { Button } from 'lib/components/common/Button';
import Modal from 'lib/components/common/Modal';
import FormDream from 'lib/components/common/Modal/FormDream';
import toast from 'lib/components/common/Toast';

import * as S from './FullNavbar.styles';

function FullNavbar() {
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
    <S.Container>
      <S.Content>
        <Link href="/" passHref>
          <a>
            <S.Logo
              src="/img/uniaodesonhos-logo-min.svg"
              alt="Nuvem da União de Sonhos"
            />
          </a>
        </Link>

        <S.NavLinks>
          <Link href="/" passHref>
            <S.NavLink>Home</S.NavLink>
          </Link>
          <Link href="/parceiros" passHref>
            <S.NavLink>Parceiros</S.NavLink>
          </Link>
          <Button colorStyle="yellowFilled" onClick={toggleModal}>
            SONHAR
          </Button>
        </S.NavLinks>
      </S.Content>

      <Modal open={modalOpen} setOpen={setModalOpen}>
        <FormDream
          handleFormSuccess={handleFormSuccess}
          handleFormError={handleFormError}
        />
      </Modal>

      <S.Background>
        <img src="/img/bg-nav.svg" />
      </S.Background>
    </S.Container>
  );
}

export default FullNavbar;
