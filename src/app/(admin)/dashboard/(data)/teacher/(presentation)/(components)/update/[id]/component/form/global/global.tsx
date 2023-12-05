'use client';
import useDataTeacher from '../../../../../../store/store.teacher';
import {
  DropdownJazah,
  DropdownPosition,
  DropdownPeriodWork,
  DropdownStatus,
  UploadImage,
} from '../../../../../dropdown/index';
const DataGlobal = () => {
  const [formTeacher, setFormTeacher] = useDataTeacher();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    setFormTeacher({
      ...formTeacher,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <>
      {formTeacher && (
        <div className="w-full min-h-20 pb-10 grid grid-cols-2 gap-10">
          <div className="flex flex-col gap-y-2 col-span-1">
            <h1 className="uppercase">NIP</h1>
            <input
              onChange={handleChange}
              defaultValue={formTeacher?.nip}
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
            <h1 className="uppercase">Jabatan</h1>
            <DropdownPosition />
          </div>
          <div className="flex flex-col gap-y-2 col-span-1">
            <h1 className="uppercase">Masa Kerja (Tahun)</h1>
            <DropdownPeriodWork />
          </div>
          <div className="flex flex-col gap-y-2 col-span-1">
            <h1 className="uppercase">Status</h1>
            <DropdownStatus />
          </div>
          <div className="flex flex-col gap-y-2 col-span-2">
            <h1 className="uppercase">Upload Foto</h1>
            <UploadImage />
          </div>
        </div>
      )}
    </>
  );
};

export default DataGlobal;
