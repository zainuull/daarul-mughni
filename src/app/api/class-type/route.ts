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
