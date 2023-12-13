'use client';
import Image from 'next/image';
import { MdOutlineDriveFileRenameOutline } from 'react-icons/md';
import { LuKeySquare } from 'react-icons/lu';
import { CiCalendarDate } from 'react-icons/ci';
import { BsGenderMale } from 'react-icons/bs';
import { HiOutlineMapPin } from 'react-icons/hi2';
import { FcBusinessman } from 'react-icons/fc';
import useViewModel from '../..//vm/view-model';
import { useEffect } from 'react';
import { NotifyService } from '@/core/services/notify/notifyService';
import { HandleError } from '@/core/services/handleError/handleError';
import useStoreDatas from '../../store/store.datas';
import { useSession } from 'next-auth/react';
import { IUser } from '@/model/user';

const About = () => {
  const { getUserById } = useViewModel();
  const { data }: any = useSession();
  const [detailUser] = useStoreDatas();
  const notifyService = new NotifyService();
  const user: IUser = detailUser?.data;

  useEffect(() => {
    notifyService.showLoading();
    fetchData(data?.user?.id);
  }, [data?.user?.id]);

  const fetchData = (id: string) => {
    getUserById(id)
      .then(() => {
        notifyService.closeSwal();
      })
      .catch((err) => {
        HandleError(err);
      });
  };

  return (
    <div className="bg-white w-full rounded-lg min-h-52 py-10 flex flex-col shadow-xl px-6">
      <div className="grid grid-cols-12 gap-10">
        <div className="col-span-4 flex justify-center items-center">
          {user?.imageUrl ? (
            <Image
              src={user?.imageUrl}
              alt={user?.name}
              width={250}
              height={300}
              className="w-full h-[250px] object-cover rounded-lg"
            />
          ) : (
            <FcBusinessman size={200} />
          )}
        </div>
        <div className="col-span-8 flex">
          <div className="w-1/2 flex flex-col gap-y-4">
            <div className="flex items-center gap-x-2 text-sm lg:text-base">
              <MdOutlineDriveFileRenameOutline size={20} />
              <h1>Nama</h1>
            </div>
            <div className="flex items-center gap-x-2 text-sm lg:text-base">
              <LuKeySquare size={20} />
              <h1>NIP</h1>
            </div>
            <div className="flex items-center gap-x-2 text-sm lg:text-base">
              <CiCalendarDate size={20} />
              <h1>Email</h1>
            </div>
            <div className="flex items-center gap-x-2 text-sm lg:text-base">
              <BsGenderMale size={20} />
              <h1>Status</h1>
            </div>
            <div className="flex items-center gap-x-2 text-sm lg:text-base">
              <HiOutlineMapPin size={20} />
              <h1>No Telp</h1>
            </div>
          </div>
          <div className="w-full flex flex-col gap-y-4 text-sm lg:text-base">
            <h1> : {user?.name}</h1>
            <h1> : {user?.nip}</h1>
            <h1> : {user?.email}</h1>
            <h1> : {user?.positionName}</h1>
            <h1> : {user?.telp}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
