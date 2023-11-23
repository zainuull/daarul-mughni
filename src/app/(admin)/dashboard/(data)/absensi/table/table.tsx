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
import { IAbsensiDataModel } from '@/model/event.model';
import useDataAbsensi from '../store/store.absensi';
import { useRouter } from 'next/navigation';

const TableList = () => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState(false);
  const [formAbsensi, setFormAbsensi] = useDataAbsensi();
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const res = await getAbsensi();
      setData(res?.data);
    };
    fetchData();
  }, []);

  const handleStart = (id: string) => {
    if (id) {
      setStatus(!status);
    }
  };

  const handleDelete = async (id: string) => {
    await deleteAbsensi(id);
    const res = await getAbsensi();
    setData(res?.data);
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
    <div>
      <Table className="mt-5">
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
          {data?.map((data) => (
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
          ))}
        </TableBody>
      </Table>
      <nav className="my-6 px-4 absolute right-0 bottom-8">
        <Pagination />
      </nav>
    </div>
  );
};

export default TableList;
