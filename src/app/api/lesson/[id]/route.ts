import prisma from '@/lib/prismadb';
import { NextResponse } from 'next/server';

export const GET = async (req: Request, { params }: { params: { id: string } }) => {
  const id = params?.id;
  try {
    const data = await prisma.lesson.findUnique({
      where: { id },
    });
    if (!data) {
      return NextResponse.json({ status_code: 404, message: 'Data not found', data: [] });
    }
    return NextResponse.json({
      status_code: 200,
      message: 'Success to fetch data by id',
      data,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status_code: 500, message: 'Some error occurred', error });
  }
};

export const PUT = async (req: Request, { params }: { params: { id: string } }) => {
  const id = params.id;
  const { name, levelName } = await req.json();
  try {
    const data = await prisma.lesson.update({
      where: { id },
      data: {
        name,
        levelName,
      },
    });
    console.log(data);

    if (!data) {
      return NextResponse.json({ status_code: 404, message: 'Data not found', data: [] });
    }
    return NextResponse.json({
      status_code: 200,
      message: 'Success to update data',
      data,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status_code: 500, message: 'Some error occurred', error });
  }
};

export const DELETE = async (req: Request, { params }: { params: { id: string } }) => {
  const id = params?.id;
  try {
    const data = await prisma.lesson.delete({
      where: { id },
    });
    if (!data) {
      return NextResponse.json({ status_code: 404, message: 'Data not found', data: [] });
    }

    return NextResponse.json({
      status_code: 200,
      message: 'Success to delete data',
      data,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status_code: 500, message: 'Some error occurred', error });
  }
};
