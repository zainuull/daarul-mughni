'use client';
import { useEffect, useState } from 'react';
import useDataStudent from '../../../store/store.student';
import DropdownClass from '../dropdown/dropdown.class';
import DropdownGender from '../dropdown/dropdown.gender';
import { getStudentById } from '@/services/api';

const DataPersonal = ({ id }: { id: string }) => {
  const [data, setData] = useDataStudent();
  const [defaultData, setDefaultData] = useState<any>()

  useEffect(() => {
    const fetchData = async() => {
      const res = await getStudentById(id)
      setDefaultData(res?.data)
    }
    fetchData()
  },[])

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.id]: e.target.value,
    });
  };
  return (
    <div className="w-full min-h-20 pb-10 grid grid-cols-2 gap-10">
      <div className="flex flex-col gap-y-2 col-span-1">
        <h1 className="uppercase">Nama</h1>
        <input
          onChange={handleChange}
          defaultValue={defaultData?.name}
          id="name"
          type="text"
          className=" outline-none border border-black rounded-md h-10 px-4"
          placeholder="Masukkan nama anda"
          required
        />
      </div>
      <div className="flex flex-col gap-y-2 col-span-1">
        <h1 className="uppercase">Tanggal Lahir</h1>
        <input
          onChange={handleChange}
          defaultValue={defaultData?.date_of_birth}
          id="date_of_birth"
          type="date"
          className=" outline-none border border-black rounded-md h-10 px-4"
          placeholder="Masukkan NUPTK anda"
          required
        />
      </div>
      <div className="flex flex-col gap-y-2 col-span-1">
        <h1 className="uppercase">Kelas</h1>
        <DropdownClass />
      </div>
      <div className="flex flex-col gap-y-2 col-span-1">
        <h1 className="uppercase">Jenis Kelamin</h1>
        <DropdownGender />
      </div>
    </div>
  );
};

export default DataPersonal;
