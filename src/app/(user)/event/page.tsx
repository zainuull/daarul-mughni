'use client';
import Image from 'next/image';
import banner from '../../../../public/assets/banner.png';
import { useEffect, useState } from 'react';
import Menu from './components/menu';
import CardEvent from './components/card.event';
import Link from 'next/link';
import { IEventDataModel } from '@/model/model';
import { getEvents } from '@/services/api';
import MySlider from '../test/page';

export default function EventPage() {
  const [menu, setMenu] = useState(false);
  const [event, setEvent] = useState<any>();
  const [id, setId] = useState('');
  const [windowWidth, setWindowWidth] = useState(0); // State to store window width

  const handleMenu = (id: string) => {
    setMenu(!menu);
    setId(id);
  };

  useEffect(() => {
    const fetchData = async () => {
      const events = await getEvents();
      setEvent(events?.events);
    };
    fetchData();

    function handleResize() {
      setWindowWidth(window.innerWidth); // Update window width in state
    }

    // Event listener for window resize
    window.addEventListener('resize', handleResize);
    // Initial window width update
    setWindowWidth(window.innerWidth);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array to run this effect only once
  console.log(event);

  return (
    <div className="w-full min-h-screen overflow-hidden">
      <div className="relative w-full h-full flex flex-col">
        <Image
          src={banner.src}
          alt="Logo"
          width={700}
          height={400}
          className="h-screen object-cover lg:w-full"
        />

        <div className="absolute w-full h-screen translate-y-32">
          <MySlider />
        </div>
      </div>
    </div>
  );
}
