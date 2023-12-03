'use client';
import useDataTeacher from '../../../../../store/store.teacher';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { NotifyService, ToastifyService } from '@/core/services/notify/notifyService';
import useViewModel from '../../../../../vm/view-model';
import { HandleError } from '@/core/services/handleError/handleError';

const Submit = ({ id }: { id: string }) => {
  const { updateTeacher, getTeachers } = useViewModel();
  const [error, setError] = useState('');
  const [formTeacher] = useDataTeacher();
  const router = useRouter();
  const notifyService = new NotifyService();
  const toastService = new ToastifyService();
  

  const handleSubmit = async () => {
    if (!formTeacher.name || !formTeacher.email) {
      setError('Nama dan email harus di isi');
      notifyService.emptyInputField();
      return;
    }
    notifyService.confirmationUpdate().then((res) => {
      if (res) {
        updateTeacher(id, formTeacher)
          .then(() => {
            toastService.successUpdate();
            getTeachers();
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
