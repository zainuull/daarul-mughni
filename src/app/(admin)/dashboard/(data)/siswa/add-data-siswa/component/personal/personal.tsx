const DataPersonal = () => {
    return (
      <div className="w-full min-h-20 pb-10 grid grid-cols-2 gap-10">
        <div className="flex flex-col gap-y-2 col-span-1">
          <h1 className="uppercase">Nama</h1>
          <input
            type="text"
            className=" outline-none border border-black rounded-md h-10 px-4"
            placeholder="Masukkan nama anda"
            required
          />
        </div>
        <div className="flex flex-col gap-y-2 col-span-1">
          <h1 className="uppercase">Tanggal Lahir</h1>
          <input
            type="date"
            className=" outline-none border border-black rounded-md h-10 px-4"
            placeholder="Masukkan NUPTK anda"
            required
          />
        </div>
        <div className="flex flex-col gap-y-2 col-span-1">
          <h1 className="uppercase">No Telp Wali</h1>
          <input
            type="tel"
            className=" outline-none border border-black rounded-md h-10 px-4"
            placeholder="0881100000"
            required
          />
        </div>
        <div className="flex flex-col gap-y-2 col-span-1">
          <h1 className="uppercase">Jenis Kelamin</h1>
          <input
            type="mail"
            className=" outline-none border border-black rounded-md h-10 px-4"
            placeholder="L/P"
            required
          />
        </div>
      </div>
    );
}
 
export default DataPersonal;