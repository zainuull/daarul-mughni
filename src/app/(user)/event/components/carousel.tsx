'use client';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import { getEvents } from '@/services/api';
import Link from 'next/link';
import { IEventDataModel } from '@/model/event';
import Menu from './menu';
import useStatus from '@/app/(admin)/dashboard/store/store.status';
var settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 340,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: false,
        dots: false,
      },
    },
  ],
};

const Carousel = () => {
  const [menu, setMenu] = useStatus();
  const [event, setEvent] = useState<any>();
  const [id, setId] = useState('');
  const [windowWidth, setWindowWidth] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const events = await getEvents();
      setEvent(events?.events);
    };
    fetchData();

    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    setWindowWidth(window.innerWidth);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMenu = (id: string, index: number) => {
    setMenu(!menu);
    setId(id);
    setCount(index);
  };

  return (
    <div className="flex flex-col">
      <Slider {...settings}>
        {event &&
          event?.map((data: IEventDataModel, index: number) => (
            <>
              <Link
                id={data?.id}
                href={`${windowWidth >= 650 ? `event/${data?.id}` : ''}`}
                onClick={() => handleMenu(data?.id, index + 1)}>
                <Image src={data?.imageUrl} alt={data?.title} width={300} height={10} className='sm:w-[100px] md:w-[200px] lg:w-[300px]'/>
              </Link>
            </>
          ))}
      </Slider>
      {id && windowWidth <= 650 && <Menu id={id} menu={menu} setMenu={setMenu} count={count} />}
    </div>
  );
};

export default Carousel;
