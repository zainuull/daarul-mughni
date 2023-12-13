'use client';
import Header from '../../../../../components/header/header';
import useStatus from '../../../../../store/store.status';
import DataGlobal from './component/form/global/golbal';
import Submit from './component/submit/submit';

const AddDataRole = () => {
  const [menu] = useStatus();
  return (
    <div className="w-full flex justify-end h-screen overflow-y-auto p-6">
      <div
        className={`${
          menu ? 'w-[88vw]' : 'w-[70vw]'
        } h-full flex flex-col transition-all duration-700`}>
        <Header title="Tambah Data Tingkatan Level" />
        <div className="w-full p-4 bg-white rounded-lg shadow-lg mt-8">
          <DataGlobal />
        </div>
        <div className="w-full h-20 mt-20 bg-white px-12 shadow-lg pt-2 pb-10">
          <Submit />
        </div>
      </div>
    </div>
  );
};

export default AddDataRole;
