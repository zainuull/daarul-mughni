'use client';
import Header from '../../../components/header/header';
import useStatus from '../../../store/store.status';
import DataGlobal from './component/form/global/golbal';
import DataPersonal from './component/form/personal/personal';
import Submit from './component/submit/submit';

const AddDataSiswa = () => {
  const [menu] = useStatus();
  return (
    <div className="w-full flex justify-end min-h-screen p-6">
      <div className={`${menu ? "w-[1200px]" : "w-3/4"} h-full flex flex-col transition-all duration-700`}>
        <Header title="Tambah Data Siswa" />
        <div className="w-full p-4 bg-white rounded-lg shadow-lg">
          <DataPersonal />
        </div>
        <div className="w-full p-4 bg-white rounded-lg shadow-lg mt-8">
          <DataGlobal />
        </div>
        <div className="w-full h-20 mt-8 bg-white px-12 shadow-lg flex justify-center">
          <Submit />
        </div>
      </div>
    </div>
  );
};

export default AddDataSiswa;
