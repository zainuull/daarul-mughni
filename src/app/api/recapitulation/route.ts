import prisma from '@/lib/prismadb';
import { NextResponse } from 'next/server';

export const GET = async () => {
  const data = await prisma.recapitulation.findMany();
  if (!data) {
    return NextResponse.json({ status_code: 404, message: 'Data not found', data: [] });
  }
  return NextResponse.json({ status_code: 200, message: 'Success fetch data', data });
};

export const POST = async (req: Request) => {
  const { name, present } = await req.json();
  try {
    const data = await prisma.recapitulation.create({
      data: {
        name,
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
