'use client';
import { BsSearch } from 'react-icons/bs';
import TableList from './table/table';
import Link from 'next/link';

const DataTugas = () => {

  return (
    <div className="w-full">
      <div className="p-10 w-full h-full flex flex-col gap-y-4 ">
        <h1 className="text-2xl uppercase font-medium">Data Product</h1>
        <div className="w-full flex items-center justify-between mt-2">
          <h2 className="font-light uppercase">List Product Terjual</h2>
          <Link
            href={'/dashboard/tugas/input-data'}
            className="px-6 py-2 bg-primary rounded-lg text-slate-700">
            Input Product
          </Link>
        </div>
        <div className="w-full flex items-center gap-x-6">
          <div className="w-4/5 flex items-center gap-x-2 px-3 py-2 rounded-xl border border-primary">
            <BsSearch />
            <input className="w-full outline-none" placeholder="Cari Data Guru" />
          </div>
        </div>
        <TableList />
      </div>
    </div>
  );
};

export default DataTugas;
