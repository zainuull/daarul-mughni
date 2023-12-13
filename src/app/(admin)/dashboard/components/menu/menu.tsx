'use client';
import { RxDashboard } from 'react-icons/rx';
import { HiOutlineKey } from 'react-icons/hi';
import { BiChevronRight, BiCubeAlt, BiCalendarEvent, BiChevronDown } from 'react-icons/bi';
import { TbUserSquareRounded } from 'react-icons/tb';
import { BsCalendarCheck, BsQuestionCircle, BsGlobe2 } from 'react-icons/bs';
import { MdOutlineClass } from 'react-icons/md';
import { IoExitOutline } from 'react-icons/io5';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import useStatus from '../../store/store.status';
import { signOut, useSession } from 'next-auth/react';
import { IUser } from '@/model/user';
import { NotifyService } from '@/core/services/notify/notifyService';
import { useState } from 'react';
const Menu = () => {
  const pathname = usePathname();
  const [menu] = useStatus();
  const { data } = useSession();
  const [isOpen, setIsOpem] = useState({
    teacher: false,
    student: false,
    classes: false,
  });
  const user: IUser = data?.user;
  const notifyService = new NotifyService();

  const handleLogout = () => {
    notifyService.confirmationLogout().then((res) => {
      if (res) {
        signOut();
      }
    });
  };

  const handleDropDown = (key: string) => {
    setIsOpem({
      ...isOpen,
      [`${key}`]: !isOpen[`${key}`],
    });
  };

  return (
    <div
      className={`${
        menu ? 'w-[12vw]' : 'w-[25vw]'
      } min-h-screen p-4 shadow-lg shadow-gray-300 bg-white  transition-all duration-700 select-none`}>
      <div className="w-full h-full flex flex-col gap-y-2 mt-4">
        <div className="w-full flex items-center justify-center sm:gap-x-4 gap-x-4">
          <RxDashboard size={30} />
          {menu ? null : <h1 className="text-base lg:text-2xl font-medium">Dashboard</h1>}
        </div>
        <div className="flex flex-col gap-y-6 mt-20 w-full px-6 sm:px-2">
          <Link
            href={'/dashboard'}
            className={`${
              pathname == '/dashboard'
                ? 'bg-primary transition-all duration-300 p-2'
                : 'cursor-pointer'
            } w-full flex items-center justify-between p-0 rounded-lg lg:p-2`}>
            <div className="flex items-center gap-x-3 lg:gap-x-5">
              <HiOutlineKey size={30} />
              {menu ? null : <h1 className="sm:text-xs lg:text-base">Beranda</h1>}
            </div>
            <BiChevronRight size={20} />
          </Link>

          {user?.role === 'administrator' && (
            <>
              {/* ------------ Teacher --------------- */}
              <div
                onClick={() => handleDropDown('teacher')}
                className={`w-full ${
                  isOpen.teacher ? 'bg-amber-300' : 'bg-none'
                } rounded-lg py-2 flex items-center justify-between px-1 cursor-pointer`}>
                <div className="flex items-center gap-x-3 lg:gap-x-5">
                  <BiCubeAlt size={30} />
                  {menu ? null : <h1 className="sm:text-xs lg:text-base">Guru</h1>}
                </div>
                {isOpen.teacher ? <BiChevronDown size={20} /> : <BiChevronRight size={20} />}
              </div>

              {isOpen.teacher && (
                <div className={`flex flex-col gap-y-2`}>
                  <Link
                    href={{ pathname: '/dashboard/teacher' }}
                    className={`${
                      pathname.match(/^\/dashboard\/teacher/)
                        ? 'bg-primary transition-all duration-300 p-2'
                        : 'cursor-pointer'
                    } w-full flex items-center justify-between p-0 rounded-lg lg:p-3`}>
                    <h1 className="sm:text-xs lg:text-base">Data Guru</h1>
                  </Link>
                  <Link
                    href={{ pathname: '/dashboard/role' }}
                    className={`${
                      pathname.match(/^\/dashboard\/role/)
                        ? 'bg-primary transition-all duration-300 p-2'
                        : 'cursor-pointer'
                    } w-full flex items-center justify-between p-0 rounded-lg lg:p-3`}>
                    <h1 className="sm:text-xs lg:text-base">Jabatan</h1>
                  </Link>
                </div>
              )}

              {/* ------------ Student --------------- */}
              <div
                onClick={() => handleDropDown('student')}
                className={`w-full ${
                  isOpen.student ? 'bg-amber-300' : 'bg-none'
                } rounded-lg py-2 flex items-center justify-between px-1 cursor-pointer`}>
                <div className="flex items-center gap-x-3 lg:gap-x-5">
                  <TbUserSquareRounded size={30} />
                  {menu ? null : <h1 className="sm:text-xs lg:text-base">Siswa</h1>}
                </div>
                {isOpen.student ? <BiChevronDown size={20} /> : <BiChevronRight size={20} />}
              </div>
              {isOpen.student && (
                <div className="flex flex-col gap-y-2">
                  <Link
                    href={{ pathname: '/dashboard/student' }}
                    className={`${
                      pathname.match(/^\/dashboard\/student/)
                        ? 'bg-primary transition-all duration-300 p-2'
                        : 'cursor-pointer'
                    } w-full flex items-center justify-between p-0 rounded-lg lg:p-3`}>
                    <h1 className="sm:text-xs lg:text-base">Data Siswa</h1>
                  </Link>
                  <Link
                    href={{ pathname: '/dashboard/activity' }}
                    className={`${
                      pathname.match(/^\/dashboard\/activity/)
                        ? 'bg-primary transition-all duration-300 p-2'
                        : 'cursor-pointer'
                    } w-full flex items-center justify-between p-0 rounded-lg lg:p-3`}>
                    <h1 className="sm:text-xs lg:text-base">Laporan Kegiatan</h1>
                  </Link>
                </div>
              )}

              {/* ------------ Class --------------- */}
              <div
                onClick={() => handleDropDown('classes')}
                className={`w-full ${
                  isOpen.classes ? 'bg-amber-300' : 'bg-none'
                } rounded-lg py-2 flex items-center justify-between px-1 cursor-pointer`}>
                <div className="flex items-center gap-x-3 lg:gap-x-5">
                  <MdOutlineClass size={30} />
                  {menu ? null : <h1 className="sm:text-xs lg:text-base">Kelas</h1>}
                </div>
                {isOpen.classes ? <BiChevronDown size={20} /> : <BiChevronRight size={20} />}
              </div>
              {isOpen.classes && (
                <div className="flex flex-col gap-y-2">
                  <Link
                    href={{ pathname: '/dashboard/level' }}
                    className={`${
                      pathname.match(/^\/dashboard\/level/)
                        ? 'bg-primary transition-all duration-300 p-2'
                        : 'cursor-pointer'
                    } w-full flex items-center justify-between p-0 rounded-lg lg:p-3`}>
                    <h1 className="sm:text-xs lg:text-base">Tingkatan</h1>
                  </Link>
                  <Link
                    href={{ pathname: '/dashboard/class' }}
                    className={`${
                      pathname.match(/^\/dashboard\/class/)
                        ? 'bg-primary transition-all duration-300 p-2'
                        : 'cursor-pointer'
                    } w-full flex items-center justify-between p-0 rounded-lg lg:p-3`}>
                    <h1 className="sm:text-xs lg:text-base">Kelas</h1>
                  </Link>
                  <Link
                    href={{ pathname: '/dashboard/class-type' }}
                    className={`${
                      pathname.match(/^\/dashboard\/class-type/)
                        ? 'bg-primary transition-all duration-300 p-2'
                        : 'cursor-pointer'
                    } w-full flex items-center justify-between p-0 rounded-lg lg:p-3`}>
                    <h1 className="sm:text-xs lg:text-base">Kode Kelas</h1>
                  </Link>
                </div>
              )}
            </>
          )}

          <Link
            href={{ pathname: '/dashboard/absensi' }}
            className={`${
              pathname.match(/^\/dashboard\/absensi/)
                ? 'bg-primary transition-all duration-300 p-2'
                : 'cursor-pointer'
            } w-full flex items-center justify-between p-0 rounded-lg lg:p-2`}>
            <div className="flex items-center gap-x-3 lg:gap-x-5">
              <BsCalendarCheck size={25} />
              {menu ? null : <h1 className="sm:text-xs lg:text-base">Absensi</h1>}
            </div>
            <BiChevronRight size={20} />
          </Link>

          <Link
            href={'/'}
            className={`${
              pathname == '/' ? 'bg-primary transition-all duration-300 p-2' : 'cursor-pointer'
            } w-full flex items-center justify-between p-0 rounded-lg lg:p-2`}>
            <div className="flex items-center gap-x-3 lg:gap-x-5">
              <BsGlobe2 size={25} />
              {menu ? null : <h1 className="sm:text-xs lg:text-base">Website</h1>}
            </div>
            <BiChevronRight size={20} />
          </Link>
          {user && (
            <button
              onClick={handleLogout}
              className={`w-full flex items-center justify-between p-0 rounded-lg lg:p-2`}>
              <div className="flex items-center gap-x-3 lg:gap-x-5">
                <IoExitOutline size={25} />
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
