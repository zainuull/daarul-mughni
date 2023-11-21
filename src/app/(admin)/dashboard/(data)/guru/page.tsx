'use client';
import { BsSearch } from 'react-icons/bs';
import TableList from './table/table';
import Link from 'next/link';
import DropdownFilter from './add-data-guru/component/dropdown/dropdown.filter';
import useDataTeacher from './store/store.teacher';
import { getTeacherByPosition } from '@/services/api';
import { useEffect } from 'react';
import useStoreDatas from './store/store.datas';

const DataGuru = () => {
  const [teacherForm] = useDataTeacher();
  const [, setDatas] = useStoreDatas();

  useEffect(() => {
    if (teacherForm?.positionName) {
      const fetchDataByPosition = async () => {
        if (teacherForm?.positionName) {
          const res = await getTeacherByPosition(teacherForm?.positionName);
          setDatas(res?.data);
        }
      };
      fetchDataByPosition();
    } else {
      setDatas({});
    }
  }, [teacherForm?.positionName]);

  return (
    <div className="w-full">
      <div className="p-10 w-full h-full flex flex-col gap-y-4 ">
        <h1 className="text-2xl uppercase font-medium">Data Guru</h1>
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
