import prisma from '@/lib/prismadb';
import { NextResponse } from 'next/server';

export const GET = async (req: Request, { params }: { params: { id: string } }) => {
  const id = params.id;
  try {
    const data = await prisma.teacher.findUnique({ where: { id } });
    if (!data) {
      return NextResponse.json({ status_code: 404, message: 'Data not found', data: [] });
    }
    return NextResponse.json({ status_code: 200, message: 'Success to fetch data by id', data });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status_code: 500, message: 'Failed to fetch data', error });
  }
};

export const PUT = async (req: Request, { params }: { params: { id:string } }) => {
  const id = params.id;
  const { name, date_of_birth, telp, email, nip, ijazah, positionName, period_work, gender, age, status } =
    await req.json();
  try {
    const data = await prisma.teacher.update({
      where: { id },
      data: {
        name,
        date_of_birth,
        telp,
        email,
        nip,
        ijazah,
        positionName,
        period_work,
        gender,
        age,
        status,
      },
    });
    if (!data) {
      return NextResponse.json({ status_code: 404, message: 'Data not found', data: [] });
    }
    return NextResponse.json({ status_code: 200, message: 'Success to update', data });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status_code: 500, message: 'Failed to update data', error });
  }
};

export const DELETE = async (req: Request, { params }: { params: { id: string } }) => {
  const id = params.id;
  try {
    const data = await prisma.teacher.delete({ where: { id } });
    if (!data) {
      return NextResponse.json({ status_code: 404, message: 'Data not found', data: [] });
    }
    return NextResponse.json({ status_code: 200, message: 'Success to delete', data });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status_code: 500, message: 'Failed to delete data', error });
  }
};
