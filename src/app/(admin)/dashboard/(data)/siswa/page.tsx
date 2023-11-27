'use client';
import { BsSearch } from 'react-icons/bs';
import TableList from './table/table';
import Link from 'next/link';
import DropdownFilterClass from './add-data-siswa/component/dropdown/dropdown.filter.class';
import { useEffect, useState } from 'react';
import { getStudent, getStudentByClass } from '@/services/api';
import useDataStudent from './store/store.student';
import DropdownFilterLevel from './add-data-siswa/component/dropdown/dropdown.filter.level';
import useStoreResultStudent from './store/store.datas.result.student';
import Header from '../../components/header/header';
import useStoreDatas from './store/store.datas';

const DataGuru = () => {
  const [studentForm] = useDataStudent();
  const [, setResult] = useStoreResultStudent();
  const [datas, setDatas] = useStoreDatas();
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    if (studentForm?.filter_by_level) {
      const fetchData = async () => {
        const res = await getStudentByClass(studentForm?.filter_by_class);
        setResult(res?.data);
      };
      fetchData();
    }
  }, [studentForm?.filter_by_class]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getStudent();
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
        <Header title="Data Siswa" />
        <div className="w-full flex items-center justify-between mt-2">
          <h2 className="font-light uppercase">Data Siswa</h2>
          <Link
            href={'/dashboard/siswa/add-data-siswa'}
            className="px-6 py-2 bg-primary rounded-lg text-slate-700">
            Tambah Data Siswa
          </Link>
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
        <TableList resultSearchData={filteredDatas} />
      </div>
    </div>
  );
};

export default DataGuru;
