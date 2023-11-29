'use client';
import { NotifyService } from '@/services/notify/notifyService';
import DataGlobal from './component/form/global/golbal';
import DataPersonal from './component/form/personal/personal';
import Submit from './component/submit/submit';
import Header from '@/app/(admin)/dashboard/components/header/header';
import useStatus from '@/app/(admin)/dashboard/store/store.status';

const UpdateDataActivity = ({ params }: { params: { id: string } }) => {
  const id = params?.id;
  const notifyService = new NotifyService();
  const [menu] = useStatus();

  if (!id) {
    notifyService.showLoading();
  }

  return (
    <div className="w-full flex justify-end min-h-screen p-6">
      <div className={`${menu ? "w-[1200px]" : "w-3/4"} h-full flex flex-col transition-all duration-700`}>
        <Header title="Update Data Kegiatan" />
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

export default UpdateDataActivity;
