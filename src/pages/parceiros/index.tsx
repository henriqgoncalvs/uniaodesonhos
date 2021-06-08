import { GetStaticProps, NextPage } from 'next';

import client from 'core/graphql/client';
import { GET_COMPANIES } from 'core/graphql/queries/getCompanies';
import CompaniesLayout from 'lib/components/layouts/CompaniesLayout';
import FullNavbar from 'lib/components/organisms/FullNavbar';
import { CompaniesProps } from 'lib/types/api';

type Props = {
  companies: CompaniesProps[];
};

const Parceiros: NextPage<Props> = ({ companies }) => {
  return (
    <>
      <FullNavbar />
      <CompaniesLayout companies={companies} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { companies } = await client.request(GET_COMPANIES);

  return {
    props: {
      companies,
    },
  };
};

export default Parceiros;
