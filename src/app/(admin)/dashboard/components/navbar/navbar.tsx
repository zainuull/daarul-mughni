'use client';
import { signOut, useSession } from 'next-auth/react';
import useStatus from '../../store/store.status';
import { NotifyService } from '@/core/services/notify/notifyService';

const NavbarDashboard = () => {
  const { data, status } = useSession();
  const name = data?.user?.name;
  const [menu] = useStatus();
  const notifyService = new NotifyService();

  const handleLogOut = async () => {
    notifyService.confirmationLogout().then((res) => {
      if (res) {
        signOut();
      }
    });
  };

  return (
    <div className="w-full flex justify-end h-20 shadow-md">
      <div
        className={`${
          menu ? 'w-[1100px]' : 'w-3/4'
        } h-full flex justify-between items-center px-12 transition-all duration-700`}>
        {name && <h1>Welcome {name}</h1>}
        {status === 'authenticated' && <button onClick={handleLogOut}>Log Out</button>}
      </div>
    </div>
  );
};

export default NavbarDashboard;
