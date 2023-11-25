'use client';
import { updateTeacher } from '@/services/api';
import useDataTeacher from '../../../store/store.teacher';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { NotifyService } from '@/services/notify/notifyService';

const Submit = ({ id }: { id: string }) => {
  const [error, setError] = useState('');
  const [formTeacher, setFormTeacher] = useDataTeacher();
  const router = useRouter();
  const notifyService = new NotifyService();

  const handleSubmit = async () => {
    if (!formTeacher.name || !formTeacher.email) {
      setError('Nama dan email harus di isi');
      notifyService.emptyInputField();
      return;
    }
    notifyService.confirmationUpdate().then(async (res) => {
      if (res) {
        notifyService.successUpdate();
        await updateTeacher(id, formTeacher);
        router.push('/dashboard/guru');
        setFormTeacher({
          ...formTeacher,
          name: '',
          date_of_birth: '',
          telp: '',
          email: '',
          nip: '',
          ijazah: '',
          positionName: '',
          period_work: '',
          gender: '',
          age: '',
          status: '',
        });
      }
    });
  };

  const handleReset = async () => {
    notifyService.confirmationReset().then((res) => {
      if (res) {
        router.back();
      }
    });
  };

  return (
    <div className="w-full flex justify-end items-center gap-x-6">
      {error && <p className="text-red-600">{error}</p>}
      <button
        onClick={handleReset}
        className="w-1/3 font-medium py-2 bg-gray-200 rounded-md hover:shadow-md transition-all">
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
