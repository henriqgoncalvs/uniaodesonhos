import Link from 'next/link';

import { Button } from 'lib/components/common/Button';

import * as S from './FullNavbar.styles';

function FullNavbar() {
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
          <Link href="parceiros" passHref>
            <S.NavLink>Parceiros</S.NavLink>
          </Link>
          <Button colorStyle="yellowFilled">SONHAR</Button>
        </S.NavLinks>
      </S.Content>

      <S.Background>
        <img src="/img/bg-nav.svg" />
      </S.Background>
    </S.Container>
  );
}

export default FullNavbar;
