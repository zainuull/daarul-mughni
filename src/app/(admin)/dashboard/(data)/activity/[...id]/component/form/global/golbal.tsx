'use client';
import useForm from '@/app/(admin)/dashboard/store/store.status';
import { IEventDataModel } from '@/model/model';
import { getEventsById } from '@/services/api';
import { useEffect, useState } from 'react';
import DropdownCategory from '../../dropdown/dropdown.category';
import DropdownStatus from '../../dropdown/dropdown.status';

const DataGlobal = ({ id }: { id: string }) => {
  const [form, setForm] = useForm();
  const [data, setData] = useState<IEventDataModel>();

  useEffect(() => {
    const fetchDataById = async () => {
      const res = await getEventsById(id);
      setData(res?.events);
    };
    fetchDataById();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div className="w-full min-h-20 pb-10 grid grid-cols-2 gap-10">
      <div className="flex flex-col gap-y-2 col-span-1">
        <h1 className="uppercase">Image</h1>
        <input
          onChange={handleChange}
          defaultValue={data?.imageUrl}
          id="imageUrl"
          type="text"
          className=" outline-none border border-black rounded-md h-10 px-4"
          placeholder="Link gambar"
        />
      </div>
      <div className="flex flex-col gap-y-2 col-span-1">
        <h1 className="uppercase">Bagian</h1>
        <input
          onChange={handleChange}
          defaultValue={data?.section}
          id="section"
          type="text"
          className=" outline-none border border-black rounded-md h-10 px-4"
          placeholder="Bag. Keamanan"
        />
      </div>
      <div className="flex flex-col gap-y-2 col-span-1">
        <h1 className="uppercase">No Telp Penanggung Jawab</h1>
        <input
          onChange={handleChange}
          defaultValue={data?.telp_person_responsible}
          id="telp_person_responsible"
          type="tel"
          className=" outline-none border border-black rounded-md h-10 px-4"
          placeholder="0881122222"
          required
        />
      </div>
      <div className="flex flex-col gap-y-2 col-span-1">
        <h1 className="uppercase">Jenis Kategori</h1>
        <DropdownCategory />
      </div>
      <div className="flex flex-col gap-y-2 col-span-1">
        <h1 className="uppercase">Modal Pembiayaan</h1>
        <input
          onChange={handleChange}
          defaultValue={data?.total_cost}
          id="total_cost"
          type="number"
          className=" outline-none border border-black rounded-md h-10 px-4"
          placeholder="Rp, 800.000"
          required
        />
      </div>
      <div className="flex flex-col gap-y-2 col-span-1">
        <h1 className="uppercase">Status Kegiatan</h1>
        <DropdownStatus />
      </div>
    </div>
  );
};

export default DataGlobal;
