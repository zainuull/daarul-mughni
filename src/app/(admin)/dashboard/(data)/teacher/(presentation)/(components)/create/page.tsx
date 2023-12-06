'use client';
import Header from '../../../../../components/header/header';
import useStatus from '../../../../../store/store.status';
import DataGlobal from './component/form/global/global';
import DataPersonal from './component/form/personal/personal';
import Submit from './component/submit/submit';

const AddDataGuru = () => {
  const [menu] = useStatus();
  return (
    <div className="w-full flex justify-end h-screen overflow-y-auto">
      <div
        className={`p-10 ${
          menu ? 'w-[88vw]' : 'w-[75vw]'
        } h-full flex flex-col transition-all duration-700 pb-20`}>
        <Header title="Tambah Data Guru" />
        <div className="w-full p-4 bg-white rounded-lg shadow-lg">
          <DataPersonal />
        </div>
        <div className="w-full p-4 bg-white rounded-lg shadow-lg mt-8">
          <DataGlobal />
        </div>
        <div className="w-full h-20 mt-8 bg-white px-12 shadow-lg pt-2 pb-10">
          <Submit />
        </div>
      </div>
    </div>
  );
};

export default AddDataGuru;
