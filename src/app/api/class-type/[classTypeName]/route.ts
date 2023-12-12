import prisma from '@/lib/prismadb';
import { NextResponse } from 'next/server';

export const GET = async (req: Request, { params }: { params: { classTypeName: string } }) => {
  const classTypeName = params.classTypeName;
  try {
    const data = await prisma.classType.findUnique({
      where: { classTypeName },
      include: { students: { include: { recapitulation: true } }, absensi: true },
    });
    if (!data) {
      return NextResponse.json({ status_code: 404, message: 'Data not found', data: [] });
    }
    return NextResponse.json({ status_code: 200, message: 'Success to fetch data by id', data });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status_code: 500, message: 'Some error occurred', error });
  }
};
