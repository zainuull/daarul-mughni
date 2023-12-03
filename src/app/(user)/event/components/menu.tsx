'use client';
import useStatus from '@/app/(admin)/dashboard/store/store.status';
import { IEventDataModel } from '@/app/(admin)/dashboard/(data)/activity/domain/model/IModel';
import useViewModel from '@/app/(admin)/dashboard/(data)/activity/(presentation)/vm/view.model';
import { useEffect, useState } from 'react';
import { BsChevronDoubleDown } from 'react-icons/bs';
import { NotifyService } from '@/core/services/notify/notifyService';
import useStoreDatas from '@/app/(admin)/dashboard/(data)/activity/(presentation)/store/store.datas';
import { HandleError } from '@/core/services/handleError/handleError';
interface IMenu {
  id?: string;
  menu?: boolean;
  setMenu?: any;
  count?: number;
}

const Menu = (props: IMenu) => {
  const { getEventsById } = useViewModel();
  const [dataStore] = useStoreDatas();
  const { id, count } = props;
  const [menu, setMenu] = useStatus();
  const notifyService = new NotifyService();
  const detailMenu: any = dataStore?.data;

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
    <div
      className={`w-full min-h-[200px] bg-white absolute rounded-3xl ${
        menu
          ? 'bottom-[120px] transition-all duration-300'
          : '-bottom-[2000px] transition-all duration-300'
      }`}>
      <div className="w-full flex flex-col items-center text-center gap-y-2 text-xs h-full p-6 relative">
        <div
          onClick={() => setMenu(!menu)}
          className="bg-white h-4 p-4 w-20 rounded-md absolute -top-5 flex items-center justify-center group cursor-pointer">
          <BsChevronDoubleDown size={20} className="group-hover:text-gray-600 transition-all" />
        </div>
        <h1 className="font-semibold text-lg">0{count} - Kegiatan</h1>
        <p className="w-2/3 font-medium">{detailMenu?.title}</p>
        <p>{detailMenu?.description}</p>
        <p className="w-11/12">
          Pondok Pesantren Modern Perpaduan Daarul Mughni Al Maaliki, Klapanunggal - Bogor..
        </p>
      </div>
    </div>
  );
};

export default Menu;
