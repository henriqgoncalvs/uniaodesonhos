import { NextPage, NextPageContext } from 'next';
import UAParser from 'ua-parser-js';

import HomeLayout from 'lib/components/layouts/Home';

interface Props {
  deviceType: string;
}

const Home: NextPage<Props> = ({ deviceType }) => {
  return <HomeLayout deviceType={deviceType} />;
};

Home.getInitialProps = async (context: NextPageContext) => {
  let userAgent;

  if (context.req) {
    userAgent = context.req.headers['user-agent'];
  } else {
    userAgent = navigator.userAgent || '';
  }

  if (userAgent) {
    const parser = new UAParser();
    parser.setUA(userAgent);
    const result = parser.getResult();
    const deviceType = (result.device && result.device.type) || 'desktop';
    return { deviceType };
  }

  return { deviceType: '' };
};

export default Home;
