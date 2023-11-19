import { getEvents } from '@/services/api';
import { Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow } from '@tremor/react';
import Link from 'next/link';
import { FaTrash } from 'react-icons/fa';
import { PiPencilLineLight } from 'react-icons/pi';

const TableList = async () => {
  const events = await getEvents();
  const event = events?.events;

  return (
    <Table className="mt-5">
      <TableHead>
        <TableRow>
          <TableHeaderCell>Nama Kegiatan</TableHeaderCell>
          <TableHeaderCell>Bagian</TableHeaderCell>
          <TableHeaderCell>Penanggung Jawab</TableHeaderCell>
          <TableHeaderCell>Tanggal Kegiatan</TableHeaderCell>
          <TableHeaderCell>Tempat Acara</TableHeaderCell>
          <TableHeaderCell className="text-center">Status</TableHeaderCell>
          <TableHeaderCell>Edit</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {event.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.title}</TableCell>
            <TableCell>{item.cooperation}</TableCell>
            <TableCell>Ustdz. {item.person_responsible}</TableCell>
            <TableCell>{item.date_event}</TableCell>
            <TableCell>{item.place_event}</TableCell>
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
                <Link href={`/dashboard/activity/${item?.id}`}>
                  <PiPencilLineLight />
                </Link>
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
