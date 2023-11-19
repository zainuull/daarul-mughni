'use client';
import useForm from '@/app/(admin)/dashboard/store/store.status';
import { IEventDataModel } from '@/model/event.model';
import { getEventsById } from '@/services/api';
import { useEffect, useState } from 'react';

const DataPersonal = ({ id }: { id: string }) => {
  const [form, setForm] = useForm();
  const [data, setData] = useState<IEventDataModel>();

  useEffect(() => {
    const fetchDataById = async () => {
      const res = await getEventsById(id);
      setData(res?.events);
    };
    fetchDataById();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };


  return (
    <form className="w-full min-h-20 pb-10 grid grid-cols-2 gap-10">
      <div className="flex flex-col gap-y-2 col-span-1">
        <h1 className="uppercase">Nama Kegiatan</h1>
        <input
          onChange={handleChange}
          defaultValue={data?.title}
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
          defaultValue={data?.date_event}
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
          defaultValue={data?.place_event}
          id="place_event"
          type="text"
          className=" outline-none border border-black rounded-md h-10 px-4"
          placeholder="Aula"
          required
        />
      </div>
      <div className="flex flex-col gap-y-2 col-span-1">
        <h1 className="uppercase">Penanggung Jawab</h1>
        <input
          onChange={handleChange}
          defaultValue={data?.person_responsible}
          id="person_responsible"
          type="text"
          className=" outline-none border border-black rounded-md h-10 px-4"
          placeholder="Ustdz / Ustdzh"
          required
        />
      </div>
      <div className="flex flex-col gap-y-2 col-span-2">
        <h1 className="uppercase">Deskripsi Kegiatan</h1>
        <textarea
          onChange={handleChange}
          defaultValue={data?.description}
          id="description"
          className=" outline-none border border-black rounded-md h-14 px-2 py-1"
          placeholder="Tulisan deskripsi acara"
          required
        />
      </div>
    </form>
  );
};

export default DataPersonal;
