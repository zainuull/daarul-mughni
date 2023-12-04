'use client';
import { useState } from 'react';
import useDataStudent from '../../../../../store/store.student';
import { useRouter } from 'next/navigation';
import { NotifyService, ToastifyService } from '@/core/services/notify/notifyService';
import useViewModel from '../../../../../vm/view.model';
import { HandleError } from '@/core/services/handleError/handleError';

const Submit = ({ id }: { id: string }) => {
  const { updateStudent } = useViewModel();
  const [error, setError] = useState('');
  const [datas] = useDataStudent();
  const router = useRouter();
  const notifyService = new NotifyService();
  const toastService = new ToastifyService();

  const handleSubmit = () => {
    if (!datas.name || !datas.guardian_name) {
      setError('Nama dan nama wali wajib diisi');
      notifyService.emptyInputField();
      return;
    }
    notifyService.confirmationUpdate().then((res) => {
      if (res) {
        updateStudent(id, datas)
          .then(() => {
            toastService.successUpdate();
            router.back()
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
