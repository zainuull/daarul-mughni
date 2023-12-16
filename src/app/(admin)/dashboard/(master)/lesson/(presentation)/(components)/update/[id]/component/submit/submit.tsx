'use client';
import { useState } from 'react';
import useData from '../../../../navigation/store/store.lesson';
import { useRouter } from 'next/navigation';
import { NotifyService, ToastifyService } from '@/core/services/notify/notifyService';
import useViewModel from '../../../../../vm/view-model';
import { HandleError } from '@/core/services/handleError/handleError';

const Submit = () => {
  const { updateLesson } = useViewModel();
  const [error, setError] = useState('');
  const [form] = useData();
  const router = useRouter();
  const notifyService = new NotifyService();
  const toastService = new ToastifyService();

  const handleSubmit = () => {
    if (!form.name) {
      setError('Nama Pelajaran Wajib di isi');
      notifyService.emptyInputField();
      return;
    }
    notifyService.confirmationCreate().then((res) => {
      if (res) {
        updateLesson(form.id, form)
          .then(() => {
            toastService.successCreate();
            router.back();
          })
          .catch((err) => {
            HandleError(err);
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
