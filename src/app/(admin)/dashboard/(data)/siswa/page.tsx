'use client';
import { BsSearch } from 'react-icons/bs';
import TableList from './table/table';
import Link from 'next/link';
import DropdownFilter from './add-data-siswa/component/dropdown/dropdown.filter';
import useStoreDatas from './store/store.datas';
import { useEffect } from 'react';
import { getStudentByClass } from '@/services/api';
import useDataStudent from './store/store.student';

const DataGuru = () => {
  const [studentForm] = useDataStudent();
  const [,setDatas] = useStoreDatas();

  useEffect(() => {
    const fetchData = async () => {
      const res = await getStudentByClass(studentForm?.className);
      setDatas(res?.data);
    };
    fetchData();
  }, [studentForm?.className]);

  return (
    <div className="w-full">
      <div className="p-10 w-full h-full flex flex-col gap-y-4 ">
        <h1 className="text-2xl uppercase font-medium">Data Siswa</h1>
        <div className="w-full flex items-center justify-between mt-2">
          <h2 className="font-light uppercase">Data Siswa</h2>
          <Link
            href={'/dashboard/siswa/add-data-siswa'}
            className="px-6 py-2 bg-primary rounded-lg text-slate-700">
            Tambah Data Siswa
          </Link>
        </div>
        <div className="w-full flex items-center gap-x-6">
          <div className="w-4/5 flex items-center gap-x-2 px-3 py-2 rounded-xl border border-primary">
            <BsSearch />
            <input className="w-full outline-none" placeholder="Cari Data Guru" />
          </div>
          <DropdownFilter />
        </div>
        <TableList />
      </div>
    </div>
  );
};

export default DataGuru;
