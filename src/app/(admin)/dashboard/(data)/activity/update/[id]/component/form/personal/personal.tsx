'use client';
import { IEventDataModel } from '@/model/model';
import { getEventsById } from '@/services/api';
import { useEffect, useState } from 'react';
import useDataEvents from '../../../../../store/store.events';
import Swal from 'sweetalert2';
import DropdownTeacher from '../../dropdown/dropdown.teacher';

const DataPersonal = ({ id }: { id: string }) => {
  const [form, setForm] = useDataEvents();
  const [defaultData, setDefaultData] = useState<IEventDataModel>();

  useEffect(() => {
    const fetchDataById = async () => {
      const res = await getEventsById(id);
      setDefaultData(res?.events);
    };
    fetchDataById();
    Swal.close();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <>
      {defaultData && (
        <form className="w-full min-h-20 pb-10 grid grid-cols-2 gap-10">
          <div className="flex flex-col gap-y-2 col-span-1">
            <h1 className="uppercase">Nama Kegiatan</h1>
            <input
              onChange={handleChange}
              defaultValue={defaultData?.title}
              id="title"
              type="text"
              className=" outline-none border border-black rounded-md h-10 px-4"
              placeholder="Masukkan nama anda"
              required
            />
          </div>
          <div className="flex flex-col gap-y-2 col-span-1">
            <h1 className="uppercase">Tanggal Kegiatan</h1>
            <input
              onChange={handleChange}
              defaultValue={defaultData?.date_event}
              id="date_event"
              type="date"
              className=" outline-none border border-black rounded-md h-10 px-4"
              placeholder="Masukkan NUPTK anda"
              required
            />
          </div>
          <div className="flex flex-col gap-y-2 col-span-1">
            <h1 className="uppercase">Tempat Pelaksanaan</h1>
            <input
              onChange={handleChange}
              defaultValue={defaultData?.place_event}
              id="place_event"
              type="text"
              className=" outline-none border border-black rounded-md h-10 px-4"
              placeholder="Aula"
              required
            />
          </div>
          <div className="flex flex-col gap-y-2 col-span-1">
            <h1 className="uppercase">Penanggung Jawab</h1>
            <DropdownTeacher />
          </div>
          <div className="flex flex-col gap-y-2 col-span-2">
            <h1 className="uppercase">Deskripsi Kegiatan</h1>
            <textarea
              onChange={handleChange}
              defaultValue={defaultData?.description}
              id="description"
              className=" outline-none border border-black rounded-md h-14 px-2 py-1"
              placeholder="Tulisan deskripsi acara"
              required
            />
          </div>
        </form>
      )}
    </>
  );
};

export default DataPersonal;
