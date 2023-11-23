'use client';
import { postAbsensi, updateAbsensi } from '@/services/api';
import useDataAbsensi from '../../../store/store.absensi';
import { useRouter } from 'next/navigation';
const Submit = ({ id }: { id: string }) => {
  const [formAbsensi, setFormAbsensi] = useDataAbsensi();
  const router = useRouter();

  const handleSubmit = async () => {
    await updateAbsensi(id, formAbsensi);
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
  };

  return (
    <div className="w-full flex justify-end items-center gap-x-6">
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
