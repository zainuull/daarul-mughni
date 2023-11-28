'use client';
import { useSession } from 'next-auth/react';
import Menu from './components/menu/menu';
import NavbarDashboard from './components/navbar/navbar';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const LayoutPage = ({ children }: { children: React.ReactNode }) => {
  const {status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status == 'unauthenticated') {
      router.push('/api/auth/signin');
    }
  }, [status]);

  return (
    <div className="w-full min-h-screen">
      <div className="w-full h-full flex relative">
        <Menu />
        <div className="w-full flex flex-col">
          <NavbarDashboard />
          <div className="w-full h-full">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default LayoutPage;
