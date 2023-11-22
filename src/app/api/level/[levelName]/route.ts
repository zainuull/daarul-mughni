import prisma from '@/lib/prismadb';
import { NextResponse } from 'next/server';

export const GET = async (req: Request, { params }: { params: { levelName: string } }) => {
  const levelName = params?.levelName;
  try {
    const data = await prisma.level.findUnique({
      where: { levelName },
      include: {
        class: { include: { students: true } },
      },
    });
    if (!data) {
      return NextResponse.json({ status_code: 404, message: 'Data not found', data: [] });
    }
    return NextResponse.json({
      status_code: 200,
      message: 'Success to fetch data by name Level',
      data,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status_code: 500, message: 'Some error occurred', error });
  }
};
