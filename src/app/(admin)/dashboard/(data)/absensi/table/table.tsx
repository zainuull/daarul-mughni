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
import { deleteAbsensi, getAbsensi } from '@/services/api';
import { IAbsensiDataModel } from '@/model/model';
import useDataAbsensi from '../store/store.absensi';
import { useRouter } from 'next/navigation';
import { NotifyService } from '@/services/notify/notifyService';
import Swal from 'sweetalert2';
import useStoreDatas from '../store/store.datas';

const TableList = ({ resultSearchData }: { resultSearchData: any }) => {
  const [data, setData] = useState<IAbsensiDataModel[]>();
  const [status, setStatus] = useState(false);
  const [formAbsensi, setFormAbsensi] = useDataAbsensi();
  const router = useRouter();
  const [dataFiltered] = useStoreDatas();
  const notifyService = new NotifyService();
  const result = resultSearchData.length > 0 ? resultSearchData : dataFiltered?.absensi ?? data;

  useEffect(() => {
    notifyService.showLoading();
    fetchData();
  }, []);

  const fetchData = () => {
    getAbsensi().then((res) => {
      setData(res?.data);
      Swal.close();
    });
  };

  const handleStart = (id: string) => {
    if (id) {
      setStatus(!status);
    }
  };

  const handleDelete = async (id: string) => {
    notifyService.confirmationDelete().then(async (res) => {
      if (res) {
        await deleteAbsensi(id);
        const res = await getAbsensi();
        setData(res?.data);
      }
    });
  };

  const handleUpdate = async (data: IAbsensiDataModel) => {
    router.push(`/dashboard/absensi/update/${data?.id}`);
    setFormAbsensi({
      ...formAbsensi,
      levelName: data?.levelName,
      code_class: data?.code_class,
      className: data?.className,
      teacher: data?.teacher,
      lesson: data?.lesson,
      start_time: data?.start_time,
      end_time: data?.end_time,
    });
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
          <TableHeaderCell>Edit</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {result?.length === 0 ? (
          <div className="min-h-[300px] px-12">
            <div className=" mt-40">
              <h1 className="text-6xl font-bold">Data not found</h1>
            </div>
          </div>
        ) : (
          result?.map((data: IAbsensiDataModel) => (
            <TableRow key={data.id}>
              <TableCell>{data.code_class}</TableCell>
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
    </Table>
  );
};

export default TableList;
