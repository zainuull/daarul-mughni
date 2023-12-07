import prisma from '@/lib/prismadb';
import { NextResponse } from 'next/server';

export const GET = async (req: Request, { params }: { params: { id: string } }) => {
  const id = params.id;
  try {
    const data = await prisma.student.findUnique({
      where: { id },
      include: {
        classType: { include: { absensi: true } },
        recapitulation: true,
      },
    });
    if (!data) {
      return NextResponse.json({ status_code: 404, message: 'Data not found', data: [] });
    }
    return NextResponse.json({ status_code: 200, message: 'Success to fetch data by id', data });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status_code: 500, message: 'Failed to fetch data' });
  }
};

export const PUT = async (req: Request, { params }: { params: { id: string } }) => {
  const id = params.id;
  const {
    name,
    date_of_birth,
    ijazah,
    gender,
    nisn,
    guardian_name,
    guardian_status,
    guardian_telp,
    guardian_email,
    status_payment,
    address,
    levelName,
    className,
    classTypeName,
    image,
  } = await req.json();
  try {
    const data = await prisma.student.update({
      where: { id },
      data: {
        name,
        date_of_birth,
        ijazah,
        gender,
        nisn,
        guardian_name,
        guardian_status,
        guardian_telp,
        guardian_email,
        status_payment,
        address,
        levelName,
        className,
        classTypeName,
        image,
      },
    });
    if (!data) {
      return NextResponse.json({ status_code: 404, message: 'Data not found', data: [] });
    }
    return NextResponse.json({ status_code: 200, message: 'Data success to updated', data });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status_code: 500, message: 'Failed to Update' });
  }
};

export const DELETE = async (req: Request, { params }: { params: { id: string } }) => {
  const id = params.id;
  try {
    const data = await prisma.student.delete({ where: { id } });
    if (!data) {
      return NextResponse.json({ status_code: 404, message: 'Data not found', data: [] });
    }
    return NextResponse.json({ status_code: 200, message: 'Success to delete data', data });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status_code: 500, message: 'Failed to delete data', error });
  }
};
