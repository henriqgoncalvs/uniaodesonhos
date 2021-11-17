import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';

import client from 'core/graphql/client';
import { GET_DREAM } from 'core/graphql/queries/getDream';
import { GET_DREAMS } from 'core/graphql/queries/getDreams';
import Dream from 'lib/components/organisms/Dream';
import Footer from 'lib/components/organisms/Footer';
import FullNavbar from 'lib/components/organisms/FullNavbar';
import { DreamProps } from 'lib/types/api';
import markdownToHTML from 'lib/utils/markdownToHTML';

function Sonho({ dream }: { dream: DreamProps }) {
  return (
    <>
      <FullNavbar />
      <Dream dream={dream} />
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps<{ dream: DreamProps }> = async (
  ctx: GetStaticPropsContext,
) => {
  const id = ctx.params?.id;
  const { dream } = await client.request(GET_DREAM, {
    id: id,
  });

  const formatedDream = {
    ...dream,
    fullDescription: await markdownToHTML(dream.fullDescription),
  };

  return {
    props: {
      dream: formatedDream,
    },
    revalidate: 1,
  };
};

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  const { dreams } = await client.request(GET_DREAMS);

  const paths = dreams.map((dream: { id: string }) => ({
    params: {
      id: dream.id.toString(),
    },
  }));

  return {
    fallback: 'blocking',
    paths,
  };
};

export default Sonho;
