import { GetStaticProps, NextPage } from 'next';

import client from 'core/graphql/client';
import GET_LANDING_PAGE from 'core/graphql/queries/getLandingPage';
import HomeLayout from 'lib/components/layouts/Home';
import { LandingPageProps } from 'lib/types/api';

type Props = {
  landingPage: LandingPageProps;
};

const Home: NextPage<Props> = ({ landingPage }) => {
  return <HomeLayout landingPage={landingPage} />;
};

export const getStaticProps: GetStaticProps = async () => {
  const { landingPage } = await client.request(GET_LANDING_PAGE);

  return {
    props: {
      landingPage,
    },
    revalidate: 1,
  };
};

export default Home;
