'use client'
import { useState } from 'react';
import Menu from './components/menu/menu';
import { BiChevronLeft } from 'react-icons/bi';

const LayoutPage = ({ children }: { children: React.ReactNode }) => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="w-full h-screen">
      <div className="w-full h-full flex gap-x-6 relative">
        <Menu menu={menu} />
        {children}
        <div onClick={handleMenu} className="absolute top-10 left-[390px] cursor-pointer">
          <BiChevronLeft size={30} />
        </div>
      </div>
    </div>
  );
};

export default LayoutPage;
