import Footer from 'lib/components/organisms/Footer';
import HomeAbout from 'lib/components/organisms/HomeAbout';
import HomeBanner from 'lib/components/organisms/HomeBanner';
import HomeCompanies from 'lib/components/organisms/HomeCompanies';
import HomeMap from 'lib/components/organisms/HomeMap';
import HomeSonhosSendoSonhados from 'lib/components/organisms/HomeSonhosSendoSonhados';

interface Props {
  deviceType: string;
}

const Home = ({ deviceType }: Props) => {
  return (
    <>
      <HomeBanner />
      <HomeAbout />
      <HomeSonhosSendoSonhados deviceType={deviceType} />
      <HomeMap />
      <HomeCompanies />
      <Footer />
    </>
  );
};

export default Home;
