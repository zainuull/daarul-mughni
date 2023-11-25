'use client';
import {updateAbsensi } from '@/services/api';
import useDataAbsensi from '../../../store/store.absensi';
import { useRouter } from 'next/navigation';
import { NotifyService } from '@/services/notify/notifyService';
import { useState } from 'react';
const Submit = ({ id }: { id: string }) => {
  const [formAbsensi, setFormAbsensi] = useDataAbsensi();
  const router = useRouter();
  const [error, setError] = useState('');
  const notifyService = new NotifyService();

  const handleSubmit = async () => {
    if (!formAbsensi?.code_class || !formAbsensi?.lesson) {
      setError('Kode kelas dan pelajaran wajib di isi');
      notifyService.emptyInputField();
      return;
    }
    notifyService.confirmationUpdate().then(async (res) => {
      if (res) {
        await updateAbsensi(id, formAbsensi);
        notifyService.successUpdate()
        router.push('/dashboard/absensi');
        setFormAbsensi({
          ...formAbsensi,
          levelName: '',
          code_class: '',
          className: '',
          teacher: '',
          lesson: '',
          start_time: '',
          end_time: '',
        });
      }
    });
  };

  const handleReset = async () => {
    notifyService.confirmationReset().then((res) => {
      if (res) {
        window.location.reload();
      }
    });
  };

  return (
    <div className="w-full flex justify-end items-center gap-x-6">
      {error && <p className="text-red-600 text-sm">{error}</p>}
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
