'use client';
import { useEffect, useState } from 'react';
import useDataAbsensi from '../../../../store/store.absensi';
import DropdownClass from '../../dropdown/dropdown.class';
import DropdownCodeClass from '../../dropdown/dropdown.code.class';
import DropdownLesson from '../../dropdown/dropdown.lesson';
import DropdownLevel from '../../dropdown/dropdown.level';
import DropdownTeacher from '../../dropdown/dropdown.teacher';
import { getAbsensiById } from '@/services/api';

const DataPersonal = ({ id }: { id: string }) => {
  const [formAbsensi, setFormAbsensi] = useDataAbsensi();
  const [data, setData] = useState<any>();

  useEffect(() => {
    const fetchDataById = async () => {
      const res = await getAbsensiById(id);
      setData(res?.data);
    };
    fetchDataById();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    setFormAbsensi({
      ...formAbsensi,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <>
      {data && (
        <div className="w-full min-h-20 pb-10 grid grid-cols-2 gap-10">
          <div className="flex flex-col gap-y-2 col-span-1">
            <h1 className="uppercase">Tingkatan</h1>
            <DropdownLevel />
          </div>
          <div className="flex flex-col gap-y-2 col-span-1">
            <h1 className="uppercase">Kelas</h1>
            <DropdownClass />
          </div>
          <div className="flex flex-col gap-y-2 col-span-1">
            <h1 className="uppercase">Kode Kelas</h1>
            <DropdownCodeClass />
          </div>
          <div className="flex flex-col gap-y-2 col-span-1">
            <h1 className="uppercase">Pengajar</h1>
            <DropdownTeacher />
          </div>
          <div className="flex flex-col gap-y-2 col-span-1">
            <h1 className="uppercase">Nama Pelajaran</h1>
            <DropdownLesson />
          </div>
          <div className="flex flex-col gap-y-2 col-span-1">
            <h1 className="uppercase">Jam Mulai</h1>
            <input
              id="start_time"
              onChange={handleChange}
              defaultValue={data?.start_time}
              type="time"
              className=" outline-none border border-black rounded-md h-10 px-4"
              placeholder="Masukkan nama pelajaran"
              required
            />
          </div>
          <div className="flex flex-col gap-y-2 col-span-1">
            <h1 className="uppercase">Jam Selesai</h1>
            <input
              id="end_time"
              onChange={handleChange}
              defaultValue={data?.end_time}
              type="time"
              className=" outline-none border border-black rounded-md h-10 px-4"
              placeholder="Masukkan nama pelajaran"
              required
            />
          </div>
        </div>
      )}
    </>
  );
};

export default DataPersonal;
