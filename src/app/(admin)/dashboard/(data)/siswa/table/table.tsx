'use client';
import { IStudentDataModel } from '@/model/event.model';
import { deleteStudent, getStudent } from '@/services/api';
import { Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow } from '@tremor/react';
import { useEffect, useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { PiPencilLineLight } from 'react-icons/pi';
import useDataStudent from '../store/store.student';
import { useRouter } from 'next/navigation';

const TableList = () => {
  const [datas, setDatas] = useState<IStudentDataModel[]>();
  const [studentForm, setStudentForm] = useDataStudent();
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const res = await getStudent();
      setDatas(res?.data);
    };
    fetchData();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await deleteStudent(id);
      const fetchData = await getStudent();
      setDatas(fetchData?.data);
    } catch (error) {
      console.log(error);
    }
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
      guardian_email: data?.guardian_email,
      status_payment: data?.status_payment,
      address: data?.address,
      className: data?.className,
    });
  };

  return (
    <Table className="mt-5">
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
        {datas &&
          datas?.map((data) => (
            <TableRow key={data.id}>
              <TableCell>{data.name}</TableCell>
              <TableCell>{data.className}</TableCell>
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
          ))}
      </TableBody>
    </Table>
  );
};

export default TableList;
