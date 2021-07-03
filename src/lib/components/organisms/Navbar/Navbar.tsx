import { RefObject, useState } from 'react';
import { GrInstagram, GrMail } from 'react-icons/gr';

import * as S from './Navbar.styles';

interface Props {
  homeRef: RefObject<HTMLDivElement>;
  aboutRef: RefObject<HTMLDivElement>;
  dreamsRef: RefObject<HTMLDivElement>;
  mapRef: RefObject<HTMLDivElement>;
  companiesRef: RefObject<HTMLDivElement>;
}

const Navbar = ({
  homeRef,
  aboutRef,
  dreamsRef,
  mapRef,
  companiesRef,
}: Props) => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  const scrollHome = () => {
    toggleMenu();
    homeRef?.current?.scrollIntoView();
  };

  const scrollAbout = () => {
    toggleMenu();
    aboutRef?.current?.scrollIntoView();
  };

  const scrollDreams = () => {
    toggleMenu();
    dreamsRef?.current?.scrollIntoView();
  };

  const scrollMap = () => {
    toggleMenu();
    mapRef?.current?.scrollIntoView();
  };

  const scrollCompanies = () => {
    toggleMenu();
    companiesRef?.current?.scrollIntoView();
  };

  return (
    <>
      <S.OpenButton open={open} onClick={toggleMenu}>
        <img src="/img/ham-menu.svg" alt="Abrir menu lateral" />
      </S.OpenButton>
      <S.Container open={open}>
        <S.CloseButton onClick={toggleMenu}>
          <div />
        </S.CloseButton>
        <S.LinksWrapper>
          <S.Link onClick={scrollHome}>Home</S.Link>
          <S.Link onClick={scrollAbout}>Sobre União de Sonhos</S.Link>
          <S.Link onClick={scrollDreams}>Sonhos sendo sonhados</S.Link>
          <S.Link onClick={scrollMap}>O impacto de sonhar</S.Link>
          <S.Link onClick={scrollCompanies}>Parceiros</S.Link>
        </S.LinksWrapper>

        <S.NavFooter>
          <S.FooterCity>Recife, Brasil</S.FooterCity>
          <S.IconsWrapper>
            <a href="mailto:contato@uniaodesonhos.com">
              <GrMail />
              Fale com a gente: contato@uniaodesonhos.com
            </a>
            <a href="https://instagram.com/uniaodesonhosorg">
              <GrInstagram />
              @uniaodesonhosorg
            </a>
          </S.IconsWrapper>
        </S.NavFooter>
      </S.Container>
    </>
  );
};

export default Navbar;
