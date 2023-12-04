'use client';
import useDataAbsensi from '../../../../..//store/store.absensi';
import {DropdownClass,DropdownCodeClass,DropdownLesson,DropdownLevel,DropdownTeacher} from '../../../../dropdown/index';

const DataPersonal = () => {
  const [formAbsensi, setFormAbsensi] = useDataAbsensi();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    setFormAbsensi({
      ...formAbsensi,
      [e.target.id]: e.target.value,
    });
  };

  return (
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
          type="time"
          className=" outline-none border border-black rounded-md h-10 px-4"
          placeholder="Masukkan nama pelajaran"
          required
        />
      </div>
      <div className="flex flex-col gap-y-2 col-span-1">
        <h1 className="uppercase">Jam Selesai</h1>
        <input
          id='end_time'
          onChange={handleChange}
          type="time"
          className=" outline-none border border-black rounded-md h-10 px-4"
          placeholder="Masukkan nama pelajaran"
          required
        />
      </div>
    </div>
  );
};

export default DataPersonal;
