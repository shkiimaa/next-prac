import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './NavBar.module.css';

export default function NavBar() {
  const router = useRouter();
  console.log(router);

  return (
    <nav>
      <h1 className="active">네브바</h1>
      <Link className="active" href="/">
        Home
      </Link>
      <Link className={router.pathname === '/about' ? 'active' : ''} href="/about">
        about
      </Link>
      <style jsx>{`
        nav {
          background-color: tomato;
        }

        h1 {
          color: blue;
        }

        .active {
          color: yellow;
        }
      `}</style>
    </nav>
  );
}
