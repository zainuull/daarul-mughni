'use client';
import { RxDashboard } from 'react-icons/rx';
import { HiOutlineKey } from 'react-icons/hi';
import { BiChevronRight, BiCubeAlt, BiCalendarEvent } from 'react-icons/bi';
import { TbUserSquareRounded } from 'react-icons/tb';
import { BsCalendarCheck, BsQuestionCircle, BsGlobe2 } from 'react-icons/bs';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import useStatus from '../../store/store.status';

const Menu = () => {
  const pathname = usePathname();
  const [menu] = useStatus();

  return (
    <div
      className={`${
        menu ? 'w-[150px] transition-all duration-700' : 'w-1/3 transition-all duration-700'
      } min-h-screen p-4 shadow-lg shadow-gray-300`}>
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
          <Link
            href={{ pathname: '/dashboard/guru' }}
            className={`${
              pathname.match(/^\/dashboard\/guru/)
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
            href={{ pathname: '/dashboard/siswa' }}
            className={`${
              pathname.match(/^\/dashboard\/siswa/)
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
