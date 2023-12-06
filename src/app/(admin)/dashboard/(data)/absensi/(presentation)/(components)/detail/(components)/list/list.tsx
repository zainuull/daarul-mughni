import { Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow } from '@tremor/react';
import { IStudentDataModel } from '@/app/(admin)/dashboard/(data)/student/domain/model/IModel';
import ToastNotify from '@/core/services/notify/toast';
import { useRouter } from 'next/navigation';

const TableList = ({ students, resultSearchData }) => {
  const router = useRouter();
  const result = resultSearchData?.length ? resultSearchData : students;

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
              <button className="w-[100px] py-1 bg-red-500 hover:bg-red-600 transition-all text-white rounded-md">
                Tidak Hadir
              </button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <ToastNotify />
    </Table>
  );
};

export default TableList;
