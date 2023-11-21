'use client';
import { IEventDataModel } from '@/model/event.model';
import { deleteEvent, getEvents } from '@/services/api';
import { Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow } from '@tremor/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { PiPencilLineLight } from 'react-icons/pi';
import useForm from '../../../store/store.status';

const TableList = () => {
  const [datas, setDatas] = useState<IEventDataModel[]>();
  const router = useRouter();
  const [form, setForm] = useForm();
  console.log(datas);
  
  useEffect(() => {
    const fetchData = async () => {
      const res = await getEvents();
      setDatas(res?.events);
    };
    fetchData();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await deleteEvent(id);
      const fetchData = await getEvents();
      setDatas(fetchData?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = (data: IEventDataModel) => {
    router.push(`/dashboard/activity/update/${data?.id}`);
    setForm({
      ...form,
      title: data?.title,
      description: data?.description,
      person_responsible: data?.person_responsible,
      telp_person_responsible: data?.telp_person_responsible,
      place_event: data?.place_event,
      date_event: data?.date_event,
      section: data?.section,
      imageUrl: data?.imageUrl,
      publicId: String(data?.publicId),
      selected_category: data?.catName,
      total_cost: data?.total_cost,
      status: data?.status,
    });
  };

  return (
    <Table className="mt-5">
      <TableHead>
        <TableRow>
          <TableHeaderCell>Nama Kegiatan</TableHeaderCell>
          <TableHeaderCell>Bagian</TableHeaderCell>
          <TableHeaderCell>Penanggung Jawab</TableHeaderCell>
          <TableHeaderCell>Tanggal Kegiatan</TableHeaderCell>
          <TableHeaderCell>Tempat Acara</TableHeaderCell>
          <TableHeaderCell>Status</TableHeaderCell>
          <TableHeaderCell>Edit</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {datas &&
          datas?.map((data: IEventDataModel) => (
            <TableRow key={data.id}>
              <TableCell>{data.title}</TableCell>
              <TableCell>Bag. {data.section}</TableCell>
              <TableCell>{data.person_responsible}</TableCell>
              <TableCell>{data.date_event}</TableCell>
              <TableCell>{data.place_event}</TableCell>
              <TableCell>
                {data?.status === 'Selesai' ? (
                  <button className="w-[100px] py-1 bg-green-500 hover:bg-green-600 transition-all text-white rounded-md">
                    Selesai
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