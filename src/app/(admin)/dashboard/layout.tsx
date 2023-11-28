'use client';
import { useSession } from 'next-auth/react';
import Menu from './components/menu/menu';
import NavbarDashboard from './components/navbar/navbar';
import { useRouter } from 'next/navigation';

const LayoutPage = ({ children }: { children: React.ReactNode }) => {
  const { status } = useSession();

  const router = useRouter();

  if (status == 'unauthenticated') {
    router.push('/login');
  }

  return (
    <>
      {status === 'authenticated' && (
        <div className="w-full min-h-screen">
          <div className="w-full h-full flex relative">
            <Menu />
            <div className="w-full flex flex-col">
              <NavbarDashboard />
              <div className="w-full h-full">{children}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LayoutPage;
