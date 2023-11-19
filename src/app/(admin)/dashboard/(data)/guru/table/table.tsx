'use client';
import { ITeacherDataModel } from '@/model/event.model';
import { getTeachers } from '@/services/api';
import { Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow } from '@tremor/react';
import { useEffect, useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { PiPencilLineLight } from 'react-icons/pi';

const TableList = () => {
  const [data, setData] = useState<ITeacherDataModel[]>();

  useEffect(() => {
    const fetchData = async () => {
      const res = await getTeachers();
      setData(res?.data);
    };
    fetchData();
  }, []);

  return (
    <Table className="mt-5">
      <TableHead>
        <TableRow>
          <TableHeaderCell>Nama Guru</TableHeaderCell>
          <TableHeaderCell>Jabatan</TableHeaderCell>
          <TableHeaderCell>NIP</TableHeaderCell>
          <TableHeaderCell>Status</TableHeaderCell>
          <TableHeaderCell>Edit</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data &&
          data?.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.level}</TableCell>
              <TableCell>{item.nip}</TableCell>
              <TableCell>
                {item?.status == 'Aktif' ? (
                  <button className="w-[100px] py-1 bg-green-500 hover:bg-green-600 transition-all text-white rounded-md">
                    Aktif
                  </button>
                ) : (
                  <button className="w-[100px] py-1 bg-red-500 hover:bg-red-600 transition-all text-white rounded-md">
                    Pending
                  </button>
                )}
              </TableCell>
              <TableCell className="py-4">
                <div className="flex gap-x-4 items-center">
                  <PiPencilLineLight />
                  <FaTrash className="text-red-400" />
                </div>
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
};

export default TableList;
