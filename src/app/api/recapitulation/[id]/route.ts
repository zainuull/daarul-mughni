import prisma from '@/lib/prismadb';
import { NextResponse } from 'next/server';

export const GET = async (req: Request, { params }: { params: { id: string } }) => {
  const id = params?.id;
  try {
    const data = await prisma.recapitulation.findUnique({
      where: { id },
      include: { Student: true },
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


export const PUT = async (req: Request, { params }: { params: { id: string } }) => {
  const id = params?.id;
  const { date, lesson, student, present } = await req.json();
  try {
    const data = await prisma.recapitulation.update({
      where: { id },
      data: {
        date,
        lesson,
        student,
        present,
      },
    });
    if (!data) {
      return NextResponse.json({ status_code: 404, message: 'Data not found', data: [] });
    }
    return NextResponse.json({ status_code: 200, message: 'Success to update data', data });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status_code: 500, message: 'Some error occurred', error });
  }
}

