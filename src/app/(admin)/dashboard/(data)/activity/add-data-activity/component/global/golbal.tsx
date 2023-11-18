const DataGlobal = () => {
  return (
    <div className="w-full min-h-20 pb-10 grid grid-cols-2 gap-10">
      <div className="flex flex-col gap-y-2 col-span-1">
        <h1 className="uppercase">Sponsor I / Kerja Sama</h1>
        <input
          type="text"
          className=" outline-none border border-black rounded-md h-10 px-4"
          placeholder="Bag. Bahasa"
        />
      </div>
      <div className="flex flex-col gap-y-2 col-span-1">
        <h1 className="uppercase">Sponsor II / Kerja Sama</h1>
        <input
          type="text"
          className=" outline-none border border-black rounded-md h-10 px-4"
          placeholder="Bag. Keamanan"
        />
      </div>
      <div className="flex flex-col gap-y-2 col-span-1">
        <h1 className="uppercase">No Telp Penanggung Jawab</h1>
        <input
          type="text"
          className=" outline-none border border-black rounded-md h-10 px-4"
          placeholder="0881122222"
          required
        />
      </div>
      <div className="flex flex-col gap-y-2 col-span-1">
        <h1 className="uppercase">Email Penanggung Jawab</h1>
        <input
          type="text"
          className=" outline-none border border-black rounded-md h-10 px-4"
          placeholder="example@gmail.com"
        />
      </div>
      <div className="flex flex-col gap-y-2 col-span-1">
        <h1 className="uppercase">Modal Pembiayaan</h1>
        <input
          type="text"
          className=" outline-none border border-black rounded-md h-10 px-4"
          placeholder="Rp, 800.000"
          required
        />
      </div>
      <div className="flex flex-col gap-y-2 col-span-1">
        <h1 className="uppercase">Status Kegiatan</h1>
        <input
          type="text"
          className=" outline-none border border-black rounded-md h-10 px-4"
          placeholder="Pending"
          required
        />
      </div>
    </div>
  );
};

export default DataGlobal;
