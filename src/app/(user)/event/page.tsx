'use client';
import Image from 'next/image';
import banner from '../../../../public/assets/banner.png';
import { useEffect, useState } from 'react';
import Menu from './components/menu';
import CardEvent from './components/card.event';
import Link from 'next/link';

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
      try {
        const res = await fetch('http://localhost:3000/api/events');
        if (res.ok) {
          const events = await res.json();
          setEvent(events?.events);
          return events;
        }
      } catch (error) {
        console.log(error);
      }
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
        <div className="absolute w-full h-3/4 grid grid-cols-4 gap-2 lg:grid-cols-12 lg:min-h-screen lg:px-6">
          {event &&
            event?.map((data: any) => (
              <>
                <Link
                  id={data?.od}
                  href={`${windowWidth >= 650 ? `event/${data?.id}` : ''}`}
                  onClick={() => handleMenu(data?.id)}
                  className="flex col-span-1 lg:flex items-center justify-center lg:col-span-2">
                  <CardEvent id={data?.id} handleMenu={handleMenu} image={data?.imageUrl} />
                </Link>
                {id == data?.id && windowWidth <= 650 ? (
                  <Menu id={data?.id} menu={menu} setMenu={setMenu} />
                ) : null}
              </>
            ))}
        </div>
      </div>
    </div>
  );
}
