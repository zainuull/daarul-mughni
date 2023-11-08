'use client';
import Image from 'next/image';
import banner from '../../../../public/assets/banner.png';
import { useEffect, useState } from 'react';
import event1 from '../../../../public/assets/event/event1.png';
import event2 from '../../../../public/assets/event/event2.png';
import event3 from '../../../../public/assets/event/event3.png';
import event4 from '../../../../public/assets/event/event4.png';
import event5 from '../../../../public/assets/event/event5.png';
import Menu from './components/menu';
import CardEvent from './components/card.event';
import Link from 'next/link';

export default function EventPage() {
  const [menu, setMenu] = useState(false);
  const [id, setId] = useState('');

  const handleMenu = (e: any) => {
    setMenu(!menu);
    setId(e.target.id);
  };

  return (
    <div className="w-full min-h-screen overflow-hidden">
      <div className="relative w-full h-full flex flex-col">
        <Image
          src={banner}
          alt="Logo"
          width={700}
          height={400}
          className="h-screen object-cover lg:w-full"
        />
        <div className="absolute w-full h-3/4 grid grid-cols-4 gap-2 lg:grid-cols-12 lg:min-h-screen lg:px-6">
          <Link
            href={`${window.innerWidth >= 650 ? '/event/1' : ''}`}
            className="flex col-span-1 lg:flex items-center justify-center lg:col-span-2">
            <CardEvent id="1" handleMenu={handleMenu} image={event1.src} />
          </Link>
          <Link
            href={`${window.innerWidth >= 650 ? '/event/4' : ''}`}
            className="hidden col-span-1 lg:flex items-center justify-center lg:col-span-2">
            <CardEvent id="4" handleMenu={handleMenu} image={event4.src} />
          </Link>
          <Link
            href={`${window.innerWidth >= 650 ? '/event/2' : ''}`}
            className="flex col-span-2 lg:flex items-center justify-center lg:col-span-4">
            <CardEvent id="2" handleMenu={handleMenu} image={event2.src} />
          </Link>
          <Link
            href={`${window.innerWidth >= 650 ? '/event/3' : ''}`}
            className="flex col-span-1 lg:flex items-center justify-center lg:col-span-2">
            <CardEvent id="3" handleMenu={handleMenu} image={event3.src} />
          </Link>
          <Link
            href={`${window.innerWidth >= 650 ? '/event/5' : ''}`}
            className="hidden col-span-1 lg:flex items-center justify-center lg:col-span-2">
            <CardEvent id="5" handleMenu={handleMenu} image={event5.src} />
          </Link>
        </div>
        {id == '1' && window.innerWidth <= 650 ? (
          <Menu id={id} menu={menu} setMenu={setMenu} />
        ) : null}
        {id == '2' && window.innerWidth <= 650 ? (
          <Menu id={id} menu={menu} setMenu={setMenu} />
        ) : null}
        {id == '3' && window.innerWidth <= 650 ? (
          <Menu id={id} menu={menu} setMenu={setMenu} />
        ) : null}
      </div>
    </div>
  );
}
