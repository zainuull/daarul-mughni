'use client';
import { BsSearch } from 'react-icons/bs';
import TableList from './table/table';
import Link from 'next/link';
import DropdownFilterClass from './add-data-siswa/component/dropdown/dropdown.filter';
import useStoreDatas from './store/store.datas';
import { useEffect } from 'react';
import { getClassByLevel, getStudentByClass } from '@/services/api';
import useDataStudent from './store/store.student';
import DropdownFilterLevel from './add-data-siswa/component/dropdown/dropdown.filter.level';
import useStoreResultStudent from './store/store.datas.result.student';

const DataGuru = () => {
  const [studentForm] = useDataStudent();
  const [, setDatas] = useStoreDatas();
  const [, setResult] = useStoreResultStudent();

  useEffect(() => {
    if (studentForm?.filter_by_level) {
      const fetchData = async () => {
        const res = await getStudentByClass(studentForm?.filter_by_class);
        setResult(res?.data);
      };
      fetchData();
    }
    const fetchData = async () => {
      const res = await getClassByLevel(studentForm?.filter_by_level);
      setDatas(res?.data?.class);
    };
    fetchData();
  }, [studentForm]);

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
          <div className="w-full flex items-center gap-x-2 px-3 py-2 rounded-xl border border-primary">
            <BsSearch />
            <input className="w-full outline-none" placeholder="Cari Data Siswa" />
          </div>
          <DropdownFilterLevel />
          <DropdownFilterClass />
        </div>
        <TableList />
      </div>
    </div>
  );
};

export default DataGuru;
