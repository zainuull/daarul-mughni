'use client';
import dynamic from 'next/dynamic';
import { BsSearch } from 'react-icons/bs';
import useData from './store/store.lesson';
import Header from '@/app/(admin)/dashboard/components/header/header';
import { useSession } from 'next-auth/react';
import { IUser } from '@/model/user';
import useStatus from '@/app/(admin)/dashboard/store/store.status';
import { useRouter } from 'next/navigation';

const TableList = dynamic(() => import('../list/list'));

const Navigation = () => {
  const [form, setForm] = useData();
  const { data } = useSession();
  const user: IUser = data?.user;
  const [menu] = useStatus();
  const router = useRouter();

  const handleAdd = () => {
    router.push('/dashboard/lesson/create');
    setForm({
      ...form,
      id: '',
      name: '',
      levelName: '',
    });
  };

  return (
    <div
      className={`p-10 ${
        menu ? 'w-[88vw]' : 'w-[75vw]'
      } h-full flex flex-col gap-y-4 transition-all duration-700`}>
      <Header title="Pelajaran" />
      <div className="w-full flex items-center justify-between mt-2">
        <h2 className="font-light uppercase">List Pelajaran</h2>
        {user?.role === 'administrator' && (
          <button
            onClick={handleAdd}
            className="px-2 py-2 bg-primary rounded-lg text-slate-700 lg:px-6">
            Tambah Pelajaran
          </button>
        )}
      </div>
      <div className="w-full gap-x-6 sm:gap-x-4">
        <div className="col-span-8 flex items-center gap-x-2 px-3 py-2 rounded-xl border border-primary">
          <BsSearch />
          <input className="w-full outline-none" placeholder="Cari Data" />
        </div>
      </div>
      <TableList />
    </div>
  );
};

export default Navigation;
