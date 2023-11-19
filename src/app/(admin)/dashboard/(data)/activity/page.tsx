import { BsSearch } from 'react-icons/bs';
import TableList from './table/table';
import Link from 'next/link';
import React from 'react';

const DataActivity = () => {
  return (
    <div className="w-full">
      <div className="p-10 w-full h-full flex flex-col gap-y-4 ">
        <h1 className="text-2xl uppercase font-medium">Laporan Kegiatan</h1>
        <div className="w-full flex items-center justify-between mt-2">
          <h2 className="font-light uppercase">Daftar Kegiatan</h2>
          <Link
            href={'/dashboard/activity/add-data-activity'}
            className="px-6 py-2 bg-primary rounded-lg text-slate-700">
            Tambah Data Kegiatan
          </Link>
        </div>
        <div className="w-full flex items-center gap-x-4 px-4 py-3 rounded-xl border border-primary">
          <BsSearch />
          <input className="w-full outline-none" placeholder="Cari Data Kegiatan" />
        </div>
        <TableList />
      </div>
    </div>
  );
};

export default DataActivity;
