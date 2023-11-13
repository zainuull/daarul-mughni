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
    name: 'Viola Amherd',
    Role: 'Federal Councillor',
    nip: '123456789',
    status: true,
  },
  {
    name: 'Simonetta Sommaruga',
    Role: 'Federal Councillor',
    nip: '123456789',
    status: true,
  },
  {
    name: 'Alain Berset',
    Role: 'Federal Councillor',
    nip: '123456789',
    status: false,
  },
  {
    name: 'Ignazio Cassis',
    Role: 'Federal Councillor',
    nip: '123456789',
    status: true,
  },
  {
    name: 'Karin Keller-Sutter',
    Role: 'Federal Councillor',
    nip: '123456789',
    status: true,
  },
];

const TableList = () => {
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
        {data.map((item) => (
          <TableRow key={item.name}>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.Role}</TableCell>
            <TableCell>{item.nip}</TableCell>
            <TableCell>
              {item?.status ? (
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
