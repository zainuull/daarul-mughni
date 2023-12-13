'use client';
import { BsSearch } from 'react-icons/bs';
import { DropdownFilter } from '../dropdown/dropdown.filter';
import useDataTeacher from '../../store/store.teacher';
import { useEffect, useState } from 'react';
import useStoreDatas from '../../store/store.datas';
import Header from '../../../../../components/header/header';
import { NotifyService } from '@/core/services/notify/notifyService';
import useStatus from '@/app/(admin)/dashboard/store/store.status';
import useViewModel from '../../vm/view-model';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
const TableList = dynamic(() => import('../list/list'));

const Navigation = () => {
  const { getTeacherByPosition } = useViewModel();
  const [teacherForm, setTeacherForm] = useDataTeacher();
  const [dataStore] = useStoreDatas();
  const [searchInput, setSearchInput] = useState('');
  const notifyService = new NotifyService();
  const [menu] = useStatus();
  const router = useRouter();

  useEffect(() => {
    if (teacherForm?.filter_by) {
      notifyService.showLoading();
      fetchDataByPosition();
    }
  }, [teacherForm?.filter_by]);

  const fetchDataByPosition = () => {
    getTeacherByPosition(teacherForm?.filter_by).then(() => {
      notifyService.closeSwal();
    });
  };

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
  };

  // Ensure that datas is an array before attempting to filter
  const searchData = Array.isArray(dataStore?.data)
    ? dataStore?.data.filter((data) =>
        data?.name?.toLowerCase().includes(searchInput.toLowerCase())
      )
    : [];

  const handleAdd = () => {
    router.push('/dashboard/teacher/create');
    setTeacherForm({
      ...teacherForm,
      id: '',
      name: '',
      date_of_birth: '',
      telp: '',
      email: '',
      nip: '',
      ijazah: '',
      role: '',
      period_work: '',
      gender: '',
      age: '',
      status: '',
      filter_by: '',
      public_id: '',
      imageUrl: '',
    });
  };

  return (
    <div
      className={`p-10 ${
        menu ? 'w-[88vw]' : 'w-[75vw]'
      } h-full flex flex-col gap-y-4 transition-all duration-700`}>
      <Header title="Data Guru" />
      <div className="w-full flex items-center justify-between mt-2">
        <h2 className="font-light uppercase">Data Guru / Pengajar</h2>
        <button
          onClick={handleAdd}
          className="px-2 py-2 bg-primary rounded-lg text-slate-700 lg:px-6">
          Tambah Data Guru
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
      <TableList resultSearchData={searchData} />
    </div>
  );
};

export default Navigation;
