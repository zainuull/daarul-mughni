'use client';
import { Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow,Text } from '@tremor/react';
import { FaTrash } from 'react-icons/fa';
import { PiPencilLineLight } from 'react-icons/pi';

const data = [
  {
    id_class: 'A-1',
    class: 'MTs VII',
    teacher: 'Ustdz. Zainul',
    start_time: '08:30',
    end_time: '10:30',
    lesson: 'Bahasa Arab',
    status: true,
  },
  {
    id_class: 'A-1',
    class: 'MTs VII',
    teacher: 'Ustdz. Zainul',
    start_time: '08:30',
    end_time: '10:30',
    lesson: 'Bahasa Arab',
    status: true,
  },
  {
    id_class: 'A-1',
    class: 'MTs VII',
    teacher: 'Ustdz. Zainul',
    start_time: '08:30',
    end_time: '10:30',
    lesson: 'Bahasa Arab',
    status: false,
  },
  {
    id_class: 'A-1',
    class: 'MTs VII',
    teacher: 'Ustdz. Zainul',
    start_time: '08:30',
    end_time: '10:30',
    lesson: 'Bahasa Arab',
    status: true,
  },
  {
    id_class: 'A-1',
    class: 'MTs VII',
    teacher: 'Ustdz. Zainul',
    start_time: '08:30',
    end_time: '10:30',
    lesson: 'Bahasa Arab',
    status: true,
  },
];

const TableList = () => {
  return (
    <Table className="mt-5">
      <TableHead>
        <TableRow>
          <TableHeaderCell>Kode Kelas</TableHeaderCell>
          <TableHeaderCell>Kelas</TableHeaderCell>
          <TableHeaderCell>Pengajar</TableHeaderCell>
          <TableHeaderCell>Jam Mulai - Selesai</TableHeaderCell>
          <TableHeaderCell>Nama Pelajaran</TableHeaderCell>
          <TableHeaderCell>Status</TableHeaderCell>
          <TableHeaderCell>Edit</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((item) => (
          <TableRow key={item.id_class}>
            <TableCell>{item.id_class}</TableCell>
            <TableCell>{item.class}</TableCell>
            <TableCell>{item.teacher}</TableCell>
            <TableCell className="flex items-center gap-x-2">
              <Text>{item.start_time} - {item?.end_time}</Text>
            </TableCell>
            <TableCell>{item.lesson}</TableCell>
            <TableCell>
              {item?.status ? (
                <button className="w-[100px] py-1 bg-green-500 hover:bg-green-600 transition-all text-white rounded-md">
                  Mulai
                </button>
              ) : (
                <button className="w-[100px] py-1 bg-red-500 hover:bg-red-600 transition-all text-white rounded-md">
                  Selesai
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
