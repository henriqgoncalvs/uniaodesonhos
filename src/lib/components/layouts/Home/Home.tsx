import HomeAbout from 'lib/components/organisms/HomeAbout';
import HomeBanner from 'lib/components/organisms/HomeBanner';
import HomeSonhosSendoSonhados from 'lib/components/organisms/HomeSonhosSendoSonhados';

const Home = () => {
  return (
    <>
      <HomeBanner />
      <HomeAbout />
      <HomeSonhosSendoSonhados />
    </>
  );
};

export default Home;
