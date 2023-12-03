'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import useDataEvents from '../../../../../store/store.events';
import { NotifyService, ToastifyService } from '@/core/services/notify/notifyService';
import useViewModel from '../../../../../vm/view.model';
import { HandleError } from '@/core/services/handleError/handleError';

const Submit = ({ id }: { id: string }) => {
  const { updateEvent } = useViewModel();
  const [error, setError] = useState('');
  const [form] = useDataEvents();
  const router = useRouter();
  const notifyService = new NotifyService();
  const toastService = new ToastifyService();

  const handleSubmit = () => {
    if (!form?.title || !form?.description) {
      setError('Title and description must be fill');
      notifyService.emptyInputField();
      return;
    }
    notifyService.confirmationUpdate().then((res) => {
      if (res) {
        updateEvent(id, form)
          .then(() => {
            toastService.successUpdate();
            router.push('/dashboard/activity');
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
        Update
      </button>
    </div>
  );
};

export default Submit;
