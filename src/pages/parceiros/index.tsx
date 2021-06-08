import { GetStaticProps } from 'next';

import CompaniesLayout from 'lib/components/layouts/CompaniesLayout';
import FullNavbar from 'lib/components/organisms/FullNavbar';

const Parceiros = () => {
  return (
    <>
      <FullNavbar />
      <CompaniesLayout />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  // const { landingPage } = await client.request(GET_LANDING_PAGE);

  return {
    props: {
      // landingPage,
    },
  };
};

export default Parceiros;
