import { MdOutlineDriveFileRenameOutline } from 'react-icons/md';
import { LuKeySquare } from 'react-icons/lu';
import { CiCalendarDate } from 'react-icons/ci';
import { BsGenderMale } from 'react-icons/bs';
import { HiOutlineMapPin } from 'react-icons/hi2';
import { FcBusinessman } from 'react-icons/fc';
import { useSession } from 'next-auth/react';

const About = () => {
  const { data } = useSession();
  const user = data?.user;

  
  return (
    <div className="bg-white w-full rounded-lg min-h-52 py-10 flex flex-col shadow-xl">
      <div className="grid grid-cols-12">
        <div className="col-span-4 flex justify-center items-center">
          <FcBusinessman size={200} />
        </div>
        <div className="col-span-8 flex">
          <div className="w-1/2 flex flex-col gap-y-4">
            <div className="flex items-center gap-x-2 text-sm lg:text-base">
              <MdOutlineDriveFileRenameOutline size={20} />
              <h1>Nama</h1>
            </div>
            <div className="flex items-center gap-x-2 text-sm lg:text-base">
              <LuKeySquare size={20} />
              <h1>NUPTK</h1>
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
              <h1>Alamat</h1>
            </div>
          </div>
          <div className="w-full flex flex-col gap-y-4 text-sm lg:text-base">
            <h1> : {user?.name}</h1>
            <h1> : 123</h1>
            <h1> : {user?.email}</h1>
            <h1> : Walas</h1>
            <h1> : Bekasi</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
