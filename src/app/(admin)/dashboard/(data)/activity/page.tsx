'use client';
import { BsSearch } from 'react-icons/bs';
import TableList from './table/table';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import useDataEvents from './store/store.events';
import useStoreDatas from './store/store.datas';
import { getEvents, getEventsByCategories } from '@/services/api';
import DropdownFilter from './add-data-activity/component/dropdown/dropdown.filter';
import Header from '../../components/header/header';
import { NotifyService } from '@/services/notify/notifyService';
import Swal from 'sweetalert2';
import useStatus from '../../store/store.status';

const DataActivity = () => {
  const [eventForm] = useDataEvents();
  const [datas, setDatas] = useStoreDatas();
  const [searchInput, setSearchInput] = useState('');
  const notifyService = new NotifyService();
  const [menu] = useStatus();

  useEffect(() => {
    notifyService.showLoading();
    if (eventForm?.filter_by) {
      fetchDataByPosition();
    }
    fetchData();
  }, [eventForm?.filter_by]);

  const fetchDataByPosition = () => {
    getEventsByCategories(eventForm?.filter_by).then((res) => {
      setDatas(res?.data);
      Swal.close();
    });
  };

  const fetchData = async () => {
    getEvents().then((res) => {
      setDatas(res?.events);
      Swal.close();
    });
  };

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
  };

  // Ensure that datas is an array before attempting to filter
  const filteredDatas = Array.isArray(datas)
    ? datas.filter((data) => data?.title?.toLowerCase().includes(searchInput.toLowerCase()))
    : [];

  return (
    <div className="w-full flex justify-end">
      <div className={`p-10 ${menu ? 'w-[1100px]' : 'w-3/4'} h-full flex flex-col gap-y-4 transition-all duration-700`}>
        <Header title="Laporan Kegiatan" />
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
            <input
              className="w-full outline-none"
              placeholder="Cari Data Kegiatan"
              value={searchInput}
              onChange={handleSearch}
            />
          </div>
          <DropdownFilter />
        </div>
        <TableList resultSearchData={filteredDatas} />
      </div>
    </div>
  );
};

export default DataActivity;
