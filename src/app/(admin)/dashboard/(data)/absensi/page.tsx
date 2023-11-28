'use client';
import { BsSearch } from 'react-icons/bs';
import TableList from './table/table';
import Link from 'next/link';
import DropdownFilterLevel from './add-data-absensi/component/dropdown/dropdown.filter.level';
import DropdownFilterClass from './add-data-absensi/component/dropdown/dropdown.filter.class';
import useDataAbsensi from './store/store.absensi';
import { useEffect, useState } from 'react';
import { getAbsensi, getAbsensiByClass } from '@/services/api';
import Header from '../../components/header/header';
import useStoreDatas from './store/store.datas';
import { useSession } from 'next-auth/react';
import { IUser } from '@/model/user';
import { NotifyService } from '@/services/notify/notifyService';
import Swal from 'sweetalert2';

const DataAbsensi = () => {
  const [absensiForm] = useDataAbsensi();
  const [datas, setDatas] = useStoreDatas();
  const [searchInput, setSearchInput] = useState('');
  const { data } = useSession();
  const user: IUser = data?.user;
  const notifyServices = new NotifyService();

  useEffect(() => {
    notifyServices.showLoading();
    if (absensiForm?.filter_by_class) {
      fetchDataByClass();
    }
    fetchData();
  }, [absensiForm?.filter_by_class]);

  const fetchDataByClass = () => {
    getAbsensiByClass(absensiForm?.filter_by_class).then((res) => {
      setDatas(res?.data);
      Swal.close();
    });
  };

  const fetchData = () => {
    getAbsensi().then((res) => {
      setDatas(res?.data);
      Swal.close();
    });
  };

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
  };

  // Ensure that datas is an array before attempting to filter
  const filteredDatas = Array.isArray(datas)
    ? datas.filter((data) => data?.code_class?.toLowerCase().includes(searchInput.toLowerCase()))
    : [];

  return (
    <div className="w-full">
      <div className="p-10 w-full h-full flex flex-col gap-y-4 ">
        <Header title="Absensi" />
        <div className="w-full flex items-center justify-between mt-2">
          <h2 className="font-light uppercase">Sesi Absensi</h2>
          {user?.role === 'administrator' && (
            <Link
              href={'/dashboard/absensi/add-data-absensi'}
              className="px-6 py-2 bg-primary rounded-lg text-slate-700">
              Tambah Data Absensi
            </Link>
          )}
        </div>
        <div className="w-full flex items-center gap-x-6">
          <div className="w-full flex items-center gap-x-2 px-3 py-2 rounded-xl border border-primary">
            <BsSearch />
            <input
              className="w-full outline-none"
              placeholder="Cari Kode Kelas"
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

export default DataAbsensi;
