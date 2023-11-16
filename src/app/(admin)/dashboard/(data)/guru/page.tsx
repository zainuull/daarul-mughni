import { BsSearch } from 'react-icons/bs';
import TableList from './table/table';
import Link from 'next/link';

const DataGuru = () => {
  return (
    <div className="w-4/5">
      <div className="p-20 w-full h-full flex flex-col gap-y-4 ">
        <h1 className="text-2xl uppercase font-medium">Data Guru</h1>
        <div className="w-full flex items-center justify-between mt-2">
          <h2 className="font-light uppercase">Data Guru / Pengajar</h2>
          <Link href={'/dashboard/guru/add-data-guru'} className="px-6 py-2 bg-primary rounded-lg text-slate-700">
            Tambah Data Guru
          </Link>
        </div>
        <div className="w-full flex items-center gap-x-4 px-4 py-3 rounded-xl border border-primary">
          <BsSearch />
          <input className="w-full outline-none" placeholder="Cari Data Guru" />
        </div>
        <TableList />
      </div>
    </div>
  );
};

export default DataGuru;
