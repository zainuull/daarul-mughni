'use client';
import { BsSearch } from 'react-icons/bs';
import TableList from './table/table';
import Link from 'next/link';
import React, { useEffect } from 'react';
import useDataEvents from './store/store.events';
import useStoreDatas from './store/store.datas';
import { getEventsByCategories } from '@/services/api';
import DropdownFilter from './add-data-activity/component/dropdown/dropdown.filter';
import { BiChevronLeft } from 'react-icons/bi';
import useStatus from '../../store/store.status';

const DataActivity = () => {
  const [eventForm] = useDataEvents();
  const [, setDatas] = useStoreDatas();
  const [menu, setMenu] = useStatus();

  useEffect(() => {
    const fetchDataByPosition = async () => {
      const res = await getEventsByCategories(eventForm?.filter_by);
      setDatas(res?.data);
    };
    fetchDataByPosition();
  }, [eventForm?.filter_by]);

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="w-full">
      <div className="p-10 w-full h-full flex flex-col gap-y-4 ">
        <div onClick={handleMenu} className="flex items-center gap-x-2 cursor-pointer">
          <BiChevronLeft size={30} />
          <h1 className="text-2xl uppercase font-medium">Laporan Kegiatan</h1>
        </div>
        <div className="w-full flex items-center justify-between mt-2">
          <h2 className="font-light uppercase">Daftar Kegiatan</h2>
          <Link
            href={'/dashboard/activity/add-data-activity'}
            className="px-6 py-2 bg-primary rounded-lg text-slate-700">
            Tambah Data Kegiatan
          </Link>
        </div>
        <div className="w-full flex items-center gap-x-6">
          <div className="w-4/5 flex items-center gap-x-2 px-3 py-2 rounded-xl border border-primary">
            <BsSearch />
            <input className="w-full outline-none" placeholder="Cari Data Kegiatan" />
          </div>
          <DropdownFilter />
        </div>
        <TableList />
      </div>
    </div>
  );
};

export default DataActivity;
