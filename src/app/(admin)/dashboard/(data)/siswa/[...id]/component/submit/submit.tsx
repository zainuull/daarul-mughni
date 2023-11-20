'use client';
import { useState } from 'react';
import useDataStudent from '../../../store/store.student';
import { useRouter } from 'next/navigation';
import { postStudent, updateStudent } from '@/services/api';

const Submit = ({ id }: { id: string }) => {
  const [error, setError] = useState('');
  const [datas, setDatas] = useDataStudent();
  const router = useRouter();

  const handleSubmit = async () => {
    if (!datas.name && !datas.guardian_name) {
      setError('Nama dan Nama Wali wajib diisi');
      return;
    }
    await updateStudent(id, datas);
    router.push('/dashboard/siswa');
    setDatas({
      ...datas,
      id: '',
      name: '',
      date_of_birth: '',
      ijazah: '',
      gender: '',
      nisn: '',
      guardian_name: '',
      guardian_status: '',
      guardian_telp: '',
      guardian_email: '',
      status_payment: '',
      address: '',
      kelas: '',
    });
  };
  return (
    <div className="w-full flex justify-end items-center gap-x-6">
      {error && <p className="text-red-600">{error}</p>}
      <button className="w-1/3 font-medium py-2 bg-gray-200 rounded-md hover:shadow-md transition-all">
        Reset
      </button>
      <button
        onClick={handleSubmit}
        className="w-1/3 font-medium py-2 bg-primary rounded-md hover:shadow-md transition-all">
        Simpan
      </button>
    </div>
  );
};

export default Submit;
