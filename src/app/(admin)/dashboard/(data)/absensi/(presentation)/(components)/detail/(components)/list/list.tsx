import { Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow } from '@tremor/react';
import { IStudentDataModel } from '@/app/(admin)/dashboard/(data)/student/domain/model/IModel';
import ToastNotify from '@/core/services/notify/toast';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import useViewModel from '../../../../vm/view.model';
import { NotifyService } from '@/core/services/notify/notifyService';

const TableList = ({ students, lesson, resultSearchData }) => {
  const { createRecapitulation, getRecapitulationById, detailRecap, updateRecapitulation } =
    useViewModel();
  const router = useRouter();
  let obj = { id: '', lesson: '', student: '', present: false };
  const notifyService = new NotifyService();
  const [isPresent, setIsPresent] = useState([]);
  const [isUpdate, setIsUpdate] = useState(true);
  const result = resultSearchData?.length ? resultSearchData : students;

  useEffect(() => {
    if (result) {
      let tempArray = [];
      result.forEach((obj) => {
        if (!obj.recapitulation?.length) {
          tempArray.push(false);
        } else {
          tempArray.push(true);
        }
      });
      setIsPresent(tempArray);
    }
  }, [result]);

  const handlePresent = (data: IStudentDataModel, index: number) => {
    const tempArray = [...isPresent];
    tempArray[index] = !isPresent[index];
    setIsPresent(tempArray);
    obj = {
      id: data?.recapitulation[0]?.id,
      lesson: lesson,
      student: data?.name,
      present: true,
    };
    console.log('obj', obj);

    if (isUpdate) {
      createRecapitulation(obj);
      console.log('isPresent', isPresent);
    } else {
      updateRecapitulation(obj.id, obj);
    }
    getRecapitulationById(data?.id);
  };

  const handleNotPresent = (data: IStudentDataModel, index: number) => {
    notifyService.confirmationUpdate().then((res) => {
      if (res) {
        const tempArray = [...isPresent];
        tempArray[index] = !isPresent[index];
        setIsPresent(tempArray);
        obj = {
          id: data?.recapitulation[0]?.id,
          lesson: lesson,
          student: data?.name,
          present: false,
        };
        console.log('obj', obj);

        setIsUpdate(false);
        updateRecapitulation(obj.id, obj);
        console.log('isPresent', isPresent);
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
        {result?.map((data: IStudentDataModel, index) => (
          <TableRow key={data.id}>
            <TableCell
              onClick={() => handleDetail(data?.id)}
              className="hover:font-bold transition-all cursor-pointer">
              {data.name}
            </TableCell>
            <TableCell>{data.nisn}</TableCell>
            <TableCell>
              {isPresent[index] ? (
                <button
                  onClick={() => handleNotPresent(data, index)}
                  className="w-[80px] lg:w-[100px] py-1 bg-green-500 hover:bg-green-600 transition-all text-white rounded-md">
                  Hadir
                </button>
              ) : (
                <button
                  onClick={() => handlePresent(data, index)}
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
