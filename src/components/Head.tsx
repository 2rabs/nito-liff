import { default as NextHead } from "next/head";

interface Props {
  pageName?: string;
}

const Head = (props: Props) => {
  const title = props.pageName ? `${ props.pageName } | NITO` : 'NITO';

  return (
    <NextHead>
      <title>{ title }</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <link rel="icon" href="/favicon.ico"/>
    </NextHead>
  );
};

export default Head;
