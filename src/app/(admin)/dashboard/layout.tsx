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
      <div className="w-full h-full grid grid-cols-12">
        <div className="col-span-2 h-screen relative">
          <Menu />
        </div>
        <div className="col-span-10 h-screen">
          <div className="flex flex-col">
            {/* <NavbarDashboard /> */}
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutPage;
