'use client';
import Image from 'next/image';
import logo from '../../../../public/assets/logoDM.jpeg';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { NotifyService } from '@/core/services/notify/notifyService';

const LoginPage = () => {
  const router = useRouter();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const notifyService = new NotifyService();

  const handleLogin = async (e: any) => {
    e?.preventDefault();
    setIsLoading(true);
    try {
      const res = await signIn('credentials', {
        redirect: false,
        email: e.target.email.value,
        password: e.target.password.value,
        callbackUrl: '/dashboard',
      });

      if (!res.error) {
        setIsLoading(false);
        notifyService.successLogin();
        router.push('/dashboard');
      } else {
        console.log(res.error);
        setError('Email atau password salah');
         setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-screen relative ">
      <div className="w-full h-full flex flex-col justify-center items-center px-4 bg-gray-100">
        <div className="shadow-xl w-full h-4/5 rounded-lg flex flex-col gap-y-2 items-center p-10 lg:w-2/5 bg-white">
          <h1 className="text-xl font-medium">Selamat Datang</h1>
          <p className="text-xs text-center lg:text-sm">
            Ruang Admin Pondok Pesantren <br />
            Daarul Mughni Al - Maaliki
          </p>
          <Image src={logo} alt="logo" className="w-[80px] my-2 rounded-md" />
          <form onSubmit={(e) => handleLogin(e)} className="w-full flex flex-col gap-y-6">
            <div className="flex flex-col gap-y-2">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="mail"
                placeholder="Your email"
                className="w-full h-10 rounded-lg px-2 border-b outline-none hover:outline-amber-500 transition-all"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Your password"
                className="w-full h-10 rounded-lg px-2 border-b outline-none hover:outline-amber-500 transition-all"
              />
            </div>
            <button className="w-full h-10 rounded-lg bg-amber-500 text-white mt-4 hover:bg-amber-600 transition-all font-semibold">
              {isLoading ? 'Loading...' : 'Login'}
            </button>
            {error && <p className="text-red-500 font-medium">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
