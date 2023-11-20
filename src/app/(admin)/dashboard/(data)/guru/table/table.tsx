'use client';
import { ITeacherDataModel } from '@/model/event.model';
import { deleteTeacher, getTeachers } from '@/services/api';
import { Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow } from '@tremor/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { PiPencilLineLight } from 'react-icons/pi';
import useDataTeacher from '../store/store.teacher';

const TableList = () => {
  const [datas, setDatas] = useState<ITeacherDataModel[]>();
  const router = useRouter();
  const [teacherForm, setTeacherForm] = useDataTeacher();

  useEffect(() => {
    const fetchData = async () => {
      const res = await getTeachers();
      setDatas(res?.data);
    };
    fetchData();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await deleteTeacher(id);
      const fetchData = await getTeachers();
      setDatas(fetchData?.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = (data: ITeacherDataModel) => {
    router.push(`/dashboard/guru/update/${data?.id}`);
    setTeacherForm({
      ...teacherForm,
      name: data?.name,
      date_of_birth: data?.date_of_birth,
      telp: data?.telp,
      email: data?.email,
      nip: data?.nip,
      ijazah: data?.ijazah,
      level: data?.level,
      period_work: data?.period_work,
      gender: data?.gender,
      age: data?.age,
      status: data?.status,
    });
  };

  return (
    <Table className="mt-5">
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
        {datas &&
          datas?.map((data) => (
            <TableRow key={data.id}>
              <TableCell>{data.name}</TableCell>
              <TableCell>{data.level}</TableCell>
              <TableCell>{data.nip}</TableCell>
              <TableCell>
                {data?.status == 'Aktif' ? (
                  <button className="w-[100px] py-1 bg-green-500 hover:bg-green-600 transition-all text-white rounded-md">
                    Aktif
                  </button>
                ) : (
                  <button className="w-[100px] py-1 bg-red-500 hover:bg-red-600 transition-all text-white rounded-md">
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
          ))}
      </TableBody>
    </Table>
  );
};

export default TableList;
