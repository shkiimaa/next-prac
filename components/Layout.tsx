import { ReactNode } from 'react';
import NavBar from '@/components/NavBar';

interface ILayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: ILayoutProps) {
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
}
