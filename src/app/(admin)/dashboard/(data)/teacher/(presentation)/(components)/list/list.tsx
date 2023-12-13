'use client';
import { Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow } from '@tremor/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { FaTrash } from 'react-icons/fa';
import { PiPencilLineLight } from 'react-icons/pi';
import useDataTeacher from '../../store/store.teacher';
import useStoreDatas from '../../store/store.datas';
import Pagination from './pagination';
import { NotifyService, ToastifyService } from '@/core/services/notify/notifyService';
import ToastNotify from '@/core/services/notify/toast';
import useViewModel from '../../vm/view-model';
import { HandleError } from '@/core/services/handleError/handleError';
import { ITeacherDataModel } from '../../../domain/model/IModel';
import useResultFilter from '../../store/store.result.filter';

const TableList = ({ resultSearchData }: { resultSearchData: any }) => {
  const { getTeachers, deleteTeacher } = useViewModel();
  const router = useRouter();
  const [teacherForm, setTeacherForm] = useDataTeacher();
  const [dataStore] = useStoreDatas();
  const [resultFilter] = useResultFilter();
  const notifyService = new NotifyService();
  const toastService = new ToastifyService();
  const result = resultSearchData?.length
    ? resultSearchData
    : dataStore?.data || resultFilter?.data?.teachers;

  //can get data every window refreshing
  useEffect(() => {
    notifyService.showLoading();
    fetchData();
  }, []);

  const fetchData = () => {
    getTeachers()
      .then(() => notifyService.closeSwal())
      .catch((err) => {
        HandleError(err);
      });
  };

  const handleDelete = (id: string) => {
    notifyService.confirmationDelete().then((res) => {
      if (res) {
        toastService.successDelete();
        deleteTeacher(id)
          .then(() => fetchData())
          .catch((err) => HandleError(err));
      }
    });
  };

  const handleUpdate = (data: ITeacherDataModel) => {
    router.push(`/dashboard/teacher/update/${data?.id}`);
    setTeacherForm({
      ...teacherForm,
      name: data?.name,
      date_of_birth: data?.date_of_birth,
      telp: data?.telp,
      email: data?.email,
      nip: data?.nip,
      ijazah: data?.ijazah,
      role: data?.role,
      period_work: data?.period_work,
      gender: data?.gender,
      age: data?.age,
      status: data?.status,
      imageUrl: data?.imageUrl,
    });
  };

  const handleDetail = (id: string) => {
    router.push(`/dashboard/teacher/detail/${id}`);
  };

  return (
    <Table className="mt-5 min-h-[400px] relative pb-14">
      <TableHead>
        <TableRow>
          <TableHeaderCell>Nama Guru</TableHeaderCell>
          <TableHeaderCell>Jabatan</TableHeaderCell>
          <TableHeaderCell>NIP</TableHeaderCell>
          <TableHeaderCell>Status</TableHeaderCell>
          <TableHeaderCell>Edit</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {resultFilter?.data?.teachers?.length === 0 ? (
          <div className="min-h-[300px] px-12">
            <div className=" mt-40">
              <h1 className="text-6xl font-bold">Data tidak ditemukan</h1>
            </div>
          </div>
        ) : (
          result?.map((data: ITeacherDataModel) => (
            <TableRow key={data.id}>
              <TableCell
                onClick={() => handleDetail(data?.id)}
                className="hover:font-bold transition-all cursor-pointer">
                {data.name}
              </TableCell>
              <TableCell>{data.role}</TableCell>
              <TableCell>{data.nip}</TableCell>
              <TableCell>
                {data?.status == 'Aktif' ? (
                  <button className="w-[80px] lg:w-[100px] py-1 bg-green-500 hover:bg-green-600 transition-all text-white rounded-md">
                    Aktif
                  </button>
                ) : (
                  <button className="w-[80px] lg:w-[100px] py-1 bg-red-500 hover:bg-red-600 transition-all text-white rounded-md">
                    Pending
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
