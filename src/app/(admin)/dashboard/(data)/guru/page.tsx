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

const DataGuru = () => {
  const [teacherForm] = useDataTeacher();
  const [datas, setDatas] = useStoreDatas();
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    const fetchDataByPosition = async () => {
      const res = await getTeacherByPosition(teacherForm?.filter_by);
      setDatas(res?.data);
    };
    fetchDataByPosition();
  }, [teacherForm?.filter_by]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getTeachers();
      setDatas(res?.data);
    };
    fetchData();
  }, []);

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
  };

  // Ensure that datas is an array before attempting to filter
  const filteredDatas = Array.isArray(datas)
    ? datas.filter((data) => data?.name?.toLowerCase().includes(searchInput.toLowerCase()))
    : [];

  return (
    <div className="w-full">
      <div className="p-10 w-full h-full flex flex-col gap-y-4 ">
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
