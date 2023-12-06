import prisma from '@/lib/prismadb';
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';

export const GET = async () => {
  try {
    const user = await prisma.user.findMany();
    if (!user) {
      return NextResponse.json({ status_code: 404, message: 'Data not found', user: [] });
    }
    return NextResponse.json({ status_code: 200, message: 'Success to fetch', user });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status_code: 500, message: 'Some error occurred' });
  }
};

export const POST = async (req: Request) => {
  const {
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
    role,
  } = await req.json();

  if (!email) {
    return NextResponse.json({ status_code: 500, message: 'email are required' });
  }
  const hashedPassword = await bcrypt.hash(nip, 10);

  try {
    const newUser = await prisma.user.create({
      data: {
        name,
        date_of_birth,
        telp,
        email,
        nip,
        ijazah,
        positionName,
        hashedPassword,
        period_work,
        gender,
        age,
        status,
        imageUrl,
        role,
      },
    });
    console.log('success create user', newUser);
    return NextResponse.json({ status_code: 200, message: 'Success create user', newUser });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status_code: 500, message: 'Some error occurred' });
  }
};
