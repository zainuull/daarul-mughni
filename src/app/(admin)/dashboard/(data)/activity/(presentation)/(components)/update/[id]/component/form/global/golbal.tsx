'use client';
import { DropdownCategory, DropdownStatus, UploadImage } from '../../../../../dropdown/index';
import useDataEvents from '../../../../../../store/store.events';

const DataGlobal = () => {
  const [data, setData] = useDataEvents();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <>
      {data && (
        <div className="w-full min-h-20 pb-10 grid grid-cols-2 gap-10">
          <div className="flex flex-col gap-y-2 col-span-2">
            <h1 className="uppercase">Upload Foto</h1>
            <UploadImage />
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
      )}
    </>
  );
};

export default DataGlobal;
