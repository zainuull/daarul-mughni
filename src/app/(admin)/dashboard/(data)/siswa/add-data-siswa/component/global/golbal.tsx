const DataGlobal = () => {
  return (
    <div className="w-full min-h-20 pb-10 grid grid-cols-2 gap-10">
      <div className="flex flex-col gap-y-2 col-span-1">
        <h1 className="uppercase">NISN</h1>
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
        <h1 className="uppercase">Nama Wali (Ibu)</h1>
        <input
          type="text"
          className=" outline-none border border-black rounded-md h-10 px-4"
          placeholder="Masukkan nama wali dari Ibu"
          required
        />
      </div>
      <div className="flex flex-col gap-y-2 col-span-1">
        <h1 className="uppercase">Status Wali</h1>
        <input
          type="text"
          className=" outline-none border border-black rounded-md h-10 px-4"
          placeholder="Orang Tua"
          required
        />
      </div>
      <div className="flex flex-col gap-y-2 col-span-2">
        <h1 className="uppercase">Alamat</h1>
        <textarea
          className=" outline-none border border-black rounded-md h-14 px-2 py-1"
          placeholder="Masukkan alamat anda"
          required
        />
      </div>
    </div>
  );
};

export default DataGlobal;
