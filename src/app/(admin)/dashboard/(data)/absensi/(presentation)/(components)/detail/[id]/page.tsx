'use client';
import { Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow } from '@tremor/react';
import Header from '@/app/(admin)/dashboard/components/header/header';
import useStatus from '@/app/(admin)/dashboard/store/store.status';
import { BsSearch } from 'react-icons/bs';
import { NotifyService } from '@/core/services/notify/notifyService';
import { useEffect } from 'react';
import Swal from 'sweetalert2';
import ToastNotify from '@/core/services/notify/toast';
import useViewModel from '../../../vm/view.model';
import { HandleError } from '@/core/services/handleError/handleError';
import useStoreDatas from '../../../store/store.datas';
import { IStudentDataModel } from '@/app/(admin)/dashboard/(data)/student/domain/model/IModel';

const DetailAbsensi = ({ params }: { params: { id: string } }) => {
  const { getAbsensiById, detailAbsensi } = useViewModel();
  const id = params?.id;
  const notifyService = new NotifyService();
  const [menu] = useStatus();
  const students = detailAbsensi?.students;

  useEffect(() => {
    notifyService.showLoading();
    fetchData();
  }, []);

  const fetchData = () => {
    getAbsensiById(id)
      .then(() => {
        Swal.close();
      })
      .catch((err) => {
        HandleError(err);
      });
  };

  return (
    <div className="w-full flex justify-end">
      <div
        className={`p-10 ${
          menu ? 'w-[1300px]' : 'w-3/4'
        } h-full flex flex-col gap-y-4 transition-all duration-700`}>
        <div className="w-full flex items-center justify-between ">
          <Header title="Detail Data Absensi" />
          <div className="w-1/3 flex items-center gap-x-2 px-3 py-2 rounded-xl border border-primary">
            <BsSearch />
            <input className="w-full outline-none" placeholder="Cari Siswa" />
          </div>
        </div>
        <Table className="mt-5 min-h-[400px] relative pb-14">
          <TableHead>
            <TableRow>
              <TableHeaderCell>Nama Siswa</TableHeaderCell>
              <TableHeaderCell>NISN</TableHeaderCell>
              <TableHeaderCell>Status</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students?.length === 0 ? (
              <div className="min-h-[300px] px-12">
                <div className=" mt-40">
                  <h1 className="text-6xl font-bold">Data not found</h1>
                </div>
              </div>
            ) : (
              students &&
              students?.map((data: IStudentDataModel) => (
                <TableRow key={data.id}>
                  <TableCell>{data.name}</TableCell>
                  <TableCell>{data.nisn}</TableCell>
                  <TableCell>
                    <button className="w-[100px] py-1 bg-red-500 hover:bg-red-600 transition-all text-white rounded-md">
                      Tidak Hadir
                    </button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
          <ToastNotify />
        </Table>
      </div>
    </div>
  );
};

export default DetailAbsensi;
