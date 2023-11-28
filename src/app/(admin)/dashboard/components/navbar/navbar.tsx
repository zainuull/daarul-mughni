'use client';
import { signOut, useSession } from 'next-auth/react';

const NavbarDashboard = () => {
  const { data, status } = useSession();
  const name = data?.user?.name;

  const handleLogOut = async () => {
    await signOut();
  };

  return (
    <div className="w-full h-20 shadow-md">
      <div className="w-full h-full flex justify-between items-center px-12">
        <h1>Welcome {name}</h1>
        {status === 'authenticated' && <button onClick={handleLogOut}>Log Out</button>}
      </div>
    </div>
  );
};

export default NavbarDashboard;
