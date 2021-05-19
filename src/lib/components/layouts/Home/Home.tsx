import { useRef } from 'react';

import Footer from 'lib/components/organisms/Footer';
import HomeAbout from 'lib/components/organisms/HomeAbout';
import HomeBanner from 'lib/components/organisms/HomeBanner';
import HomeCompanies from 'lib/components/organisms/HomeCompanies';
import HomeMap from 'lib/components/organisms/HomeMap';
import HomeSonhosSendoSonhados from 'lib/components/organisms/HomeSonhosSendoSonhados';
import Navbar from 'lib/components/organisms/Navbar';

interface Props {
  deviceType: string;
}

const Home = ({ deviceType }: Props) => {
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
      <HomeBanner refProp={homeRef} dreamsRef={dreamsRef} />
      <HomeAbout refProp={aboutRef} />
      <HomeSonhosSendoSonhados refProp={dreamsRef} deviceType={deviceType} />
      <HomeMap refProp={mapRef} />
      <HomeCompanies refProp={companiesRef} deviceType={deviceType} />
      <Footer />
    </>
  );
};

export default Home;
