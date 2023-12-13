'use client';
import { BsSearch } from 'react-icons/bs';
import { DropdownFilterClass, DropdownFilterLevel } from '../dropdown/index';
import { useEffect, useState } from 'react';
import useDataStudent from '../../store/store.student';
import Header from '../../../../../components/header/header';
import useStoreDatas from '../../store/store.datas';
import { NotifyService } from '@/core/services/notify/notifyService';
import useStatus from '../../../../../store/store.status';
import { useRouter } from 'next/navigation';
import useViewModel from '../../vm/view.model';
import { HandleError } from '@/core/services/handleError/handleError';
import dynamic from 'next/dynamic';
const TableList = dynamic(() => import('../list/list'));

const Navigation = () => {
  const { getStudentByClass } = useViewModel();
  const [studentForm, setStudentForm] = useDataStudent();
  const [dataStore] = useStoreDatas();
  const [searchInput, setSearchInput] = useState('');
  const notifyService = new NotifyService();
  const [menu] = useStatus();
  const router = useRouter();

  useEffect(() => {
    if (studentForm?.filter_by_level) {
      notifyService.showLoading();
      fetchDataByLevel();
    }
  }, [studentForm?.filter_by_class]);

  const fetchDataByLevel = () => {
    getStudentByClass(studentForm?.filter_by_class)
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
        data?.name?.toLowerCase().includes(searchInput.toLowerCase())
      )
    : [];

  const handleAddData = () => {
    router.push('/dashboard/student/create');
    setStudentForm({
      ...studentForm,
      id: '',
      name: '',
      date_of_birth: '',
      ijazah: '',
      gender: '',
      nisn: '',
      guardian_name: '',
      guardian_status: '',
      guardian_telp: '',
      guardian_email: '',
      status_payment: '',
      address: '',
      className: '',
      classTypeName: '',
      levelName: '',
      filter_by_level: '',
      filter_by_class: '',
      public_id: '',
      image: '',
    });
  };
  return (
    <div
      className={`p-10 ${
        menu ? 'w-[88vw]' : 'w-[75vw]'
      } h-full flex flex-col gap-y-4 transition-all duration-700`}>
      <Header title="Data Siswa" />
      <div className="w-full flex items-center justify-between mt-2">
        <h2 className="font-light uppercase">Data Siswa</h2>
        <button
          onClick={handleAddData}
          className="px-2 py-2 bg-primary rounded-lg text-slate-700 lg:px-6">
          Tambah Data Siswa
        </button>
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
