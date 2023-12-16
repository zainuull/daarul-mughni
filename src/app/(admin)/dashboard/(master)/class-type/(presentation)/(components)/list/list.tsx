'use client';
import { Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow } from '@tremor/react';
import { FaTrash } from 'react-icons/fa';
import { PiPencilLineLight } from 'react-icons/pi';
import Pagination from './pagination';
import { useEffect } from 'react';
import { IUser } from '@/model/model';
import { useRouter } from 'next/navigation';
import { NotifyService, ToastifyService } from '@/core/services/notify/notifyService';
import useStoreDatas from '../../store/store.datas';
import ToastNotify from '@/core/services/notify/toast';
import { useSession } from 'next-auth/react';
import useViewModel from '../../vm/view-model';
import { HandleError } from '@/core/services/handleError/handleError';
import { IClassTypeDataModel } from '../../../domain/model/IModel';
import useData from '../../store/store.class-type';

const TableList = () => {
  const { getClassType, deleteClassType } = useViewModel();
  const { data } = useSession();
  const [formClass, setFormClass] = useData();
  const router = useRouter();
  const [dataStore] = useStoreDatas();
  const notifyService = new NotifyService();
  const toastService = new ToastifyService();
  const result = dataStore?.data;
  const user: IUser = data?.user;

  useEffect(() => {
    notifyService.showLoading();
    fetchData();
  }, []);

  const fetchData = () => {
    getClassType()
      .then(() => {
        notifyService.closeSwal();
      })
      .catch((err) => {
        HandleError(err);
      });
  };

  const handleDelete = (id: string) => {
    notifyService.confirmationDelete().then((res) => {
      if (res) {
        deleteClassType(id)
          .then(() => {
            toastService.successDelete();
            fetchData();
          })
          .catch((err) => {
            HandleError(err);
          });
      }
    });
  };

  const handleUpdate = async (data: IClassTypeDataModel) => {
    router.push(`/dashboard/class-type/update/${data?.id}`);
    setFormClass({
      ...formClass,
      id: data?.id,
      name: data?.name,
      className: data?.className,
    });
  };

  return (
    <Table className="mt-5 min-h-[400px] relative pb-14 select-none">
      <TableHead>
        <TableRow>
          <TableHeaderCell>Kelas</TableHeaderCell>
          <TableHeaderCell>Nama Kode Kelas</TableHeaderCell>
          {user?.role === 'administrator' && <TableHeaderCell>Edit</TableHeaderCell>}
        </TableRow>
      </TableHead>
      <TableBody>
        {result &&
          result?.map((data: IClassTypeDataModel) => (
            <TableRow key={data.id}>
              <TableCell>{data.className}</TableCell>
              <TableCell>{data.name}</TableCell>
              {user?.role === 'administrator' && (
                <TableCell className="py-4">
                  <div className="flex gap-x-4 items-center">
                    <button onClick={() => handleUpdate(data)}>
                      <PiPencilLineLight />
                    </button>
                    <button onClick={() => handleDelete(data?.id)}>
                      <FaTrash className="text-red-400" />
                    </button>
                  </div>
                </TableCell>
              )}
            </TableRow>
          ))}
      </TableBody>
      <nav className="absolute right-0 bottom-0">
        <Pagination />
      </nav>
      <ToastNotify />
    </Table>
  );
};

export default TableList;
