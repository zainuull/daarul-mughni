'use client';
import { BsSearch } from 'react-icons/bs';
import TableList from './table/table';
import Link from 'next/link';
import { DropdownFilterClass, DropdownFilterLevel } from './dropdown/index';
import { useEffect, useState } from 'react';
import { getStudent, getStudentByClass } from '@/services/api';
import useDataStudent from './store/store.student';
import Header from '../../components/header/header';
import useStoreDatas from './store/store.datas';
import { NotifyService } from '@/core/services/notify/notifyService';
import Swal from 'sweetalert2';
import useStatus from '../../store/store.status';
import { useRouter } from 'next/navigation';

const DataGuru = () => {
  const [studentForm, setStudentForm] = useDataStudent();
  const [datas, setDatas] = useStoreDatas();
  const [searchInput, setSearchInput] = useState('');
  const notifyService = new NotifyService();
  const [menu] = useStatus();
  const router = useRouter();

  useEffect(() => {
    notifyService.showLoading();
    if (studentForm?.filter_by_level) {
      fetchDataByLevel();
    }
    fetchData();
  }, [studentForm?.filter_by_class]);

  const fetchDataByLevel = () => {
    getStudentByClass(studentForm?.filter_by_class).then((res) => {
      setDatas(res?.data);
      Swal.close();
    });
  };

  const fetchData = () => {
    getStudent().then((res) => {
      setDatas(res?.data);
      Swal.close();
    });
  };

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
  };

  // Ensure that datas is an array before attempting to filter
  const resultSearchData = Array.isArray(datas)
    ? datas.filter((data) => data?.name?.toLowerCase().includes(searchInput.toLowerCase()))
    : [];

  const handleAddData = () => {
    router.push('/dashboard/siswa/add-data-siswa');
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
    });
  };

  return (
    <div className="w-full flex justify-end">
      <div
        className={`p-10 ${
          menu ? 'w-[1300px]' : 'w-3/4'
        } h-full flex flex-col gap-y-4 transition-all duration-700`}>
        <Header title="Data Siswa" />
        <div className="w-full flex items-center justify-between mt-2">
          <h2 className="font-light uppercase">Data Siswa</h2>
          <button
            onClick={handleAddData}
            className="px-6 py-2 bg-primary rounded-lg text-slate-700">
            Tambah Data Siswa
          </button>
        </div>
        <div className="w-full flex items-center gap-x-6">
          <div className="w-full flex items-center gap-x-2 px-3 py-2 rounded-xl border border-primary">
            <BsSearch />
            <input
              className="w-full outline-none"
              placeholder="Cari Data Siswa"
              value={searchInput}
              onChange={handleSearch}
            />
          </div>
          <DropdownFilterLevel />
          <DropdownFilterClass />
        </div>
        <TableList resultSearchData={resultSearchData} />
      </div>
    </div>
  );
};

export default DataGuru;
