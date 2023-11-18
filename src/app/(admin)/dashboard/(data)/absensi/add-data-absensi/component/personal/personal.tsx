const DataPersonal = () => {
    return (
      <div className="w-full min-h-20 pb-10 grid grid-cols-2 gap-10">
        <div className="flex flex-col gap-y-2 col-span-1">
          <h1 className="uppercase">Kode Kelas</h1>
          <input
            type="text"
            className=" outline-none border border-black rounded-md h-10 px-4"
            placeholder="A-01"
            required
          />
        </div>
        <div className="flex flex-col gap-y-2 col-span-1">
          <h1 className="uppercase">Kelas</h1>
          <input
            type="text"
            className=" outline-none border border-black rounded-md h-10 px-4"
            placeholder="MTs VII"
            required
          />
        </div>
        <div className="flex flex-col gap-y-2 col-span-1">
          <h1 className="uppercase">Pengajar</h1>
          <input
            type="text"
            className=" outline-none border border-black rounded-md h-10 px-4"
            placeholder="Masukkan nama anda"
            required
          />
        </div>
        <div className="flex flex-col gap-y-2 col-span-1">
          <h1 className="uppercase">Nama Pelajaran</h1>
          <input
            type="text"
            className=" outline-none border border-black rounded-md h-10 px-4"
            placeholder="Masukkan nama pelajaran"
            required
          />
        </div>
        <div className="flex flex-col gap-y-2 col-span-1">
          <h1 className="uppercase">Jam Mulai</h1>
          <input
            type="time"
            className=" outline-none border border-black rounded-md h-10 px-4"
            placeholder="Masukkan nama pelajaran"
            required
          />
        </div>
        <div className="flex flex-col gap-y-2 col-span-1">
          <h1 className="uppercase">Jam Selesai</h1>
          <input
            type="time"
            className=" outline-none border border-black rounded-md h-10 px-4"
            placeholder="Masukkan nama pelajaran"
            required
          />
        </div>
      </div>
    );
}
 
export default DataPersonal;