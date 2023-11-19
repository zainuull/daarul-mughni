'use client';
import useForm from '@/app/(admin)/dashboard/store/store.status';
import { postEvent } from '@/services/api';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const Submit = () => {
  const [error, setError] = useState('');
  const [form, setForm] = useForm();
  const router = useRouter();

  const handleSubmit = async () => {
    if (!form?.title || !form?.description) {
      setError('Title and description must be fill');
      return;
    }

    await postEvent(form);
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
