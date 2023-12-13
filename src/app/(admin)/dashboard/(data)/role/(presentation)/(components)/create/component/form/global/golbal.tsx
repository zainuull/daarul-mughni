'use client';
import useDataRole from '../../../../../store/store.role';

const DataGlobal = () => {
  const [data, setData] = useDataRole();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setData({
      ...data,
      [e.target.id]: e.target.value,
    });
  };
  return (
    <div className="w-full min-h-20 pb-10 grid grid-cols-2 gap-10">
      <div className="flex flex-col gap-y-2 col-span-1">
        <h1 className="uppercase">Jabatan</h1>
        <input
          onChange={handleChange}
          id="name"
          type="text"
          className=" outline-none border border-black rounded-md h-10 px-4"
          placeholder="Masukkan Nama Jabatan"
          required
        />
      </div>
    </div>
  );
};

export default DataGlobal;
