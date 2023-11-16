const DataGlobal = () => {
  return (
    <div className="w-full min-h-20 pb-10 grid grid-cols-2 gap-10">
      <div className="flex flex-col gap-y-2 col-span-1">
        <h1 className="uppercase">NIP</h1>
        <input
          type="text"
          className=" outline-none border border-black rounded-md h-10 px-4"
          placeholder="Masukkan No NIP"
          required
        />
      </div>
      <div className="flex flex-col gap-y-2 col-span-1">
        <h1 className="uppercase">Ijazah Terakhir</h1>
        <input
          type="text"
          className=" outline-none border border-black rounded-md h-10 px-4"
          placeholder="S1"
          required
        />
      </div>
      <div className="flex flex-col gap-y-2 col-span-1">
        <h1 className="uppercase">Level Pangkat / Golongan</h1>
        <input
          type="text"
          className=" outline-none border border-black rounded-md h-10 px-4"
          placeholder="A - Pembina"
          required
        />
      </div>
      <div className="flex flex-col gap-y-2 col-span-1">
        <h1 className="uppercase">Masa Kerja (Tahun)</h1>
        <input
          type="text"
          className=" outline-none border border-black rounded-md h-10 px-4"
          placeholder="31"
          required
        />
      </div>
      <div className="flex flex-col gap-y-2 col-span-1">
        <h1 className="uppercase">Sedang Berkuliah</h1>
        <input
          type="text"
          className=" outline-none border border-black rounded-md h-10 px-4"
          placeholder="Tidak Berkuliah"
          required
        />
      </div>
      <div className="flex flex-col gap-y-2 col-span-1">
        <h1 className="uppercase">Status Kepegawian</h1>
        <input
          type="text"
          className=" outline-none border border-black rounded-md h-10 px-4"
          placeholder="PNS"
          required
        />
      </div>
    </div>
  );
};

export default DataGlobal;
