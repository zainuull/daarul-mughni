'use client';
import Header from '@/app/(admin)/dashboard/components/header/header';
import useStatus from '@/app/(admin)/dashboard/store/store.status';
import { BsSearch } from 'react-icons/bs';
import { NotifyService } from '@/core/services/notify/notifyService';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import useViewModel from '../../../vm/view.model';
import { HandleError } from '@/core/services/handleError/handleError';
import TableList from '../(components)/list/list';
import About from '../(components)/about/about';

const DetailAbsensi = ({ params }: { params: { id: string } }) => {
  const { getAbsensiById, detailAbsensi, getStudentsByClassTypeName, dataStudents } =
    useViewModel();
  const [searchInput, setSearchInput] = useState('');
  const id = params?.id;
  const notifyService = new NotifyService();
  const [menu] = useStatus();
  const lesson = detailAbsensi?.lesson;

  useEffect(() => {
    notifyService.showLoading();
    fetchData();
  }, [detailAbsensi?.classTypeName]);

  const fetchData = () => {
    getAbsensiById(id)
      .then(() => {
        Swal.close();
        getStudentsByClassTypeName(detailAbsensi?.classTypeName).catch((err) => {
          HandleError(err);
        });
      })
      .catch((err) => {
        HandleError(err);
      });
  };

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
  };

  // Ensure that datas is an array before attempting to filter
  const resultSearchData = Array.isArray(dataStudents)
    ? dataStudents.filter((data) => data?.name?.toLowerCase().includes(searchInput.toLowerCase()))
    : [];

  return (
    <div className="w-full flex justify-end">
      <div
        className={`p-10 ${
          menu ? 'w-[88vw]' : 'w-[75vw]'
        } h-full flex flex-col gap-y-4 transition-all duration-700`}>
        <About detailAbsensi={detailAbsensi} />
        <div className="w-full flex items-center justify-between ">
          <Header title="Data Absensi" />
          <div className="w-1/3 flex items-center gap-x-2 px-3 py-2 rounded-xl border border-primary">
            <BsSearch />
            <input
              className="w-[70vw] outline-none"
              placeholder="Cari Siswa"
              value={searchInput}
              onChange={handleSearch}
            />
          </div>
        </div>
        <TableList students={dataStudents} lesson={lesson} resultSearchData={resultSearchData} />
      </div>
    </div>
  );
};

export default DetailAbsensi;
