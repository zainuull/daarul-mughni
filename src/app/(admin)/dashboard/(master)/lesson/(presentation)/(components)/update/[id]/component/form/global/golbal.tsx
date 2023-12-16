'use client';
import useData from '../../../../../navigation/store/store.lesson';
import { DropdownLevel } from '../../../../../dropdown/dropdown.level';

const DataGlobal = () => {
  const [data, setData] = useData();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setData({
      ...data,
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
        <h1 className="uppercase">Pelajaran</h1>
        <input
          onChange={handleChange}
          defaultValue={data?.name}
          id="name"
          type="text"
          className=" outline-none border border-black rounded-md h-10 px-4"
          placeholder="Durusul Lugoh"
          required
        />
      </div>
    </div>
  );
};

export default DataGlobal;
