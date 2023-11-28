'use client';
import Header from '@/app/(admin)/dashboard/components/header/header';
import DataGlobal from './component/form/global/global';
import DataPersonal from './component/form/personal/personal';
import Submit from './component/submit/submit';
import { NotifyService } from '@/services/notify/notifyService';

const UpdateDataGuru = ({ params }: { params: { id: string } }) => {
  const id = params?.id;
  const notifyService = new NotifyService();
  if (!id) {
    notifyService.showLoading();
  }

  return (
    <div className="w-full min-h-screen p-6">
      <div className="w-full h-full flex flex-col">
        <Header title="Update Data Guru" />
        <div className="w-full p-4 bg-white rounded-lg shadow-lg">
          <DataPersonal id={id} />
        </div>
        <div className="w-full p-4 bg-white rounded-lg shadow-lg mt-8">
          <DataGlobal id={id} />
        </div>
        <div className="w-full h-20 mt-8 bg-white px-12 shadow-lg flex justify-center">
          <Submit id={id} />
        </div>
      </div>
    </div>
  );
};

export default UpdateDataGuru;