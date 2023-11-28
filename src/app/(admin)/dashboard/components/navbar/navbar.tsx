'use client';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const NavbarDashboard = () => {
  const { data, status } = useSession();
  const name = data?.user?.name;
  const router = useRouter();

  const handleLogin = () => {
    router.push('/api/auth/signin');
  };

  const handleLogOut = async () => {
    await signOut();
  };


  return (
    <div className="w-full h-20 shadow-md">
      <div className="w-full h-full flex justify-between items-center px-12">
        <h1>Welcome {name}</h1>
        {status === 'unauthenticated' ? (
          <button onClick={handleLogin}>Login</button>
        ) : (
          <button onClick={handleLogOut}>Log Out</button>
        )}
      </div>
    </div>
  );
};

export default NavbarDashboard;
