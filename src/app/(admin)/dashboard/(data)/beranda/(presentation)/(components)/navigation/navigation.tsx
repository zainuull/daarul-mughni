'use client';
import Header from '@/app/(admin)/dashboard/components/header/header';
import useStatus from '@/app/(admin)/dashboard/store/store.status';
import About from '../about/about';
import useStoreDatas from '../../store/store.datas';
import { IAbsensiDataModel } from '../../../../absensi/domain/model/IModel';
import { useRouter } from 'next/navigation';

const Navigation = () => {
  const [menu] = useStatus();
  const [detailUser] = useStoreDatas();
  const router = useRouter();
  const absensi = detailUser?.data?.absensi;

  const handleDetail = (id: string) => {
    router.push(`/dashboard/absensi/detail/${id}`);
  };

  return (
    <div
      className={`p-10 ${
        menu ? 'w-[88vw]' : 'w-[75vw]'
      } h-screen overflow-y-auto flex flex-col gap-y-4 transition-all duration-700  select-none`}>
      <Header title="Beranda" />
      <div className="w-full h-full flex flex-col gap-y-6 mb-20">
        <div className="bg-white w-full rounded-lg h-32 py-6 flex items-center justify-center shadow-xl">
          <h1 className="text-4xl font-bold uppercase">
            Selamat Datang Di Dashboard Daarul Mughni
          </h1>
        </div>

        <About />

        <div className="w-full h-52 grid grid-cols-6 gap-10 mb-20">
          <div className="flex flex-col col-span-3 px-12 gap-2 mt-4 bg-white rounded-lg shadow-xl p-4 py-8">
            <h1 className="font-semibold uppercase">Jadwal Mengajar Hari Ini</h1>
            {absensi &&
              absensi.map((data: IAbsensiDataModel) => (
                <div
                  onClick={() => handleDetail(data?.id)}
                  key={data?.id}
                  className="bg-green-500 hover:bg-green-600 transition-all cursor-pointer rounded-lg h-14 flex justify-between items-center p-2 px-4">
                  <div className="flex flex-col leading-5">
                    <h1 className="font-semibold uppercase">{data?.lesson}</h1>
                    <h2>{data?.className}</h2>
                  </div>
                  <h1 className="font-semibold uppercase">
                    {data?.start_time} - {data?.end_time}
                  </h1>
                </div>
              ))}
          </div>

          <div className="flex flex-col col-span-3 px-12 gap-2 mt-4 bg-white rounded-lg shadow-xl p-4 py-8">
            <h1 className="font-semibold uppercase">Jadwal Yang Sudah Selesai</h1>
            <div className="bg-red-500 cursor-not-allowed rounded-lg h-14 flex justify-between items-center p-2 px-4">
              <div className="flex flex-col leading-5">
                <h1 className="font-semibold uppercase">Matematika</h1>
                <h2>MTs VIII</h2>
              </div>
              <h1 className="font-semibold uppercase">10:00 - 11:00</h1>
            </div>
            <div className="bg-red-500 cursor-not-allowed rounded-lg h-14 flex justify-between items-center p-2 px-4">
              <div className="flex flex-col leading-5">
                <h1 className="font-semibold uppercase">Faroidh</h1>
                <h2>MTs VIII</h2>
              </div>
              <h1 className="font-semibold uppercase">07:00 - 08:00</h1>
            </div>
            <div className="bg-red-500 cursor-not-allowed rounded-lg h-14 flex justify-between items-center p-2 px-4">
              <div className="flex flex-col leading-5">
                <h1 className="font-semibold uppercase">Fathul Qorib</h1>
                <h2>MTs VIII</h2>
              </div>
              <h1 className="font-semibold uppercase">11:00 - 12:00</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
