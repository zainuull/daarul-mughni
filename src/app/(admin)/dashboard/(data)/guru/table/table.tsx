'use client';
import { ITeacherDataModel } from '@/model/model';
import { deleteTeacher, getTeachers } from '@/services/api';
import { Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow } from '@tremor/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { PiPencilLineLight } from 'react-icons/pi';
import useDataTeacher from '../store/store.teacher';
import useStoreDatas from '../store/store.datas';
import Pagination from './pagination';
import { NotifyService } from '@/services/notify/notifyService';
import Swal from 'sweetalert2';

const TableList = ({ resultSearchData }: { resultSearchData: any }) => {
  const [datas, setDatas] = useState<ITeacherDataModel[]>();
  const router = useRouter();
  const [teacherForm, setTeacherForm] = useDataTeacher();
  const [dataFiltered] = useStoreDatas();
  const notifyService = new NotifyService();
  const result = resultSearchData?.length > 0 ? resultSearchData : dataFiltered.teachers || datas || [];

  useEffect(() => {
    const fetchData = async () => {
      try {
        notifyService.showLoading();
        const res = await getTeachers();
        setDatas(res?.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    if (!datas) {
      fetchData();
    }
    Swal.close();
  }, []);

  const handleDelete = async (id: string) => {
    notifyService.confirmationDelete().then(async (res) => {
      if (res) {
        await deleteTeacher(id);
        const fetchData = await getTeachers();
        setDatas(fetchData?.data);
      }
    });
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
      positionName: data?.positionName,
      period_work: data?.period_work,
      gender: data?.gender,
      age: data?.age,
      status: data?.status,
    });
  };

  return (
    <>
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
          {result.length === 0 ? (
            <div className="min-h-[300px] px-12">
              <div className=" mt-40">
                <h1 className="text-6xl font-bold">Data not found</h1>
              </div>
            </div>
          ) : (
            result.map((data: any) => (
              <TableRow key={data.id}>
                <TableCell>{data.name}</TableCell>
                <TableCell>{data.positionName}</TableCell>
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
            ))
          )}
        </TableBody>
      </Table>
      <nav className="my-6 px-4 absolute right-0 bottom-16">
        <Pagination />
      </nav>
    </>
  );
};

export default TableList;
