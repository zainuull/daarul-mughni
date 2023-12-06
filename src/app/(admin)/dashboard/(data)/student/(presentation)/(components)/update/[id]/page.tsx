'use client';
import DataGlobal from './component/form/global/golbal';
import DataPersonal from './component/form/personal/personal';
import Submit from './component/submit/submit';
import Header from '@/app/(admin)/dashboard/components/header/header';
import useStatus from '@/app/(admin)/dashboard/store/store.status';

const UpdateDataSiswa = ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const [menu] = useStatus();

  return (
    <div className="w-full flex justify-end h-screen overflow-y-auto p-6">
      <div
        className={`${
          menu ? 'w-[88vw]' : 'w-[70vw]'
        } h-full flex flex-col transition-all duration-700`}>
        <Header title="Update Data Siswa" />
        <div className="w-full p-4 bg-white rounded-lg shadow-lg">
          <DataPersonal />
        </div>
        <div className="w-full p-4 bg-white rounded-lg shadow-lg mt-8">
          <DataGlobal />
        </div>
        <div className="w-full h-20 mt-8 bg-white px-12 shadow-lg pt-2 pb-10">
          <Submit id={id} />
        </div>
      </div>
    </div>
  );
};

export default UpdateDataSiswa;
