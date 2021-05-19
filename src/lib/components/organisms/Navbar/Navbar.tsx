import { RefObject, useState } from 'react';
import { GrInstagram, GrLinkedinOption } from 'react-icons/gr';

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
  const [open, setOpen] = useState(true);

  const toggleMenu = () => setOpen(!open);

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
          <S.Link onClick={() => homeRef?.current?.scrollIntoView()}>
            Home
          </S.Link>
          <S.Link onClick={() => aboutRef?.current?.scrollIntoView()}>
            About
          </S.Link>
          <S.Link onClick={() => dreamsRef?.current?.scrollIntoView()}>
            Dreams
          </S.Link>
          <S.Link onClick={() => mapRef?.current?.scrollIntoView()}>Map</S.Link>
          <S.Link onClick={() => companiesRef?.current?.scrollIntoView()}>
            Companies
          </S.Link>
        </S.LinksWrapper>

        <S.NavFooter>
          <S.FooterCity>Recife, Brasil</S.FooterCity>
          <S.IconsWrapper>
            <a href="/">
              <GrLinkedinOption />
            </a>
            <a href="/">
              <GrInstagram />
            </a>
          </S.IconsWrapper>
        </S.NavFooter>
      </S.Container>
    </>
  );
};

export default Navbar;
