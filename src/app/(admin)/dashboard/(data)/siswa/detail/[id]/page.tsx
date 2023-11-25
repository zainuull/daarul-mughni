import { getStudentById } from '@/services/api';
import Image from 'next/image';
import foto from '../../../../../../../../public/assets/logoDM.jpeg';
import { MdOutlineDriveFileRenameOutline } from 'react-icons/md';
import { LuKeySquare } from 'react-icons/lu';
import { CiCalendarDate } from 'react-icons/ci';
import { BsGenderMale } from 'react-icons/bs';
import { HiOutlineMapPin } from 'react-icons/hi2';

const DetailStudent = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const res = await getStudentById(id);
  const data: any = res?.data || [];
  console.log(data);

  return (
    <div className="w-full">
      <div className="p-10 w-full h-full flex flex-col gap-y-4 ">
        <h1 className="text-2xl uppercase font-medium">Detail Data Siswa</h1>
        <div className="w-full min-h-[600px] border-2 border-black rounded-lg p-4 flex justify-between gap-x-6">
          <div className="w-1/2 min-h-full flex flex-col gap-y-2 p-2 rounded-lg">
            <div className="w-full h-1/2 p-2 flex justify-center">
              <Image src={''} alt={data?.name} width={250} height={300} className="bg-cover bg-blue-600 p-2 rounded-lg" />
            </div>
            <div className="w-full h-1/2 bg-gray-300 p-2"></div>
          </div>
          <div className="w-3/4 min-h-full flex flex-col gap-y-2 bg-gray-200 p-2 font-semibold rounded-lg">
            <div className="w-full h-1/2 p-2 flex flex-col gap-y-2">
              <div className="w-full flex items-center gap-x-2">
                <div className="w-1/2 p-4 flex flex-col gap-y-2">
                  <div className="flex items-center gap-x-2">
                    <MdOutlineDriveFileRenameOutline size={20} />
                    <h1>Nama</h1>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <LuKeySquare size={20} />
                    <h1>Nisn</h1>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <CiCalendarDate size={20} />
                    <h1>Tempat & tgl lahir</h1>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <BsGenderMale size={20} />
                    <h1>Jenis Kelamin</h1>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <HiOutlineMapPin size={20} />
                    <h1>Alamat</h1>
                  </div>
                </div>
                <div className="w-1/2 p-4 flex flex-col gap-y-2">
                  <h1> : {data?.name}</h1>
                  <h1> : {data?.nisn}</h1>
                  <h1> : {data?.date_of_birth}</h1>
                  <h1> : {data?.gender}</h1>
                  <h1> : {data?.address || '-'}</h1>
                </div>
              </div>
            </div>
            <div className="w-full h-1/2 bg-gray-300 p-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailStudent;
