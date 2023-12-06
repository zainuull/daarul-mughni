'use client';
import Image from 'next/image';
import { MdOutlineDriveFileRenameOutline, MdOutlinePhone, MdOutlinePayment } from 'react-icons/md';
import { LuKeySquare } from 'react-icons/lu';
import { CiCalendarDate } from 'react-icons/ci';
import { BsGenderMale } from 'react-icons/bs';
import { HiOutlineMapPin } from 'react-icons/hi2';
import { FcBusinessman } from 'react-icons/fc';
import { FaRegCalendarCheck, FaEnvelopeOpenText } from 'react-icons/fa';
import { useEffect } from 'react';
import { NotifyService } from '@/core/services/notify/notifyService';
import Swal from 'sweetalert2';
import useStatus from '@/app/(admin)/dashboard/store/store.status';
import Header from '@/app/(admin)/dashboard/components/header/header';
import useViewModel from '../../../vm/view.model';

const DetailStudent = ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const { getStudentById, detailStudent } = useViewModel();
  const notifyService = new NotifyService();
  const [menu] = useStatus();
  const data: any = detailStudent?.data;

  useEffect(() => {
    notifyService.showLoading();
    fetchData();
  }, []);

  const fetchData = () => {
    getStudentById(id).then(() => {
      Swal.close();
    });
  };

  return (
    <div className="w-full flex justify-end">
      <div
        className={`p-10 ${
          menu ? 'w-[88vw]' : 'w-[75vw]'
        } h-full flex flex-col gap-y-4 transition-all duration-700`}>
        <Header title="Detail Data Siswa" />
        <div className="w-full min-h-[600px] border-2 border-black rounded-lg p-4 flex flex-col gap-y-6 bg-slate-50">
          <div className="w-full h-1/2 flex items-center  gap-x-4">
            <div className="w-1/2 h-1/2 flex flex-col gap-y-2 rounded-lg">
              <div className="w-full h-1/2 p-4 flex justify-center items-center rounded-lg">
                {data?.image ? (
                  <Image
                    src={data?.image}
                    alt={data?.name}
                    width={250}
                    height={300}
                    className="w-full h-[250px] object-cover"
                  />
                ) : (
                  <FcBusinessman size={200} />
                )}
              </div>
            </div>
            <div className="w-[70vh] h-1/2 flex flex-col gap-y-2 shadow-lg rounded-lg bg-white p-4">
              <div className="w-full flex gap-x-2">
                <div className="w-1/2 flex flex-col gap-y-4">
                  <div className="flex items-center gap-x-2 text-sm lg:text-base">
                    <MdOutlineDriveFileRenameOutline size={20} />
                    <h1>Nama</h1>
                  </div>
                  <div className="flex items-center gap-x-2 text-sm lg:text-base">
                    <LuKeySquare size={20} />
                    <h1>NISN</h1>
                  </div>
                  <div className="flex items-center gap-x-2 text-sm lg:text-base">
                    <CiCalendarDate size={20} />
                    <h1>Tanggal Lahir</h1>
                  </div>
                  <div className="flex items-center gap-x-2 text-sm lg:text-base">
                    <BsGenderMale size={20} />
                    <h1>Jenis Kelamin</h1>
                  </div>
                  <div className="flex items-center gap-x-2 text-sm lg:text-base">
                    <HiOutlineMapPin size={20} />
                    <h1>Alamat</h1>
                  </div>
                  <div className="flex items-center gap-x-2 text-sm lg:text-base">
                    <MdOutlinePhone size={20} />
                    <h1>No Hp (Wali)</h1>
                  </div>
                </div>
                <div className="w-1/2 flex flex-col gap-y-4 text-sm lg:text-base">
                  <h1> : {data?.name}</h1>
                  <h1> : {data?.nisn}</h1>
                  <h1> : {data?.date_of_birth}</h1>
                  <h1> : {data?.gender}</h1>
                  <h1> : {data?.address || '-'}</h1>
                  <h1> : {data?.guardian_telp || '-'}</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-1/2 flex items-center  gap-x-4">
            <div className="w-1/2 h-20 flex items-center justify-center gap-x-6 shadow-lg bg-white">
              <FaRegCalendarCheck size={35} />
              <button className="py-2 w-[150px] text-sm lg:w-[200px] lg:text-base bg-blue-400 rounded-lg hover:bg-blue-500 transition-all duration-300">
                Cek Kehadiran
              </button>
            </div>
            <div className="w-1/2 h-20 flex items-center justify-center gap-x-6 shadow-lg bg-white">
              <MdOutlinePayment size={35} />
              <button className="py-2 w-[150px] text-sm lg:w-[200px] lg:text-base bg-green-400 rounded-lg hover:bg-green-500 transition-all duration-300">
                Mutasi Pembayaran
              </button>
            </div>
          </div>
          <div className="w-full h-44 flex flex-col gap-x-4 shadow-lg p-4 px-8 bg-white">
            <div className="flex items-center gap-x-2">
              <FaEnvelopeOpenText />
              <h1>Catatan : </h1>
            </div>
            <div>
              <textarea
                className="w-full h-32 p-2 bg-transparent outline-none"
                placeholder="Catatan siswa"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailStudent;
