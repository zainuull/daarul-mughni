'use client';
import useDataTeacher from '../../../store/store.teacher';
import DropdownJazah from '../dropdown/dropdown.ijazah';
import DropdownLevel from '../dropdown/dropdown.level';
import DropdownPeriodWork from '../dropdown/dropdown.period.work';
import DropdownStatus from '../dropdown/dropdown.status';

const DataGlobal = () => {
  const [data, setData] = useDataTeacher();
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div className="w-full min-h-20 pb-10 grid grid-cols-2 gap-10">
      <div className="flex flex-col gap-y-2 col-span-1">
        <h1 className="uppercase">NIP</h1>
        <input
          onChange={handleChange}
          id="nip"
          type="text"
          className=" outline-none border border-black rounded-md h-10 px-4"
          placeholder="Masukkan No NIP"
          required
        />
      </div>
      <div className="flex flex-col gap-y-2 col-span-1">
        <h1 className="uppercase">Ijazah Terakhir</h1>
        <DropdownJazah />
      </div>
      <div className="flex flex-col gap-y-2 col-span-1">
        <h1 className="uppercase">Level Pangkat / Golongan</h1>
        <DropdownLevel />
      </div>
      <div className="flex flex-col gap-y-2 col-span-1">
        <h1 className="uppercase">Masa Kerja (Tahun)</h1>
        <DropdownPeriodWork />
      </div>
      <div className="flex flex-col gap-y-2 col-span-1">
        <h1 className="uppercase">Status)</h1>
        <DropdownStatus />
      </div>
    </div>
  );
};

export default DataGlobal;
