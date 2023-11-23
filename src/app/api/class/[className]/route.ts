import prisma from '@/lib/prismadb';
import { NextResponse } from 'next/server';

export const GET = async (req: Request, { params }: { params: { className: string } }) => {
  const className = params?.className;
  try {
    const data = await prisma.class.findUnique({
      where: { className },
      include: { students: true, code_classes: true, absensi: true },
    });
    if (!data) {
      return NextResponse.json({ status_code: 404, message: 'Data not found', data: [] });
    }
    return NextResponse.json({
      status_code: 200,
      message: 'Success to fetch data by name Class',
      data,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status_code: 500, message: 'Some error occurred', error });
  }
};
