'use client';
import { IEventDataModel } from '@/model/model';
import { deleteEvent, getEvents } from '@/services/api';
import { Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow } from '@tremor/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { PiPencilLineLight } from 'react-icons/pi';
import useStoreDatas from '../store/store.datas';
import Pagination from './pagination';
import useDataEvents from '../store/store.events';
import { NotifyService } from '@/services/notify/notifyService';
import Swal from 'sweetalert2';

const TableList = () => {
  const [datas, setDatas] = useState<IEventDataModel[]>();
  const router = useRouter();
  const [eventForm, setEventForm] = useDataEvents();
  const [dataFiltered] = useStoreDatas();
  const notifyService = new NotifyService();

  const result = dataFiltered?.events ?? datas;

  useEffect(() => {
    const fetchData = async () => {
      const res = await getEvents();
      setDatas(res?.events);
    };
    if (!datas) {
      notifyService.showLoading();
      fetchData();
    }
    Swal.close();
  }, []);

  const handleDelete = async (id: string) => {
    notifyService.confirmationDelete().then(async (res) => {
      if (res) {
        await deleteEvent(id);
        const fetchData = await getEvents();
        setDatas(fetchData?.events);
      }
    });
  };

  const handleUpdate = (data: IEventDataModel) => {
    router.push(`/dashboard/activity/update/${data?.id}`);
    setEventForm({
      ...eventForm,
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
    <div>
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
          {result?.length === 0 ? (
            <div className="min-h-[300px] px-12">
              <div className=" mt-40">
                <h1 className="text-6xl font-bold">Data not found</h1>
              </div>
            </div>
          ) : (
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
            ))
          )}
        </TableBody>
      </Table>
      <nav className="my-6 px-4 absolute right-0 bottom-16">
        <Pagination />
      </nav>
    </div>
  );
};

export default TableList;
