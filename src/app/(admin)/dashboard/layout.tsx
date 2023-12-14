import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import Menu from './components/menu/menu';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard Daarul Mughni',
  description: 'Dashboard Daarul Mughni Al - Maaliki',
  authors: [{ name: 'kelompok 1' }, { url: 'https://daarul-mughni.vercel.app' }],
  icons: {
    icon: '/logoDM.jpeg',
  },
};

const LayoutPage = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/login');
  }

  return (
    <div className="w-full min-h-screen">
      <div className="w-full h-full grid grid-cols-12">
        <div className="col-span-2 h-screen relative">
          <Menu />
        </div>
        <div className="col-span-10 h-screen">
          <div className="flex flex-col">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutPage;
