'use client';
import { RxDashboard } from 'react-icons/rx';
import { HiOutlineKey } from 'react-icons/hi';
import { BiChevronRight, BiCubeAlt, BiCalendarEvent } from 'react-icons/bi';
import { TbUserSquareRounded } from 'react-icons/tb';
import { BsCalendarCheck, BsQuestionCircle, BsGlobe2 } from 'react-icons/bs';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import useStatus from '../../store/store.status';
import { useSession } from 'next-auth/react';
import { IUser } from '@/model/user';
const Menu = () => {
  const pathname = usePathname();
  const [menu] = useStatus();
  const { data } = useSession();
  const user: IUser = data?.user;

  return (
    <div
      className={`${
        menu ? 'w-[150px] transition-all duration-700 absolute left-0 z-10 bg-white' : 'w-[330px] bg-white transition-all duration-700 absolute left-0 z-10'
      } min-h-[1000px] p-4 shadow-lg shadow-gray-300`}>
      <div className="w-full h-full flex flex-col gap-y-2 mt-4">
        <div className="w-full flex items-center justify-center gap-x-4">
          <RxDashboard size={30} />
          {menu ? null : <h1 className="text-2xl font-medium">Dashboard</h1>}
        </div>
        <div className="flex flex-col gap-y-10 mt-20 w-full px-6">
          <Link
            href={'/dashboard'}
            className={`${
              pathname == '/dashboard' ? 'bg-primary transition-all duration-300' : 'cursor-pointer'
            } w-full flex items-center justify-between p-3 rounded-lg`}>
            <div className="flex items-center gap-x-6">
              <HiOutlineKey size={30} />
              {menu ? null : <h1 className="">Beranda</h1>}
            </div>
            <BiChevronRight size={20} />
          </Link>
          {user?.role === 'administrator' && (
            <>
              <Link
                href={{ pathname: '/dashboard/teacher' }}
                className={`${
                  pathname.match(/^\/dashboard\/teacher/)
                    ? 'bg-primary transition-all duration-300'
                    : 'cursor-pointer'
                } w-full flex items-center justify-between p-3 rounded-lg`}>
                <div className="flex items-center gap-x-6">
                  <BiCubeAlt size={30} />
                  {menu ? null : <h1 className="">Data Guru</h1>}
                </div>
                <BiChevronRight size={20} />
              </Link>
              <Link
                href={{ pathname: '/dashboard/student' }}
                className={`${
                  pathname.match(/^\/dashboard\/student/)
                    ? 'bg-primary transition-all duration-300'
                    : 'cursor-pointer'
                } w-full flex items-center justify-between p-3 rounded-lg`}>
                <div className="flex items-center gap-x-6">
                  <TbUserSquareRounded size={30} />
                  {menu ? null : <h1 className="">Data Siswa</h1>}
                </div>
                <BiChevronRight size={20} />
              </Link>
              <Link
                href={{ pathname: '/dashboard/activity' }}
                className={`${
                  pathname.match(/^\/dashboard\/activity/)
                    ? 'bg-primary transition-all duration-300'
                    : 'cursor-pointer'
                } w-full flex items-center justify-between p-3 rounded-lg`}>
                <div className="flex items-center gap-x-6">
                  <BiCalendarEvent size={30} />
                  {menu ? null : <h1 className="">Laporan Kegiatan</h1>}
                </div>
                <BiChevronRight size={20} />
              </Link>
            </>
          )}
          <Link
            href={{ pathname: '/dashboard/absensi' }}
            className={`${
              pathname.match(/^\/dashboard\/absensi/)
                ? 'bg-primary transition-all duration-300'
                : 'cursor-pointer'
            } w-full flex items-center justify-between p-3 rounded-lg`}>
            <div className="flex items-center gap-x-6">
              <BsCalendarCheck size={30} />
              {menu ? null : <h1 className="">Absensi</h1>}
            </div>
            <BiChevronRight size={20} />
          </Link>
          <Link
            href={'/dashboard/help'}
            className={`${
              pathname == '/dashboard/help'
                ? 'bg-primary transition-all duration-300'
                : 'cursor-pointer'
            } w-full flex items-center justify-between p-3 rounded-lg`}>
            <div className="flex items-center gap-x-6">
              <BsQuestionCircle size={30} />
              {menu ? null : <h1 className="">Help</h1>}
            </div>
            <BiChevronRight size={20} />
          </Link>
          <Link
            href={'/'}
            className={`${
              pathname == '/' ? 'bg-primary transition-all duration-300' : 'cursor-pointer'
            } w-full flex items-center justify-between p-3 rounded-lg`}>
            <div className="flex items-center gap-x-6">
              <BsGlobe2 size={30} />
              {menu ? null : <h1 className="">Website</h1>}
            </div>
            <BiChevronRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
