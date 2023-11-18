'use client';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from '@tremor/react';
import { FaTrash } from 'react-icons/fa';
import { PiPencilLineLight } from 'react-icons/pi';

const data = [
  {
    name: 'Pembukaan Pramuka',
    section: 'Bag. Pramuka',
    person_responsible: 'Ustdz. Zainul',
    tgl_activity:'16-02-2023',
    place:'Aula',
    status: true,
  },
  {
    name: 'Stadium General',
    section: 'Bag. Kesehatan',
    person_responsible: 'Ustdz. Zainul',
    tgl_activity:'16-02-2023',
    place:'Aula',
    status: true,
  },
  {
    name: 'Panggung Gembira',
    section: 'Bag. Kesenian',
    person_responsible: 'Ustdz. Zainul',
    tgl_activity:'16-02-2023',
    place:'Aula',
    status: false,
  },
  {
    name: 'Tawaquf',
    section: 'Bag. Kesenian',
    person_responsible: 'Ustdz. Zainul',
    tgl_activity:'16-02-2023',
    place:'Aula',
    status: true,
  },
  {
    name: 'Vocab Drill',
    section: 'Bag. Bahasa',
    person_responsible: 'Ustdz. Zainul',
    tgl_activity:'16-02-2023',
    place:'Aula',
    status: true,
  },
];

const TableList = () => {
  return (
    <Table className="mt-5">
      <TableHead>
        <TableRow>
          <TableHeaderCell>Nama Kegiatan</TableHeaderCell>
          <TableHeaderCell>Bagian</TableHeaderCell>
          <TableHeaderCell>Penanggung Jawab</TableHeaderCell>
          <TableHeaderCell>Tanggal Kegiatan</TableHeaderCell>
          <TableHeaderCell>Tempat Acara</TableHeaderCell>
          <TableHeaderCell className='text-center'>Status</TableHeaderCell>
          <TableHeaderCell>Edit</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((item) => (
          <TableRow key={item.name}>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.section}</TableCell>
            <TableCell>{item.person_responsible}</TableCell>
            <TableCell>{item.tgl_activity}</TableCell>
            <TableCell>{item.place}</TableCell>
            <TableCell>
              {item?.status ? (
                <button className="w-[100px] py-1 bg-green-500 hover:bg-green-600 transition-all text-white rounded-md">
                  Selesai
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
