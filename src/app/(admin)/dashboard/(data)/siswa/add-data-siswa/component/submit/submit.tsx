'use client';
import { useState } from 'react';
import useDataStudent from '../../../store/store.student';
import { useRouter } from 'next/navigation';
import { postStudent } from '@/services/api';
import { NotifyService } from '@/services/notify/notifyService';

const Submit = () => {
  const [error, setError] = useState('');
  const [formStudent, setFormStudent] = useDataStudent();
  const router = useRouter();
  const notifyService = new NotifyService();

  const handleSubmit = async () => {
    if (!formStudent.name || !formStudent.guardian_name) {
      setError('Nama dan nama wali wajib di isi');
      notifyService.emptyInputField();
      return;
    }
    notifyService.confirmationCreate().then(async (res) => {
      if (res) {
        await postStudent(formStudent);
        notifyService.successCreate();
        router.push('/dashboard/siswa');
        setFormStudent({
          ...formStudent,
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
          className: '',
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
