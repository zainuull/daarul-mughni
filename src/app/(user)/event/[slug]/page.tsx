'use client';
import { BsChevronDoubleDown } from 'react-icons/bs';
import { IEventDataModel } from '@/model/event.model';

interface IDetailEventPage {
  menu?: boolean;
  setMenu?: any;
  event?: string;
  name?: string;
  description1?: string;
  description2?: string;
}

const DetailEventPage = (props: IDetailEventPage) => {
  const { setMenu, menu, event,name, description1, description2 } = props;

  return (
    <div
      className={`w-full min-h-[200px] bg-white absolute rounded-3xl ${
        menu
          ? 'bottom-0 transition-all duration-300'
          : '-bottom-[2000px] transition-all duration-300'
      }`}>
      <div className="w-full flex flex-col items-center text-center gap-y-2 text-xs h-full p-6 relative">
        <div
          onClick={() => setMenu(!menu)}
          className="bg-white h-4 p-4 w-20 rounded-md absolute -top-5 flex items-center justify-center group cursor-pointer">
          <BsChevronDoubleDown size={20} className="group-hover:text-gray-600 transition-all" />
        </div>
        <h1 className="font-semibold text-lg">{event}</h1>
        <p className='w-2/3 font-medium'>{name}</p>
        <p>{description1}</p>
        <p>{description2}</p>
        <p className="w-11/12">
          Pondok Pesantren Modern Perpaduan Daarul Mughni Al Maaliki, Klapanunggal - Bogor..
        </p>
      </div>
    </div>
  );
};

export default DetailEventPage;
