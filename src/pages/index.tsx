import { GetStaticProps, NextPage } from 'next';

import client from 'core/graphql/client';
import GET_LANDING_PAGE from 'core/graphql/queries/getLandingPage';
import HomeLayout from 'lib/components/layouts/Home';

interface Props {
  deviceType: string;
}

const Home: NextPage<Props> = () => {
  return <HomeLayout />;
};

export const getStaticProps: GetStaticProps = async () => {
  const { landingPage } = await client.request(GET_LANDING_PAGE);

  return {
    props: {
      ...landingPage,
    },
  };
};

export default Home;
