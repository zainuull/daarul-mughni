'use client';
import useStatus from '@/app/(admin)/dashboard/store/store.status';
import { IEventDataModel } from '@/model/model';
import { getEventsById } from '@/services/api';
import { useEffect, useState } from 'react';
import { BsChevronDoubleDown } from 'react-icons/bs';
interface IMenu {
  id?: string;
  menu?: boolean;
  setMenu?: any;
  count?: number;
}

const Menu = (props: IMenu) => {
  const { id, count } = props;
  const [detailMenu, setDetailMenu] = useState<IEventDataModel>();
  const [menu, setMenu] = useStatus();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getEventsById(id);
      setDetailMenu(data?.events);
    };
    fetchData();
  }, [id]);

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
