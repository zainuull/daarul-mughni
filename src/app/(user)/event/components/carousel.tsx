'use client';
import dynamic from 'next/dynamic';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import useViewModel from '@/app/(admin)/dashboard/(data)/activity/(presentation)/vm/view.model';
import useStatus from '@/app/(admin)/dashboard/store/store.status';
import useStoreDatas from '@/app/(admin)/dashboard/(data)/activity/(presentation)/store/store.datas';
import { HandleError } from '@/core/services/handleError/handleError';
import { NotifyService } from '@/core/services/notify/notifyService';
import { useRouter } from 'next/navigation';
//Component
const Modal = dynamic(() => import('./modal'))

const Carousel = () => {
  const { getEvents } = useViewModel();
  const [dataStore] = useStoreDatas();
  const [openModal, setOpenModal] = useStatus();
  const [id, setId] = useState('');
  const [windowWidth, setWindowWidth] = useState(0);
  const [count, setCount] = useState(0);
  const notifyService = new NotifyService();
  const event = dataStore?.data || [];
  const router = useRouter();

  useEffect(() => {
    notifyService.showLoading();
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

  const fetchData = () => {
    getEvents()
      .then(() => {
        notifyService.closeSwal();
      })
      .catch((err) => {
        HandleError(err);
      });
  };

  const handleModal = (id: string, index: number) => {
    setOpenModal(!openModal);
    setId(id);
    setCount(index);
    if (window.innerWidth >= 1024) {
      router.push(`/event/${id}`);
    }
  };

  return (
    <div className="flex items-center overflow-x-auto">
      <div
        id="slider"
        className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth">
        {event?.map((data, index) => (
          <button
            key={data.id}
            id={data.id}
            onClick={() => handleModal(data.id, index + 1)}
            className="mr-12">
            <Image
              src={data.imageUrl}
              alt={data.title}
              width={300}
              height={10}
              priority
              className="sm:w-[100px] md:w-[200px] lg:w-[450px] w-[200px] h-[400px] lg:h-[550px] object-cover hover:scale-110 transition-all duration-300"
            />
          </button>
        ))}
      </div>
      {windowWidth <= 760 && <Modal id={id} count={count} />}
    </div>
  );
};

export default Carousel;
