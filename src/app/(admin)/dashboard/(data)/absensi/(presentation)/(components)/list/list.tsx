'use client';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Text,
} from '@tremor/react';
import { FaTrash } from 'react-icons/fa';
import { PiPencilLineLight } from 'react-icons/pi';
import Pagination from './pagination';
import { useEffect, useState } from 'react';
import { IUser } from '@/model/model';
import useDataAbsensi from '../../store/store.absensi';
import { useRouter } from 'next/navigation';
import { NotifyService, ToastifyService } from '@/core/services/notify/notifyService';
import useStoreDatas from '../../store/store.datas';
import ToastNotify from '@/core/services/notify/toast';
import { useSession } from 'next-auth/react';
import useViewModel from '../../vm/view.model';
import { HandleError } from '@/core/services/handleError/handleError';
import { IAbsensiDataModel } from '../../../domain/model/IModel';
import useResultFilter from '../../store/store.result.filter';

const TableList = ({ resultSearchData }: { resultSearchData: any }) => {
  const { getAbsensi, deleteAbsensi } = useViewModel();
  const { data } = useSession();
  const [status, setStatus] = useState(false);
  const [formAbsensi, setFormAbsensi] = useDataAbsensi();
  const router = useRouter();
  const [dataStore] = useStoreDatas();
  const [resutFilter] = useResultFilter();
  const notifyService = new NotifyService();
  const toastService = new ToastifyService();
  const result = resultSearchData.length ? resultSearchData : dataStore?.data || resutFilter?.data?.absensi;
  
  const user: IUser = data?.user;

  useEffect(() => {
    notifyService.showLoading();
    fetchData();
  }, []);

  const fetchData = () => {
    getAbsensi()
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
        deleteAbsensi(id)
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

  const handleStart = (id: string) => {
    if (id) {
      setStatus(!status);
    }
  };

  const handleUpdate = async (data: IAbsensiDataModel) => {
    router.push(`/dashboard/absensi/update/${data?.id}`);
    setFormAbsensi({
      ...formAbsensi,
      levelName: data?.levelName,
      classTypeName: data?.classTypeName,
      className: data?.className,
      teacher: data?.teacher,
      lesson: data?.lesson,
      start_time: data?.start_time,
      end_time: data?.end_time,
    });
  };

  const handleDetail = (id: string) => {
    router.push(`/dashboard/absensi/detail/${id}`);
  };

  return (
    <Table className="mt-5 min-h-[400px] relative pb-14">
      <TableHead>
        <TableRow>
          <TableHeaderCell>Kode Kelas</TableHeaderCell>
          <TableHeaderCell>Kelas</TableHeaderCell>
          <TableHeaderCell>Pengajar</TableHeaderCell>
          <TableHeaderCell>Jam Mulai - Selesai</TableHeaderCell>
          <TableHeaderCell>Nama Pelajaran</TableHeaderCell>
          <TableHeaderCell>Status</TableHeaderCell>
          {user?.role === 'administrator' && <TableHeaderCell>Edit</TableHeaderCell>}
        </TableRow>
      </TableHead>
      <TableBody>
        {resutFilter?.data?.absensi?.length === 0 ? (
          <div className="min-h-[300px] px-12">
            <div className=" mt-40">
              <h1 className="text-6xl font-bold">Data not found</h1>
            </div>
          </div>
        ) : (
          result &&
          result?.map((data: IAbsensiDataModel) => (
            <TableRow key={data.id}>
              <TableCell
                onClick={() => handleDetail(data?.id)}
                className="hover:font-bold transition-all cursor-pointer">
                {data.classTypeName}
              </TableCell>
              <TableCell>{data.className}</TableCell>
              <TableCell>{data.teacher}</TableCell>
              <TableCell className="flex datas-center gap-x-2">
                <Text>
                  {data.start_time} - {data?.end_time}
                </Text>
              </TableCell>
              <TableCell>{data.lesson}</TableCell>
              <TableCell>
                {status ? (
                  <button
                    onClick={() => handleStart(data?.id)}
                    className="w-[100px] py-1 bg-green-500 hover:bg-green-600 transition-all text-white rounded-md">
                    Mulai
                  </button>
                ) : (
                  <button
                    onClick={() => handleStart(data?.id)}
                    className="w-[100px] py-1 bg-red-500 hover:bg-red-600 transition-all text-white rounded-md">
                    Belum Mulai
                  </button>
                )}
              </TableCell>
              {user?.role === 'administrator' && (
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
              )}
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
