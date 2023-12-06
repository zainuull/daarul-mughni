'use client';
import { Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow } from '@tremor/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { FaTrash } from 'react-icons/fa';
import { PiPencilLineLight } from 'react-icons/pi';
import useStoreDatas from '../../store/store.datas';
import Pagination from './pagination';
import useDataEvents from '../../store/store.events';
import { NotifyService, ToastifyService } from '@/core/services/notify/notifyService';
import ToastNotify from '@/core/services/notify/toast';
import { IEventDataModel } from '../../../domain/model/IModel';
import useViewModel from '../../vm/view.model';
import { HandleError } from '@/core/services/handleError/handleError';
import useResultFilter from '../../store/store.result.filter';

const TableList = ({ resultSearchData }: { resultSearchData: any }) => {
  const { getEvents, deleteEvent } = useViewModel();
  const router = useRouter();
  const [eventForm, setEventForm] = useDataEvents();
  const [dataStore] = useStoreDatas();
  const [resultFilter] = useResultFilter();
  const notifyService = new NotifyService();
  const toastService = new ToastifyService();
  const result = resultSearchData?.length
    ? resultSearchData
    : dataStore?.data || resultFilter?.data?.events;

  useEffect(() => {
    notifyService.showLoading();
    fetchData();
  }, []);

  const fetchData = () => {
    getEvents()
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
        deleteEvent(id)
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
    <Table className="mt-5 h-screen relative pb-14">
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
        {resultFilter?.data?.events?.length === 0 ? (
          <div className="min-h-[300px] px-12">
            <div className=" mt-40">
              <h1 className="text-6xl font-bold">Data tidak ditemukan</h1>
            </div>
          </div>
        ) : (
          result?.map((data: IEventDataModel) => (
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
      <ToastNotify />
      {/* Naivgation */}
      {/* <nav className="absolute right-0 bottom-0">
        <Pagination />
      </nav> */}
    </Table>
  );
};

export default TableList;
