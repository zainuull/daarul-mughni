'use client';
import { BsSearch } from 'react-icons/bs';
import TableList from './table/table';
import Link from 'next/link';
import DropdownFilterClass from './add-data-siswa/component/dropdown/dropdown.filter.class';
import { useEffect } from 'react';
import { getStudentByClass } from '@/services/api';
import useDataStudent from './store/store.student';
import DropdownFilterLevel from './add-data-siswa/component/dropdown/dropdown.filter.level';
import useStoreResultStudent from './store/store.datas.result.student';
import { BiChevronLeft } from 'react-icons/bi';
import useStatus from '../../store/store.status';

const DataGuru = () => {
  const [studentForm] = useDataStudent();
  const [, setResult] = useStoreResultStudent();
  const [menu, setMenu] = useStatus();

  useEffect(() => {
    if (studentForm?.filter_by_level) {
      const fetchData = async () => {
        const res = await getStudentByClass(studentForm?.filter_by_class);
        setResult(res?.data);
      };
      fetchData();
    }
  }, [studentForm?.filter_by_class]);

    const handleMenu = () => {
      setMenu(!menu);
    };


  return (
    <div className="w-full">
      <div className="p-10 w-full h-full flex flex-col gap-y-4 ">
        <div onClick={handleMenu} className="flex items-center gap-x-2 cursor-pointer">
          <BiChevronLeft size={30} />
          <h1 className="text-2xl uppercase font-medium">Data Siswa</h1>
        </div>
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
