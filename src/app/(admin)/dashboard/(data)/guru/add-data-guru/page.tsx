import DataGlobal from './component/global/golbal';
import DataPersonal from './component/personal/personal';
import Submit from './component/submit/submit';

const AddDataGuru = () => {
  return (
    <div className="w-4/5 min-h-screen">
      <div className="w-full h-full flex flex-col pt-20">
        <div className="p-4">
          <h1 className="text-2xl uppercase font-medium">Tambah Data Guru</h1>
        </div>
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

export default AddDataGuru;
