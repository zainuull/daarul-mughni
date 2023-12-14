import prisma from '@/lib/prismadb';
import { NextResponse } from 'next/server';

export const GET = async () => {
  try {
    const data = await prisma.classType.findMany();
    if (!data) {
      return NextResponse.json({ status_code: 404, message: 'Data not found', data: [] });
    }
    return NextResponse.json({ status_code: 200, message: 'Success to fetch data', data });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status_cdoeL: 500, message: 'Some error occurred', error });
  }
};

export const POST = async (req: Request) => {
  const { name, className } = await req.json();
  try {
    const data = await prisma.classType.create({
      data: {
        name,
        className,
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