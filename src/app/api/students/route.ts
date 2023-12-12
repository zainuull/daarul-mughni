import prisma from '@/lib/prismadb';
import { NextResponse } from 'next/server';

export const POST = async (req: Request) => {
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
    className,
    classTypeName,
    levelName,
    image,
  } = await req.json();
  if (!name && !guardian_telp) {
    return NextResponse.json({ status_code: 500, message: 'name and telp are required' });
  }

  try {
    const newStudent = await prisma.student.create({
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
        className,
        classTypeName,
        levelName,
        image,
      },
    });
    console.log('Success to created', newStudent);
    return NextResponse.json({ status_code: 200, message: 'Success to created', newStudent });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status_code: 500, message: 'Some error occurred', error });
  }
};

export const GET = async () => {
  try {
    const data = await prisma.student.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        recapitulation: true,
      },
    });
    if (!data) {
      return NextResponse.json({ status_code: 400, message: 'Data not found' });
    }
    return NextResponse.json({ status_code: 200, message: 'Success to fetch', data });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status_code: 500, message: 'Some error occurred', error });
  }
};
