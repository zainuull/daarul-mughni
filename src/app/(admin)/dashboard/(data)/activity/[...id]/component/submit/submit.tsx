'use client';
import useForm from '@/app/(admin)/dashboard/store/store.status';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const Submit = ({ id }: { id: string }) => {
  const [error, setError] = useState('');
  const [form] = useForm();
  const router = useRouter();

  const handleSubmit = async () => {
    if (!form?.title || !form?.description) {
      setError('Title and description must be fill');
      return;
    }

    try {
      const res = await fetch(`http://localhost:3000/api/events/${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(form || ''),
      });

      if (res.ok) {
        router.push('/dashboard/activity');
      }
    } catch (error) {
      console.log(error);
    }
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
        Update
      </button>
    </div>
  );
};

export default Submit;
