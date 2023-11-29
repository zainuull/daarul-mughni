'use client';
import { BsSearch } from 'react-icons/bs';
import TableList from './table/table';
import Link from 'next/link';
import DropdownFilter from './add-data-guru/component/dropdown/dropdown.filter';
import useDataTeacher from './store/store.teacher';
import { getTeacherByPosition, getTeachers } from '@/services/api';
import { useEffect, useState } from 'react';
import useStoreDatas from './store/store.datas';
import Header from '../../components/header/header';
import { NotifyService } from '@/services/notify/notifyService';
import Swal from 'sweetalert2';
import useStatus from '../../store/store.status';

const DataGuru = () => {
  const [teacherForm] = useDataTeacher();
  const [datas, setDatas] = useStoreDatas();
  const [searchInput, setSearchInput] = useState('');
  const notifyService = new NotifyService();
  const [menu] = useStatus();

  useEffect(() => {
    notifyService.showLoading();
    if (teacherForm?.filter_by) {
      fetchDataByPosition();
    }
    fetchData();
  }, [teacherForm?.filter_by]);

  const fetchDataByPosition = async () => {
    getTeacherByPosition(teacherForm?.filter_by).then((res) => {
      setDatas(res?.data);
      Swal.close();
    });
  };

  const fetchData = () => {
    getTeachers().then((res) => {
      setDatas(res?.data);
      Swal.close();
    });
  };

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
  };

  // Ensure that datas is an array before attempting to filter
  const filteredDatas = Array.isArray(datas)
    ? datas.filter((data) => data?.name?.toLowerCase().includes(searchInput.toLowerCase()))
    : [];

  return (
    <div className="w-full flex justify-end">
      <div
        className={`p-10 ${
          menu ? 'w-[1100px]' : 'w-3/4'
        } h-full flex flex-col gap-y-4 transition-all duration-700`}>
        <Header title="Data Guru" />
        <div className="w-full flex items-center justify-between mt-2">
          <h2 className="font-light uppercase">Data Guru / Pengajar</h2>
          <Link
            href={'/dashboard/guru/add-data-guru'}
            className="px-6 py-2 bg-primary rounded-lg text-slate-700">
            Tambah Data Guru
          </Link>
        </div>
        <div className="w-full flex items-center gap-x-6">
          <div className="w-4/5 flex items-center gap-x-2 px-3 py-2 rounded-xl border border-primary">
            <BsSearch />
            <input
              className="w-full outline-none"
              placeholder="Cari Data Guru"
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

export default DataGuru;
