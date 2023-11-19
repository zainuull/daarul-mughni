'use client';
import Menu from './components/menu/menu';
import { BiChevronLeft } from 'react-icons/bi';
import useStatus from './store/store.status';
import { atom } from 'jotai';
import NavbarDashboard from './components/navbar/navbar';
import { useState } from 'react';

export const themeAtom = atom('Light');

const LayoutPage = ({ children }: { children: React.ReactNode }) => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="w-full min-h-screen">
      <div className="w-full h-full flex relative">
        <Menu menu={menu} />
        <div className="w-full flex flex-col">
          <NavbarDashboard />
          <div className="w-full h-full">{children}</div>
        </div>
        <div
          onClick={handleMenu}
          className={`absolute top-[120px] ${
            menu
              ? 'left-[160px] transition-all duration-700'
              : 'left-[370px] transition-all duration-700'
          } cursor-pointer`}>
          <BiChevronLeft size={30} />
        </div>
      </div>
    </div>
  );
};

export default LayoutPage;
