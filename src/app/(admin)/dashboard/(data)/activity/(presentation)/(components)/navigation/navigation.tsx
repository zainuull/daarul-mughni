'use client';
import { BsSearch } from 'react-icons/bs';
import React, { useEffect, useState } from 'react';
import useDataEvents from '../../store/store.events';
import useStoreDatas from '../../store/store.datas';
import { DropdownFilter } from '../dropdown/index';
import Header from '../../../../../components/header/header';
import { NotifyService } from '@/core/services/notify/notifyService';
import useStatus from '../../../../../store/store.status';
import { useRouter } from 'next/navigation';
import useViewModel from '../../vm/view.model';
import { HandleError } from '@/core/services/handleError/handleError';
import dynamic from 'next/dynamic';
const TableList = dynamic(() => import('../list/list'));

const Navigation = () => {
  const { getEventByCategories } = useViewModel();
  const [eventForm, setEventForm] = useDataEvents();
  const [dataStore] = useStoreDatas();
  const [searchInput, setSearchInput] = useState('');
  const notifyService = new NotifyService();
  const [menu] = useStatus();
  const router = useRouter();

  useEffect(() => {
    if (eventForm?.filter_by) {
      notifyService.showLoading();
      fetchDataByPosition();
    }
  }, [eventForm?.filter_by]);

  const fetchDataByPosition = () => {
    getEventByCategories(eventForm?.filter_by)
      .then(() => {
        notifyService.closeSwal();
      })
      .catch((err) => {
        HandleError(err);
      });
  };

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
  };

  // Ensure that datas is an array before attempting to filter
  const resultSearchData = Array.isArray(dataStore?.data)
    ? dataStore?.data.filter((data) =>
        data?.title?.toLowerCase().includes(searchInput.toLowerCase())
      )
    : [];

  const handleAdd = () => {
    router.push('/dashboard/activity/create');
    setEventForm({
      ...eventForm,
      title: '',
      description: '',
      person_responsible: '',
      telp_person_responsible: '',
      place_event: '',
      date_event: '',
      section: '',
      imageUrl: '',
      publicId: '123',
      selected_category: '',
      total_cost: '',
      status: '',
    });
  };

  return (
    <div
      className={`p-10 ${
        menu ? 'w-[88vw]' : 'w-[75vw]'
      } h-screen overflow-y-auto flex flex-col gap-y-4 transition-all duration-700`}>
      <Header title="Laporan Kegiatan" />
      <div className="w-full flex items-center justify-between mt-2">
        <h2 className="font-light uppercase">Daftar Kegiatan</h2>
        <button
          onClick={handleAdd}
          className="px-2 py-2 bg-primary rounded-lg text-slate-700 lg:px-6">
          Tambah Data Kegiatan
        </button>
      </div>
      <div className="ww-full grid grid-cols-12 gap-x-6 sm:gap-x-4">
        <div className="col-span-8 flex items-center gap-x-2 px-3 py-2 rounded-xl border border-primary">
          <BsSearch />
          <input
            className="w-[70vw] outline-none"
            placeholder="Cari Data Guru"
            value={searchInput}
            onChange={handleSearch}
          />
        </div>
        <div className="col-span-4">
          <DropdownFilter />
        </div>
      </div>
      <TableList resultSearchData={resultSearchData} />
    </div>
  );
};

export default Navigation;
