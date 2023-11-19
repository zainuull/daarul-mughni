'use client';
import { IEventDataModel } from '@/model/event.model';
import { deleteEvent, getEventsOnClient, getEventsOnServer } from '@/services/api';
import { Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow } from '@tremor/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { PiPencilLineLight } from 'react-icons/pi';
import useForm from '../../../store/store.status';

const TableList = () => {
  const [event, setEvent] = useState<IEventDataModel | any>();
  const router = useRouter();
  const [form, setForm] = useForm();

  useEffect(() => {
    const fetchData = async () => {
      const events = await getEventsOnClient();
      setEvent(events?.events);
    };
    fetchData();
  }, []);

  const handleDelete = async (id: string) => {
    await deleteEvent(id);
    router.refresh();
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
          <TableHeaderCell className="text-center">Status</TableHeaderCell>
          <TableHeaderCell>Edit</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {event &&
          event.map((item: IEventDataModel) => (
            <TableRow key={item.id}>
              <TableCell>{item.title}</TableCell>
              <TableCell>{item.section}</TableCell>
              <TableCell>{item.person_responsible}</TableCell>
              <TableCell>{item.date_event}</TableCell>
              <TableCell>{item.place_event}</TableCell>
              <TableCell>
                {item?.status === 'Selesai' ? (
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
                  <button onClick={() => handleUpdate(item)}>
                    <PiPencilLineLight />
                  </button>
                  <button onClick={() => handleDelete(item?.id)}>
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
