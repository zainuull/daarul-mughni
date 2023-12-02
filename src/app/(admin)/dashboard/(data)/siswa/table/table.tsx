'use client';
import { IStudentDataModel } from '@/model/model';
import { deleteStudent, getStudent } from '@/services/api';
import { Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow } from '@tremor/react';
import { useEffect, useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { PiPencilLineLight } from 'react-icons/pi';
import useDataStudent from '../store/store.student';
import { useRouter } from 'next/navigation';
import Pagination from './pagination';
import { NotifyService, ToastifyService } from '@/core/services/notify/notifyService';
import Swal from 'sweetalert2';
import useStoreDatas from '../store/store.datas';
import ToastNotify from '@/core/services/notify/toast';

const TableList = ({ resultSearchData }: { resultSearchData: any }) => {
  const [studentForm, setStudentForm] = useDataStudent();
  const router = useRouter();
  const [dataFiltered, setDatas] = useStoreDatas();
  const notifyService = new NotifyService();
  const toastService = new ToastifyService();
  const result = resultSearchData?.length > 0 ? resultSearchData : dataFiltered?.students;

  useEffect(() => {
    notifyService.showLoading();
  }, []);

  const fetchData = () => {
    getStudent().then((res) => {
      setDatas(res?.data);
      Swal.close();
    });
  };

  const handleDelete = (id: string) => {
    notifyService.confirmationDelete().then((res) => {
      if (res) {
        deleteStudent(id).then(() => {
          toastService.successDelete();
          fetchData();
        });
      }
    });
  };

  const handleUpdate = async (data: IStudentDataModel) => {
    router.push(`/dashboard/siswa/update/${data?.id}`);
    setStudentForm({
      ...studentForm,
      name: data?.name,
      date_of_birth: data?.date_of_birth,
      ijazah: data?.ijazah,
      gender: data?.gender,
      nisn: data?.nisn,
      guardian_name: data?.guardian_name,
      guardian_status: data?.guardian_status,
      guardian_telp: data?.guardian_telp,
      status_payment: data?.status_payment,
      address: data?.address,
      className: data?.className,
      levelName: data?.levelName,
      classTypeName: data?.classTypeName,
    });
  };

  const handleDetail = (id: string) => {
    router.push(`/dashboard/siswa/detail/${id}`);
  };

  return (
    <Table className="mt-5 min-h-[400px] relative pb-14">
      <TableHead>
        <TableRow>
          <TableHeaderCell>Nama Siswa</TableHeaderCell>
          <TableHeaderCell>Kelas</TableHeaderCell>
          <TableHeaderCell>NISN</TableHeaderCell>
          <TableHeaderCell>Status Pembayaran</TableHeaderCell>
          <TableHeaderCell>Edit</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {result?.length === 0 ? (
          <div className="min-h-[300px] px-12">
            <div className=" mt-40">
              <h1 className="text-6xl font-bold">Data tidak ditemukan</h1>
            </div>
          </div>
        ) : (
          result?.map((data: IStudentDataModel) => (
            <TableRow key={data.id}>
              <TableCell
                onClick={() => handleDetail(data?.id)}
                className="hover:font-bold transition-all cursor-pointer">
                {data.name}
              </TableCell>
              <TableCell>{data.classTypeName}</TableCell>
              <TableCell>{data.nisn}</TableCell>
              <TableCell>
                {data?.status_payment === 'Lunas' ? (
                  <button className="w-[100px] py-1 bg-green-500 hover:bg-green-600 transition-all text-white rounded-md">
                    Lunas
                  </button>
                ) : (
                  <button className="w-[100px] py-1 bg-red-500 hover:bg-red-600 transition-all text-white rounded-md">
                    Tertunda
                  </button>
                )}
              </TableCell>
              <TableCell className="py-4">
                <div className="flex gap-x-4 items-center">
                  <button onClick={() => handleUpdate(data)}>
                    <PiPencilLineLight />
                  </button>
                  <button onClick={() => handleDelete(data?.id)}>
                    <FaTrash className="text-red-400" />
                  </button>
                </div>
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
      <nav className="absolute right-0 bottom-0">
        <Pagination />
      </nav>
      <ToastNotify />
    </Table>
  );
};

export default TableList;
