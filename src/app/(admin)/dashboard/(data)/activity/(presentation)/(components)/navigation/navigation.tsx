'use client';
import { BsSearch } from 'react-icons/bs';
import TableList from '../list/list';
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

const Navigation = () => {
  const { getEventByCategories } = useViewModel();
  const [eventForm, setEventForm] = useDataEvents();
  const [dataStore] = useStoreDatas();
  const [searchInput, setSearchInput] = useState('');
  const notifyService = new NotifyService();
  const [menu] = useStatus();
  const router = useRouter();

  useEffect(() => {
    notifyService.showLoading();
    if (eventForm?.filter_by) {
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
        menu ? 'w-[1300px]' : 'w-3/4'
      } h-full flex flex-col gap-y-4 transition-all duration-700`}>
      <Header title="Laporan Kegiatan" />
      <div className="w-full flex items-center justify-between mt-2">
        <h2 className="font-light uppercase">Daftar Kegiatan</h2>
        <button onClick={handleAdd} className="px-6 py-2 bg-primary rounded-lg text-slate-700">
          Tambah Data Kegiatan
        </button>
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
      <TableList resultSearchData={resultSearchData} />
    </div>
  );
};

export default Navigation;
