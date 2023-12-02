'use client';
import { postEvent } from '@/services/api';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import useDataEvents from '../../../store/store.events';
import { NotifyService, ToastifyService } from '@/core/services/notify/notifyService';

const Submit = () => {
  const [error, setError] = useState('');
  const [form, setForm] = useDataEvents();
  const router = useRouter();
  const notifyService = new NotifyService();
  const toastService = new ToastifyService();

  const handleSubmit = async () => {
    if (!form?.title || !form?.description) {
      setError('Nama acara dan deskripsi harus di isi');
      notifyService.emptyInputField();
      return;
    }
    notifyService.confirmationCreate().then(async (res) => {
      if (res) {
        await postEvent(form);
        toastService.successCreate();
        router.push('/dashboard/activity');
        setForm({
          ...form,
          title: '',
          description: '',
          person_responsible: '',
          telp_person_responsible: '',
          place_event: '',
          date_event: '',
          section: '',
          imageUrl: '',
          publicId: '123',
          selected_category: '',
          total_cost: '',
          status: '',
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
