import { Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow } from '@tremor/react';
import { IStudentDataModel } from '@/app/(admin)/dashboard/(data)/student/domain/model/IModel';
import ToastNotify from '@/core/services/notify/toast';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import useViewModel from '../../../../vm/view.model';
import { NotifyService } from '@/core/services/notify/notifyService';

const TableList = ({ students, resultSearchData }) => {
  const { createRecapitulation, getRecapitulationById, detailRecap, updateRecapitulation } =
    useViewModel();
  const router = useRouter();
  let obj = { id: '', name: '', present: false };
  const notifyService = new NotifyService();

  const result = resultSearchData?.length ? resultSearchData : students;
  const [isPresent, setIsPresent] = useState<Boolean>(false);

  const handlePresent = (data: IStudentDataModel) => {
    setIsPresent(true);
    obj = {
      id: '',
      name: data?.name,
      present: true,
    };
    createRecapitulation(obj);
    getRecapitulationById(data?.id);
  };

  console.log(detailRecap);

  const handleNotPresent = (data: IStudentDataModel) => {
    notifyService.confirmationUpdate().then((res) => {
      if (res) {
        setIsPresent(false);
        obj = {
          id: detailRecap?.id,
          name: data?.name,
          present: false,
        };
        updateRecapitulation(obj.id, obj);
      }
    });
  };

  const handleDetail = (id: string) => {
    router.push(`/dashboard/student/detail/${id}`);
  };

  return (
    <Table className="mt-5 min-h-[400px] relative pb-14">
      <TableHead>
        <TableRow>
          <TableHeaderCell>Nama Siswa</TableHeaderCell>
          <TableHeaderCell>NISN</TableHeaderCell>
          <TableHeaderCell>Status</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {result?.map((data: IStudentDataModel) => (
          <TableRow key={data.id}>
            <TableCell
              onClick={() => handleDetail(data?.id)}
              className="hover:font-bold transition-all cursor-pointer">
              {data.name}
            </TableCell>
            <TableCell>{data.nisn}</TableCell>
            <TableCell>
              {isPresent ? (
                <button
                  onClick={() => handleNotPresent(data)}
                  className="w-[80px] lg:w-[100px] py-1 bg-green-500 hover:bg-green-600 transition-all text-white rounded-md">
                  Hadir
                </button>
              ) : (
                <button
                  onClick={() => handlePresent(data)}
                  className="w-[80px] lg:w-[100px] py-1 bg-red-500 hover:bg-red-600 transition-all text-white rounded-md">
                  Tidak Hadir
                </button>
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <ToastNotify />
    </Table>
  );
};

export default TableList;
