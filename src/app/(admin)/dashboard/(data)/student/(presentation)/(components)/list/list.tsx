'use client';
import { Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow } from '@tremor/react';
import { useEffect } from 'react';
import { FaTrash } from 'react-icons/fa';
import { PiPencilLineLight } from 'react-icons/pi';
import useDataStudent from '../../store/store.student';
import { useRouter } from 'next/navigation';
import Pagination from './pagination';
import { NotifyService, ToastifyService } from '@/core/services/notify/notifyService';
import useStoreDatas from '../../store/store.datas';
import ToastNotify from '@/core/services/notify/toast';
import useViewModel from '../../vm/view.model';
import { HandleError } from '@/core/services/handleError/handleError';
import useResultFilter from '../../store/store.result.filter';
import { IStudentDataModel } from '../../../domain/model/IModel';

const TableList = ({ resultSearchData }: { resultSearchData: any }) => {
  const { getStudents, deleteStudent } = useViewModel();
  const [dataStore] = useStoreDatas();
  const [resultFilter] = useResultFilter();
  const [studentForm, setStudentForm] = useDataStudent();
  const router = useRouter();
  const notifyService = new NotifyService();
  const toastService = new ToastifyService();
  const result = resultSearchData?.length
    ? resultSearchData
    : dataStore?.data || resultFilter?.data?.students;

  useEffect(() => {
    notifyService.showLoading();
    fetchData();
  }, []);

  const fetchData = () => {
    getStudents()
      .then(() => {
        notifyService.closeSwal();
      })
      .catch((err) => {
        HandleError(err);
      });
  };

  const handleDelete = (id: string) => {
    notifyService.confirmationDelete().then((res) => {
      if (res) {
        deleteStudent(id)
          .then(() => {
            toastService.successDelete();
            fetchData();
          })
          .catch((err) => {
            HandleError(err);
          });
      }
    });
  };

  const handleUpdate = async (data: IStudentDataModel) => {
    router.push(`/dashboard/student/update/${data?.id}`);
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
      image: data?.image,
    });
  };

  const handleDetail = (id: string) => {
    router.push(`/dashboard/student/detail/${id}`);
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
        {resultFilter?.data?.students?.length === 0 ? (
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
