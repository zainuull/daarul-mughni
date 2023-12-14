import prisma from '@/lib/prismadb';
import { NextResponse } from 'next/server';

export const GET = async () => {
  try {
    const data = await prisma.level.findMany({
      include: { class: true },
    });
    if (!data) {
      return NextResponse.json({ status_code: 404, message: 'Data not found', data: [] });
    }
    return NextResponse.json({ status_code: 200, message: 'Success to fetch data Level', data });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status_code: 500, message: 'Some error occurred', error });
  }
};

export const POST = async (req: Request) => {
  const { name } = await req.json();
  try {
    const data = await prisma.level.create({
      data: {
        name,
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
