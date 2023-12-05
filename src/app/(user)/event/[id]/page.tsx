'use client';
import Image from 'next/image';
import banner from '../../../../../public/assets/banner.png';
import useViewModel from '../../../(admin)/dashboard/(data)/activity/(presentation)/vm/view.model';
import useStoreDatas from '@/app/(admin)/dashboard/(data)/activity/(presentation)/store/store.datas';
import { useEffect } from 'react';
import { HandleError } from '@/core/services/handleError/handleError';
import { NotifyService } from '@/core/services/notify/notifyService';

const DetailEventPage = ({ params }: { params: { id: string } }) => {
  const { getEventsById, detailEvent } = useViewModel();
  const id = params?.id;
  const notifyService = new NotifyService();

  useEffect(() => {
    notifyService.showLoading();
    fetchData();
  }, []);

  const fetchData = () => {
    getEventsById(id)
      .then(() => {
        notifyService.closeSwal();
      })
      .catch((err) => {
        HandleError(err);
      });
  };

  return (
    <div className="w-full min-h-screen mb-10 lg:mb-0">
      <div className="flex flex-col w-full relative">
        <div className="relative">
          <Image
            src={banner.src}
            alt="Logo"
            width={700}
            height={400}
            className="lg:h-screen lg:w-full"
          />
        </div>
        <div className="lg:w-full lg:flex flex-col items-center">
          <div className="px-2 mt-4 text-sm leading-relaxed lg:absolute lg:top-[70px] lg:bg-white lg:p-10 lg:rounded-xl lg:w-11/12 lg:h-4/5">
            <div className="w-full h-full flex justify-between items-center gap-x-4">
              <div className="h-full flex flex-col gap-y-12 w-1/3">
                <p className="text-2xl font-bold">{detailEvent?.title}</p>
                <p>{detailEvent?.description}</p>
                <p>
                  Pondok Pesantren Modern Perpaduan Daarul Mughni Al Maaliki, Klapanunggal - Bogor..
                </p>
              </div>

              <div className="w-2/3 h-full relative">
                <Image
                  src={detailEvent?.imageUrl}
                  alt={detailEvent?.title}
                  width={300}
                  height={330}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-6 left-10 flex flex-col gap-y-4">
                  <Image
                    src={detailEvent?.imageUrl}
                    alt={detailEvent?.title}
                    width={300}
                    height={330}
                    className="w-[300px] object-cover"
                  />
                  <p className="text-xl font-bold text-white">{detailEvent?.person_responsible}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailEventPage;
