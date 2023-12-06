'use client';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '../../../public/assets/logoDM.jpeg';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { IUser } from '@/model/user';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const pathanme = usePathname();
  const { data } = useSession();
  const user: IUser = data?.user;

  // Handle navigation
  const handleNav = () => {
    setNav(!nav);
  };
  // UseEffect
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else if (window.scrollY >= 5 && window.innerWidth <= 650) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div
      className={`w-full h-20 fixed z-[99999] ${
        shadow
          ? `shadow-lg backdrop-filter backdrop-blur-md transition-all duration-700`
          : 'shadow-none bg-transparent'
      }`}>
      <div className="w-full h-full flex justify-between items-center px-4 md:px-16 text-black">
        <div className="flex items-center gap-x-2 lg:gap-x-4">
          <Image src={Logo} alt="Logo" width={50} height={50} />
          <Link href="/" className="font-bold lg:text-xl">
            <div className="flex flex-col uppercase">
              <h1 className="border-b-2 border-black">Daarul Mughni</h1>
              <h1>Al-Maaliki</h1>
            </div>
          </Link>
        </div>

        <div className="hidden lg:flex items-center gap-x-6 text-sm">
          <Link
            href="/"
            className={`${
              pathanme === '/'
                ? 'bg-white text-gray-800 px-4 py-2 rounded-md font-semibold transition-all'
                : 'hover:text-gray-600 transition-all'
            }`}>
            Beranda
          </Link>
          <Link
            href="/about"
            className={`${
              pathanme === '/about'
                ? 'bg-white text-gray-800 px-4 py-2 rounded-md font-semibold transition-all'
                : 'hover:text-gray-600 transition-all'
            }`}>
            Tentang Kami
          </Link>
          <Link
            href="/event"
            className={`${
              pathanme === '/event'
                ? 'bg-white text-gray-800 px-4 py-2 rounded-md font-semibold transition-all'
                : 'hover:text-gray-600 transition-all'
            }`}>
            Acara
          </Link>
          <Link
            href="/contact"
            className={`${
              pathanme === '/contact'
                ? 'bg-white text-gray-800 px-4 py-2 rounded-md font-semibold transition-all'
                : 'hover:text-gray-600 transition-all'
            }`}>
            Kontak
          </Link>
          {user && (
            <Link
              href="/dashboard"
              className={`${
                pathanme === '/dashboard'
                  ? 'bg-white text-gray-800 px-4 py-2 rounded-md font-semibold transition-all'
                  : 'hover:text-gray-600 transition-all'
              }`}>
              Dashboard
            </Link>
          )}
        </div>
        <div onClick={handleNav} className="md:hidden cursor-pointer">
          <AiOutlineMenu size={25} />
        </div>
      </div>
      {/* Menu in Phone */}
      {nav ? (
        <div className="absolute top-0 right-0 h-screen bg-white shadow-xl w-1/2 z-30 transition-all duration-700">
          <div className="w-full h-full relative pt-20">
            <div className="flex flex-col items-center justify-center gap-y-12  p-1">
              <Link
                onClick={() => setNav(false)}
                href={'/'}
                className={`${
                  pathanme == '/'
                    ? 'bg-white w-full text-center rounded-md py-2 font-semibold transition-all duration-500'
                    : ''
                }`}>
                Beranda
              </Link>
              <Link
                onClick={() => setNav(false)}
                href={'/about'}
                className={`${
                  pathanme == '/about'
                    ? 'bg-white w-full text-center rounded-md py-2 font-semibold transition-all duration-500'
                    : ''
                }`}>
                Tentang Kami
              </Link>
              <Link
                onClick={() => setNav(false)}
                href={'/event'}
                className={`${
                  pathanme == '/event'
                    ? 'bg-white w-full text-center rounded-md py-2 font-semibold transition-all duration-500'
                    : ''
                }`}>
                Acara
              </Link>
              <Link
                onClick={() => setNav(false)}
                href={'/contact'}
                className={`${
                  pathanme == '/contact'
                    ? 'bg-white w-full text-center rounded-md py-2 font-semibold transition-all duration-500'
                    : ''
                }`}>
                Kontak
              </Link>
              {user && (
                <Link
                  href="/dashboard"
                  className={`${
                    pathanme === '/dashboard'
                      ? 'bg-white text-gray-800 px-4 py-2 rounded-md font-semibold transition-all'
                      : 'hover:text-gray-600 transition-all'
                  }`}>
                  Dashboard
                </Link>
              )}
            </div>
            <AiOutlineClose
              onClick={() => setNav(!nav)}
              size={25}
              className="absolute top-4 left-4 text-red-500 cursor-pointer"
            />
          </div>
        </div>
      ) : (
        <div className="absolute top-0 -right-[1000px] h-screen bg-gray-200 w-1/2 z-30 transition-all duration-700"></div>
      )}
    </div>
  );
};

export default Navbar;
