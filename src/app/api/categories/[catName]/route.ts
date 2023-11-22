import prisma from '@/lib/prismadb';
import { NextResponse } from 'next/server';

export const GET = async (req: Request, { params }: { params: { catName: string } }) => {
  const catName = params.catName;
  try {
    const data = await prisma.category.findUnique({
      where: { catName },
      include: { events: true },
    });
    return NextResponse.json({ status_code: 200, message: 'Success to fetch', data });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status_code: 500, message: 'Some error occurred' });
  }
};
