import prisma from '@/lib/prismadb';
import { NextResponse } from 'next/server';

export const GET = async (req: Request) => {
  try {
    const data = await prisma.category.findMany();
    if (!data) {
      return NextResponse.json({ status_code: 404, message: 'Data not found' });
    }
    return NextResponse.json({ status_code: 200, message: 'Success to fetch data Categories', data });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status_code: 500, message: 'Failed to fetch data' });
  }
};
