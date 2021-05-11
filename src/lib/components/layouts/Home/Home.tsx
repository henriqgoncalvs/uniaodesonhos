import HomeAbout from 'lib/components/organisms/HomeAbout';
import HomeBanner from 'lib/components/organisms/HomeBanner';
import HomeCompanies from 'lib/components/organisms/HomeCompanies';
import HomeMap from 'lib/components/organisms/HomeMap';
import HomeSonhosSendoSonhados from 'lib/components/organisms/HomeSonhosSendoSonhados';

const Home = () => {
  return (
    <>
      <HomeBanner />
      <HomeAbout />
      <HomeSonhosSendoSonhados />
      <HomeMap />
      <HomeCompanies />
    </>
  );
};

export default Home;
