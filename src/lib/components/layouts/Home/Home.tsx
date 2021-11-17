import { useRef } from 'react';

import FormDream from 'lib/components/common/Modal/FormDream';
import Footer from 'lib/components/organisms/Footer';
import HomeAbout from 'lib/components/organisms/HomeAbout';
import HomeBanner from 'lib/components/organisms/HomeBanner';
import HomeCompanies from 'lib/components/organisms/HomeCompanies';
import HomeMap from 'lib/components/organisms/HomeMap';
import HomeSonhosSendoSonhados from 'lib/components/organisms/HomeSonhosSendoSonhados';
import Navbar from 'lib/components/organisms/Navbar';
import { LandingPageProps } from 'lib/types/api';

import * as S from './Home.styles';

type HomeProps = {
  landingPage: LandingPageProps;
};

const Home = ({ landingPage }: HomeProps) => {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const dreamsRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const companiesRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Navbar
        homeRef={homeRef}
        aboutRef={aboutRef}
        dreamsRef={dreamsRef}
        mapRef={mapRef}
        companiesRef={companiesRef}
      />
      <HomeBanner
        refProp={homeRef}
        dreamsRef={dreamsRef}
        data={landingPage.banner}
      />
      <HomeAbout refProp={aboutRef} data={landingPage.about} />
      <HomeSonhosSendoSonhados
        refProp={dreamsRef}
        data={landingPage.dreamsBeingDreamed}
      />
      <HomeMap refProp={mapRef} data={landingPage.map} />
      <HomeCompanies
        refProp={companiesRef}
        data={landingPage.companiesDreamingTogether}
      />

      <S.FormDreamContainer>
        <S.FormDreamBody>
          <FormDream />
        </S.FormDreamBody>

        <S.TopLeftDetail src="/img/modal-corner-left-top.svg" />
        <S.BottomRightDetail src="/img/modal-corner-right-bottom.svg" />
      </S.FormDreamContainer>

      <Footer />
    </>
  );
};

export default Home;
