import { FaRegCircleUser } from 'react-icons/fa6';
import { FiBook, FiClock } from 'react-icons/fi';
import { PiHouseLine } from 'react-icons/pi';
import { MdDateRange } from 'react-icons/md';
import { IoPaperPlaneOutline } from 'react-icons/io5';

const About = ({ detailAbsensi }) => {
  return (
    <div className="grid grid-cols-12 bg-slate-100 p-4 gap-4 rounded-lg">
      <div className="flex flex-col gap-y-2 col-span-6">
        <div className="flex items-center gap-x-4">
          <div className="rounded-lg p-4 bg-white shadow-lg w-[20vw]">
            <div className="flex gap-x-2">
              <FaRegCircleUser size={35} />
              <div className="flex flex-col leading-none">
                <h1 className="text-xs lg:text-sm font-bold uppercase">
                  {detailAbsensi?.teacher}
                </h1>
                <h2 className="text-xs lg:text-sm">Guru</h2>
              </div>
            </div>
          </div>

          <div className="rounded-lg p-4 bg-white shadow-lg w-[20vw]">
            <div className="flex gap-x-2">
              <FiBook size={35} />
              <div className="flex flex-col leading-none">
                <h1 className="text-xs lg:text-sm font-bold uppercase">
                  {detailAbsensi?.lesson}
                </h1>
                <h2 className="text-xs lg:text-sm">Mata Pelajaran</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-x-4">
          <div className="rounded-lg p-4 bg-white shadow-lg w-[20vw]">
            <div className="flex gap-x-2">
              <PiHouseLine size={35} />
              <div className="flex flex-col leading-none">
                <h1 className="text-xs lg:text-sm font-bold uppercase">
                  {detailAbsensi?.className}
                </h1>
                <h2 className="text-xs lg:text-sm">Kelas</h2>
              </div>
            </div>
          </div>

          <div className="rounded-lg p-4 bg-white shadow-lg w-[20vw]">
            <div className="flex gap-x-2">
              <MdDateRange size={35} />
              <div className="flex flex-col leading-none">
                <h1 className="text-xs lg:text-sm font-bold uppercase">Kamis</h1>
                <h2 className="text-xs lg:text-sm">Hari</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-lg p-4 bg-white shadow-lg col-span-3">
        <div className="flex flex-col h-full justify-between">
          <div className="flex justify-between">
            <div className="flex gap-x-1">
              <FiClock size={35} />
              <div className="flex flex-col leading-none">
                <h1 className="text-xs lg:text-sm font-bold uppercase">
                  {detailAbsensi?.start_time}
                </h1>
                <h2 className="text-xs">Jam Masuk</h2>
              </div>
            </div>
            <div className="flex flex-col leading-none">
              <h1 className="text-xs lg:text-sm font-bold uppercase">
                {detailAbsensi?.end_time}
              </h1>
              <h2 className="text-xs">Jam Keluar</h2>
            </div>
          </div>
          <div className="flex flex-col gap-y-2">
            <div className="flex justify-between text-xs">
              <h1>Absen Masuk</h1>
              <h1>Absen Keluar</h1>
            </div>
            <div className="flex justify-between text-xs">
              <button className="w-[80px] py-2 rounded-lg bg-green-500 hover:bg-green-600 transition-all text-white">
                Mulai
              </button>
              <button className="w-[80px] py-2 rounded-lg bg-red-500 hover:bg-red-600 transition-all text-white">
                Selesai
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-lg p-4 bg-white shadow-lg col-span-3">
        <h1 className="text-xs lg:text-sm font-semibold">Materi Pelajaran : </h1>
        <textarea className="w-full h-2/3 px-1 outline-none text-sm" />
        <button className="w-full text-sm hover:font-semibold transition-all flex items-center justify-end gap-x-1">
          Kirim
          <IoPaperPlaneOutline />
        </button>
      </div>
    </div>
  );
};

export default About;
