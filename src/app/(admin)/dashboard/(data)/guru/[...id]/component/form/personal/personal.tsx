'use client';
import { useEffect, useState } from 'react';
import useDataTeacher from '../../../../store/store.teacher';
import DropdownGender from '../../dropdown/dropdown.gender';
import { getTeachersById } from '@/services/api';

const DataPersonal = ({ id }: { id: string }) => {
  const [formTeacher, setFormTeacher] = useDataTeacher();
  const [defaultData, setDefaultData] = useState<any>();

  useEffect(() => {
    const fetchDataById = async () => {
      const res = await getTeachersById(id);
      setDefaultData(res?.data);
    };
    fetchDataById();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    setFormTeacher({
      ...formTeacher,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <>
      {defaultData && (
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
            <h1 className="uppercase">No Telp</h1>
            <input
              onChange={handleChange}
              defaultValue={defaultData?.telp}
              id="telp"
              type="tel"
              className=" outline-none border border-black rounded-md h-10 px-4"
              placeholder="0881100000"
              required
            />
          </div>
          <div className="flex flex-col gap-y-2 col-span-1">
            <h1 className="uppercase">Email</h1>
            <input
              onChange={handleChange}
              defaultValue={defaultData?.email}
              id="email"
              type="mail"
              className=" outline-none border border-black rounded-md h-10 px-4"
              placeholder="user@gmail.com"
              required
            />
          </div>
          <div className="flex flex-col gap-y-2 col-span-1">
            <h1 className="uppercase">Umur</h1>
            <input
              onChange={handleChange}
              defaultValue={defaultData?.age}
              id="age"
              type="number"
              className=" outline-none border border-black rounded-md h-10 px-4"
              placeholder="20"
              required
            />
          </div>
          <div className="flex flex-col gap-y-2 col-span-1">
            <h1 className="uppercase">Jenis Kelamin</h1>
            <DropdownGender />
          </div>
        </div>
      )}
    </>
  );
};

export default DataPersonal;
