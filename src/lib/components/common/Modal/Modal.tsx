import {
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { createPortal } from 'react-dom';

import FormDream from './FormDream';
import * as S from './Modal.styles';

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
  title?: string;
}

const Modal = ({ open, setOpen, children, title }: Props) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleClose = () => {
    setOpen(!open);
  };

  const modalContent = (
    <S.ModalOverlay open={open}>
      <S.Modal>
        <S.CloseButton onClick={handleClose}>
          <div />
        </S.CloseButton>
        {title && <S.ModalHeader>{title}</S.ModalHeader>}
        <S.ModalBody>{children}</S.ModalBody>

        <S.TopLeftDetail src="/img/modal-corner-left-top.svg" />
        <S.BottomRightDetail src="/img/modal-corner-right-bottom.svg" />
      </S.Modal>
    </S.ModalOverlay>
  );

  if (isBrowser) {
    const modalEl = document?.querySelector('#modal-root');
    if (modalEl) {
      return createPortal(modalContent, modalEl);
    }

    return <></>;
  } else {
    return <></>;
  }
};

Modal.FormDream = FormDream;

export default Modal;
