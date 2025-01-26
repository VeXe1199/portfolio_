import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Sahil Sonawane is an avid full stack web developer building websites and applications you'd love to use"
      />
      <meta
        name="keywords"
      />

      <meta
        property="og:description"
        content="A full-stack developer building websites that you'd like to use."
      />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Sahil Sonawane',
};
