'use client';
import dynamic from 'next/dynamic';
import { BsSearch } from 'react-icons/bs';
import { DropdownFilterLevel, DropdownFilterClass } from '../dropdown/index';
import useDataAbsensi from '../../store/store.absensi';
import { useEffect, useState } from 'react';
import Header from '@/app/(admin)/dashboard/components/header/header';
import useStoreDatas from '../../store/store.datas';
import { useSession } from 'next-auth/react';
import { IUser } from '@/model/user';
import { NotifyService } from '@/core/services/notify/notifyService';
import useStatus from '@/app/(admin)/dashboard/store/store.status';
import useViewModel from '../../vm/view.model';
import { HandleError } from '@/core/services/handleError/handleError';
import { useRouter } from 'next/navigation';

const TableList = dynamic(() => import('../list/list'));

const Navigation = () => {
  const { getAbsensiByClass } = useViewModel();
  const [absensiForm, setAbsensiForm] = useDataAbsensi();
  const [dataStore] = useStoreDatas();
  const [searchInput, setSearchInput] = useState('');
  const { data } = useSession();
  const user: IUser = data?.user;
  const notifyServices = new NotifyService();
  const [menu] = useStatus();
  const router = useRouter();

  useEffect(() => {
    if (absensiForm?.filter_by_class) {
      notifyServices.showLoading();
      fetchDataByClass();
    }
  }, [absensiForm?.filter_by_class]);

  const fetchDataByClass = () => {
    getAbsensiByClass(absensiForm?.filter_by_class)
      .then(() => {
        notifyServices.closeSwal();
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
        data?.classTypeName?.toLowerCase().includes(searchInput.toLowerCase())
      )
    : [];

  const handleAdd = () => {
    router.push('/dashboard/absensi/create');
    setAbsensiForm({
      ...absensiForm,
      id: '',
      levelName: '',
      className: '',
      classTypeName: '',
      teacher: '',
      lesson: '',
      start_time: '',
      end_time: '',
      filter_by_level: '',
      filter_by_class: '',
      status: '',
    });
  };

  return (
    <div
      className={`p-10 ${
        menu ? 'w-[88vw]' : 'w-[75vw]'
      } h-full flex flex-col gap-y-4 transition-all duration-700`}>
      <Header title="Absensi" />
      <div className="w-full flex items-center justify-between mt-2">
        <h2 className="font-light uppercase">Sesi Absensi</h2>
        {user?.role === 'administrator' && (
          <button
            onClick={handleAdd}
            className="px-2 py-2 bg-primary rounded-lg text-slate-700 lg:px-6">
            Tambah Data Absensi
          </button>
        )}
      </div>
      <div className="w-full grid grid-cols-12 gap-x-6 sm:gap-x-4">
        <div className="col-span-8 flex items-center gap-x-2 px-3 py-2 rounded-xl border border-primary">
          <BsSearch />
          <input
            className="w-[70vw] outline-none"
            placeholder="Cari Data Siswa"
            value={searchInput}
            onChange={handleSearch}
          />
        </div>
        <div className="col-span-2">
          <DropdownFilterLevel />
        </div>
        <div className="col-span-2">
          <DropdownFilterClass />
        </div>
      </div>
      <TableList resultSearchData={resultSearchData} />
    </div>
  );
};

export default Navigation;
