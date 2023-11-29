import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import Menu from './components/menu/menu';
import NavbarDashboard from './components/navbar/navbar';

const LayoutPage = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/login');
  }

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
