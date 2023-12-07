import prisma from '@/lib/prismadb';
import { NextResponse } from 'next/server';

export const GET = async (req: Request, { params }: { params: { id: string } }) => {
  const id = params.id;

  try {
    const data = await prisma.absensi.findUnique({
      where: { id },
      include: {
        classType: { include: { students: true } },
      },
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

export const DELETE = async (req: Request, { params }: { params: { id: string } }) => {
  const id = params.id;

  try {
    const data = await prisma.absensi.delete({ where: { id } });

    if (!data) {
      return NextResponse.json({ status_code: 404, message: `Data can't be deleted`, data: [] });
    }
    return NextResponse.json({ status_code: 200, message: 'Success to delete', data });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status_code: 500, message: 'Some error occurred', error });
  }
};

export const PUT = async (req: Request, { params }: { params: { id: string } }) => {
  const id = params.id;
  const { levelName, className, classTypeName, teacher, lesson,start_time, end_time } =
    await req.json();
  try {
    const data = await prisma.absensi.update({
      where: { id },
      data: {
        levelName,
        className,
        classTypeName,
        teacher,
        lesson,
        start_time,
        end_time,
      },
    });
    if (!data) {
      return NextResponse.json({ status_code: 404, message: 'Data can not be updated', data: [] });
    }
    return NextResponse.json({ status_code: 200, message: 'Success to update', data });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status_code: 500, message: 'Some error occurred', error });
  }
};
