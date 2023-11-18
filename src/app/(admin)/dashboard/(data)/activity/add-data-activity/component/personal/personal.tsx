const DataPersonal = () => {
    return (
      <div className="w-full min-h-20 pb-10 grid grid-cols-2 gap-10">
        <div className="flex flex-col gap-y-2 col-span-1">
          <h1 className="uppercase">Nama Kegiatan</h1>
          <input
            type="text"
            className=" outline-none border border-black rounded-md h-10 px-4"
            placeholder="Masukkan nama anda"
            required
          />
        </div>
        <div className="flex flex-col gap-y-2 col-span-1">
          <h1 className="uppercase">Tanggal Kegiatan</h1>
          <input
            type="date"
            className=" outline-none border border-black rounded-md h-10 px-4"
            placeholder="Masukkan NUPTK anda"
            required
          />
        </div>
        <div className="flex flex-col gap-y-2 col-span-1">
          <h1 className="uppercase">Tempat Pelaksanaan</h1>
          <input
            type="text"
            className=" outline-none border border-black rounded-md h-10 px-4"
            placeholder="Aula"
            required
          />
        </div>
        <div className="flex flex-col gap-y-2 col-span-1">
          <h1 className="uppercase">Penanggung Jawab</h1>
          <input
            type="text"
            className=" outline-none border border-black rounded-md h-10 px-4"
            placeholder="Ustdz / Ustdzh"
            required
          />
        </div>
      </div>
    );
}
 
export default DataPersonal;