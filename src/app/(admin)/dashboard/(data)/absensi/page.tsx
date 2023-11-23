'use client';
import { BsSearch } from 'react-icons/bs';
import TableList from './table/table';
import Link from 'next/link';
import DropdownFilterLevel from './add-data-absensi/component/dropdown/dropdown.filter.level';
import DropdownFilterClass from './add-data-absensi/component/dropdown/dropdown.filter';
import useStoreDatas from './store/store.datas';
import useStoreResultAbsensi from './store/store.datas.result.absensi';
import useDataAbsensi from './store/store.absensi';
import { useEffect } from 'react';
import { getAbsensiByClass, getClassByLevel } from '@/services/api';

const DataAbsensi = () => {
  const [absensiForm] = useDataAbsensi();
  const [, setDatas] = useStoreDatas();
  const [, setResult] = useStoreResultAbsensi();

  useEffect(() => {
    if (absensiForm?.filter_by_level) {
      const fetchData = async () => {
        const res = await getAbsensiByClass(absensiForm?.filter_by_class);
        setResult(res?.data);
      };
      fetchData();
    }
    const fetchData = async () => {
      const res = await getClassByLevel(absensiForm?.filter_by_level);
      setDatas(res?.data?.class);
    };
    fetchData();
  }, [absensiForm]);

  return (
    <div className="w-full">
      <div className="p-10 w-full h-full flex flex-col gap-y-4 ">
        <h1 className="text-2xl uppercase font-medium">Absensi</h1>
        <div className="w-full flex items-center justify-between mt-2">
          <h2 className="font-light uppercase">Sesi Absensi</h2>
          <Link
            href={'/dashboard/absensi/add-data-absensi'}
            className="px-6 py-2 bg-primary rounded-lg text-slate-700">
            Tambah Data Absensi
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

export default DataAbsensi;
