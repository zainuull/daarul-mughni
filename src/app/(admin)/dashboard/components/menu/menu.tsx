'use client';
import { RxDashboard } from 'react-icons/rx';
import { HiOutlineKey } from 'react-icons/hi';
import { BiChevronRight, BiCubeAlt, BiCalendarEvent } from 'react-icons/bi';
import { TbUserSquareRounded } from 'react-icons/tb';
import { BsCalendarCheck, BsQuestionCircle, BsGlobe2 } from 'react-icons/bs';
import { IoExitOutline } from 'react-icons/io5';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import useStatus from '../../store/store.status';
import { signOut, useSession } from 'next-auth/react';
import { IUser } from '@/model/user';
import { NotifyService } from '@/core/services/notify/notifyService';
const Menu = () => {
  const pathname = usePathname();
  const [menu] = useStatus();
  const { data } = useSession();
  const user: IUser = data?.user;
  const notifyService = new NotifyService();

  const handleLogout = () => {
    notifyService.confirmationLogout().then((res) => {
      if (res) {
        signOut();
      }
    });
  };

  return (
    <div
      className={`${
        menu ? 'w-[12vw]' : 'w-[25vw]'
      } min-h-screen p-4 shadow-lg shadow-gray-300 bg-white  transition-all duration-700`}>
      <div className="w-full h-full flex flex-col gap-y-2 mt-4">
        <div className="w-full flex items-center justify-center sm:gap-x-4 gap-x-4">
          <RxDashboard size={30} />
          {menu ? null : <h1 className="text-base lg:text-2xl font-medium">Dashboard</h1>}
        </div>
        <div className="flex flex-col gap-y-10 mt-20 w-full px-6 sm:px-2">
          <Link
            href={'/dashboard'}
            className={`${
              pathname == '/dashboard'
                ? 'bg-primary transition-all duration-300 p-2'
                : 'cursor-pointer'
            } w-full flex items-center justify-between p-0 rounded-lg lg:p-3`}>
            <div className="flex items-center gap-x-3 lg:gap-x-6">
              <HiOutlineKey size={30} />
              {menu ? null : <h1 className="sm:text-xs lg:text-base">Beranda</h1>}
            </div>
            <BiChevronRight size={20} />
          </Link>
          {user?.role === 'administrator' && (
            <>
              <Link
                href={{ pathname: '/dashboard/teacher' }}
                className={`${
                  pathname.match(/^\/dashboard\/teacher/)
                    ? 'bg-primary transition-all duration-300 p-2'
                    : 'cursor-pointer'
                } w-full flex items-center justify-between p-0 rounded-lg lg:p-3`}>
                <div className="flex items-center gap-x-3 lg:gap-x-6">
                  <BiCubeAlt size={30} />
                  {menu ? null : <h1 className="sm:text-xs lg:text-base">Data Guru</h1>}
                </div>
                <BiChevronRight size={20} />
              </Link>
              <Link
                href={{ pathname: '/dashboard/student' }}
                className={`${
                  pathname.match(/^\/dashboard\/student/)
                    ? 'bg-primary transition-all duration-300 p-2'
                    : 'cursor-pointer'
                } w-full flex items-center justify-between p-0 rounded-lg lg:p-3`}>
                <div className="flex items-center gap-x-3 lg:gap-x-6">
                  <TbUserSquareRounded size={30} />
                  {menu ? null : <h1 className="sm:text-xs lg:text-base">Data Siswa</h1>}
                </div>
                <BiChevronRight size={20} />
              </Link>
              <Link
                href={{ pathname: '/dashboard/activity' }}
                className={`${
                  pathname.match(/^\/dashboard\/activity/)
                    ? 'bg-primary transition-all duration-300 p-2'
                    : 'cursor-pointer'
                } w-full flex items-center justify-between p-0 rounded-lg lg:p-3`}>
                <div className="flex items-center gap-x-3 lg:gap-x-6">
                  <BiCalendarEvent size={30} />
                  {menu ? null : <h1 className="sm:text-xs lg:text-base">Laporan Kegiatan</h1>}
                </div>
                <BiChevronRight size={20} />
              </Link>
            </>
          )}
          <Link
            href={{ pathname: '/dashboard/absensi' }}
            className={`${
              pathname.match(/^\/dashboard\/absensi/)
                ? 'bg-primary transition-all duration-300 p-2'
                : 'cursor-pointer'
            } w-full flex items-center justify-between p-0 rounded-lg lg:p-3`}>
            <div className="flex items-center gap-x-3 lg:gap-x-6">
              <BsCalendarCheck size={30} />
              {menu ? null : <h1 className="sm:text-xs lg:text-base">Absensi</h1>}
            </div>
            <BiChevronRight size={20} />
          </Link>
          <Link
            href={'/dashboard/help'}
            className={`${
              pathname == '/dashboard/help'
                ? 'bg-primary transition-all duration-300 p-2'
                : 'cursor-pointer'
            } w-full flex items-center justify-between p-0 rounded-lg lg:p-3`}>
            <div className="flex items-center gap-x-3 lg:gap-x-6">
              <BsQuestionCircle size={30} />
              {menu ? null : <h1 className="sm:text-xs lg:text-base">Help</h1>}
            </div>
            <BiChevronRight size={20} />
          </Link>
          <Link
            href={'/'}
            className={`${
              pathname == '/' ? 'bg-primary transition-all duration-300 p-2' : 'cursor-pointer'
            } w-full flex items-center justify-between p-0 rounded-lg lg:p-3`}>
            <div className="flex items-center gap-x-3 lg:gap-x-6">
              <BsGlobe2 size={30} />
              {menu ? null : <h1 className="sm:text-xs lg:text-base">Website</h1>}
            </div>
            <BiChevronRight size={20} />
          </Link>
          {user && (
            <button
              onClick={handleLogout}
              className={`w-full flex items-center justify-between p-0 rounded-lg lg:p-3`}>
              <div className="flex items-center gap-x-3 lg:gap-x-6">
                <IoExitOutline size={30} />
                {menu ? null : <h1 className="sm:text-xs lg:text-base">Logout</h1>}
              </div>
              <BiChevronRight size={20} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
