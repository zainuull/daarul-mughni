'use client';
import Header from '@/app/(admin)/dashboard/components/header/header';
import useStatus from '@/app/(admin)/dashboard/store/store.status';
import { getAbsensiById } from '@/services/api';
import { NotifyService } from '@/services/notify/notifyService';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const DetailAbsensi = ({ params }: { params: { id: string } }) => {
  const id = params?.id;
  const [data, setData]: any = useState();
  const notifyService = new NotifyService();
  const [menu] = useStatus();

  useEffect(() => {
    notifyService.showLoading();
    fetchData();
  }, []);

  const fetchData = () => {
    getAbsensiById(id).then((res) => {
      setData(res?.data);
      Swal.close();
    });
  };

  console.log(data);

  return (
    <div className="w-full flex justify-end">
      <div
        className={`p-10 ${
          menu ? 'w-[1300px]' : 'w-3/4'
        } h-full flex flex-col gap-y-4 transition-all duration-700`}>
        <Header title="Detail Data Absensi" />
      </div>
    </div>
  );
};

export default DetailAbsensi;
