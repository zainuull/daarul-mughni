'use client';
import { BsSearch } from 'react-icons/bs';
import TableList from './table/table';
import Link from 'next/link';
import React, { useEffect } from 'react';
import useDataEvents from './store/store.events';
import useStoreDatas from './store/store.datas';
import { getEventsByCategories, getEventsById } from '@/services/api';
import DropdownFilter from './add-data-activity/component/dropdown/dropdown.filter';

const DataActivity = () => {
  const [eventForm] = useDataEvents();
  const [, setDatas] = useStoreDatas();

  useEffect(() => {
    if (eventForm?.selected_category) {
      const fetchDataByPosition = async () => {
        if (eventForm?.selected_category) {
          const res = await getEventsByCategories(eventForm?.selected_category);
          setDatas(res?.data);
        }
      };
      fetchDataByPosition();
    } else {
      setDatas({});
    }
  }, [eventForm?.selected_category]);

  return (
    <div className="w-full">
      <div className="p-10 w-full h-full flex flex-col gap-y-4 ">
        <h1 className="text-2xl uppercase font-medium">Laporan Acara</h1>
        <div className="w-full flex items-center justify-between mt-2">
          <h2 className="font-light uppercase">Daftar Acara</h2>
          <Link
            href={'/dashboard/activity/add-data-activity'}
            className="px-6 py-2 bg-primary rounded-lg text-slate-700">
            Tambah Data Acara
          </Link>
        </div>
        <div className="w-full flex items-center gap-x-6">
          <div className="w-4/5 flex items-center gap-x-2 px-3 py-2 rounded-xl border border-primary">
            <BsSearch />
            <input className="w-full outline-none" placeholder="Cari Data Guru" />
          </div>
          <DropdownFilter />
        </div>
        <TableList />
      </div>
    </div>
  );
};

export default DataActivity;
