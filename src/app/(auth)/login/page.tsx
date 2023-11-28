'use client';
import Image from 'next/image';
import logo from '../../../../public/assets/logoDM.jpeg';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { push } from 'firebase/database';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const router = useRouter();
  const handleLogin = async (e: any) => {
    e?.preventDefault();
    try {
      const res = await signIn('credentials', {
        redirect: false,
        email: e.target.email.value,
        password: e.target.password.value,
        callbackUrl: '/dashboard',
      });
      if (!res.error) {
        router.push('/dashboard');
      } else {
        console.log(res.error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-screen relative ">
      <div className="w-full h-full flex flex-col justify-center items-center px-4">
        <div className="shadow-xl w-full h-4/5 rounded-lg flex flex-col gap-y-2 items-center p-10 lg:w-2/5">
          <h1 className="text-xl font-medium">Selamat Datang</h1>
          <p className="text-xs text-center lg:text-sm">
            Ruang Admin Pondok Pesantreen Daarul Mughni Al - Maaliki
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
              Login
            </button>
            <p className="text-xs mt-2">
              Dont have any account ?
              <Link href={'/register'} className="font-semibold">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
