import Head from 'next/head';
interface ISeoProps {
  title: string;
}

export default function Seo({ title }: ISeoProps) {
  return (
    <Head>
      <title>{title} | NextMovies</title>
    </Head>
  );
}
