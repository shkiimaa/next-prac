import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import Seo from '@/components/Seo';

export default function Detail({ params }: any) {
  const router = useRouter();
  const [title, id] = params;

  console.log(router);
  return (
    <div>
      <Seo title={title} />
      <h4>{title}</h4>
    </div>
  );
}

export async function getServerSideProps({ params: { params } }: any) {
  return {
    props: { params },
  };
}
