'use client';
import useDataAbsensi from '../../../../../store/store.absensi';
import { useRouter } from 'next/navigation';
import { NotifyService, ToastifyService } from '@/core/services/notify/notifyService';
import { useState } from 'react';
import useViewModel from '../../../../../vm/view.model';
import { HandleError } from '@/core/services/handleError/handleError';
const Submit = ({ id }: { id: string }) => {
  const { updateAbsensi, getAbsensi } = useViewModel();
  const [formAbsensi] = useDataAbsensi();
  const router = useRouter();
  const [error, setError] = useState('');
  const notifyService = new NotifyService();
  const toastService = new ToastifyService();

  const handleSubmit = () => {
    if (!formAbsensi?.classTypeName || !formAbsensi?.lesson) {
      setError('Kode kelas dan pelajaran wajib di isi');
      notifyService.emptyInputField();
      return;
    }
    notifyService.confirmationUpdate().then((res) => {
      if (res) {
        updateAbsensi(id, formAbsensi)
          .then(() => {
            toastService.successUpdate();
            getAbsensi()
            router.push('/dashboard/absensi');
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
