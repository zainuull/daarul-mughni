import prisma from '@/lib/prismadb';
import { NextResponse } from 'next/server';

export const GET = async () => {
  try {
    const data = await prisma.class.findMany();
    if (!data) {
      return NextResponse.json({ status_code: 404, message: 'Data not found', data: [] });
    }
    return NextResponse.json({ status_code: 200, message: 'Success fetch data Class', data });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status_code: 500, message: 'Some error occurred', error });
  }
};

export const POST = async (req: Request) => {
  const { name, levelName } = await req.json();
  try {
    const data = await prisma.class.create({
      data: {
        name,
        levelName,
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
