'use client';
import useDataStudent from '../../../../store/store.student';
import DropdownGuardianStatus from '../../dropdown/dropdown.guardian.status';
import DropdownJazah from '../../dropdown/dropdown.ijazah';
import DropdownStatusPayment from '../../dropdown/dropdown.status.payment';

const DataGlobal = () => {
  const [data, setData] = useDataStudent();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setData({
      ...data,
      [e.target.id]: e.target.value,
    });
  };
  return (
    <div className="w-full min-h-20 pb-10 grid grid-cols-2 gap-10">
      <div className="flex flex-col gap-y-2 col-span-1">
        <h1 className="uppercase">NISN</h1>
        <input
          onChange={handleChange}
          id="nisn"
          type="text"
          className=" outline-none border border-black rounded-md h-10 px-4"
          placeholder="Masukkan No NISN"
          required
        />
      </div>
      <div className="flex flex-col gap-y-2 col-span-1">
        <h1 className="uppercase">Ijazah Terakhir</h1>
        <DropdownJazah />
      </div>
      <div className="flex flex-col gap-y-2 col-span-1">
        <h1 className="uppercase">Nama Wali (Ibu)</h1>
        <input
          onChange={handleChange}
          id="guardian_name"
          type="text"
          className=" outline-none border border-black rounded-md h-10 px-4"
          placeholder="Masukkan nama wali dari Ibu"
          required
        />
      </div>
      <div className="flex flex-col gap-y-2 col-span-1">
        <h1 className="uppercase">Status Wali</h1>
        <DropdownGuardianStatus />
      </div>
      <div className="flex flex-col gap-y-2 col-span-1">
        <h1 className="uppercase">No Telp (Wali)</h1>
        <input
          onChange={handleChange}
          id="guardian_telp"
          type="tel"
          className=" outline-none border border-black rounded-md h-10 px-4"
          placeholder="08811223344"
          required
        />
      </div>
      <div className="flex flex-col gap-y-2 col-span-1">
        <h1 className="uppercase">Status Pembayaran</h1>
        <DropdownStatusPayment />
      </div>
      <div className="flex flex-col gap-y-2 col-span-2">
        <h1 className="uppercase">Alamat</h1>
        <textarea
          onChange={handleChange}
          id="address"
          className=" outline-none border border-black rounded-md h-14 px-2 py-1"
          placeholder="Masukkan alamat anda"
          required
        />
      </div>
    </div>
  );
};

export default DataGlobal;