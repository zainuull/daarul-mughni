import DataPersonal from './component/form/personal/personal';
import Submit from './component/submit/submit';

const AddDataGuru = () => {
  return (
    <div className="w-full min-h-screen p-6">
      <div className="w-full h-full flex flex-col">
        <div className="p-4">
          <h1 className="text-2xl uppercase font-medium">Input Data</h1>
        </div>
        <div className="w-full p-4 bg-white rounded-lg shadow-lg">
          <DataPersonal />
        </div>
        {/* <div className="w-full p-4 bg-white rounded-lg shadow-lg mt-8">
          <DataGlobal />
        </div> */}
        <div className="w-full h-20 mt-8 bg-white px-12 shadow-lg flex justify-center">
          <Submit />
        </div>
      </div>
    </div>
  );
};

export default AddDataGuru;
