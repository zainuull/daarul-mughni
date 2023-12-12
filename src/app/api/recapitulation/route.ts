import prisma from '@/lib/prismadb';
import { NextResponse } from 'next/server';
import { DateTime } from 'luxon';

export const GET = async () => {
  const data = await prisma.recapitulation.findMany();
  if (!data) {
    return NextResponse.json({ status_code: 404, message: 'Data not found', data: [] });
  }
  return NextResponse.json({ status_code: 200, message: 'Success fetch data', data });
};

export const POST = async (req: Request) => {
  const { lesson, student, present } = await req.json();
  try {
    
    const date = DateTime.now().setLocale('id').toLocaleString(DateTime.DATE_FULL);

    const data = await prisma.recapitulation.create({
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
    return NextResponse.json({ status_code: 200, message: 'Success to create data', data });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status_code: 500, message: 'Some error occurred', error });
  }
};
