'use client';
import { BsSearch } from 'react-icons/bs';
import TableList from './table/table';
import Link from 'next/link';
import DropdownFilterLevel from './add-data-absensi/component/dropdown/dropdown.filter.level';
import DropdownFilterClass from './add-data-absensi/component/dropdown/dropdown.filter.class';
import useStoreResultAbsensi from './store/store.datas.result.absensi';
import useDataAbsensi from './store/store.absensi';
import { useEffect } from 'react';
import { getAbsensiByClass } from '@/services/api';
import { BiChevronLeft } from 'react-icons/bi';
import useStatus from '../../store/store.status';

const DataAbsensi = () => {
  const [absensiForm] = useDataAbsensi();
  const [, setResult] = useStoreResultAbsensi();
  const [menu, setMenu] = useStatus();

  useEffect(() => {
    const fetchData = async () => {
      const res = await getAbsensiByClass(absensiForm?.filter_by_class);
      setResult(res?.data);
    };
    fetchData();
  }, [absensiForm?.filter_by_class]);

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="w-full">
      <div className="p-10 w-full h-full flex flex-col gap-y-4 ">
        <div onClick={handleMenu} className="flex items-center gap-x-2 cursor-pointer">
          <BiChevronLeft size={30} />
          <h1 className="text-2xl uppercase font-medium">Absensi</h1>
        </div>
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
