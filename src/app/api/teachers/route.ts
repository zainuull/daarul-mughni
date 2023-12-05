import prisma from '@/lib/prismadb';
import { NextResponse } from 'next/server';

export const POST = async (req: Request) => {
  const { name, date_of_birth, telp, email, nip, ijazah, positionName, period_work, gender, age,status ,imageUrl} =
    await req.json();

  if (!name && !email) {
    return NextResponse.json({ status_code: 500, message: 'name and email are required' });
  }

  try {
    const newTeacher = await prisma.teacher.create({
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
        imageUrl,
      },
    });
    console.log('Success to created', newTeacher);
    return NextResponse.json({ status_code: 200, message: 'Success to created', newTeacher });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status_code: 500, message: 'Some error occurred' });
  }
};

export const GET = async () => {
  try {
    const data = await prisma.teacher.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
    if (!data) {
      return NextResponse.json({ status_code: 404, message: 'Data not found', data: [] });
    }
    return NextResponse.json({ status_code: 200, message: 'Success to Fetch', data });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status_code: 500, message: 'Some error occurred', error });
  }
};
