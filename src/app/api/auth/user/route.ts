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
  const { name, email, password, image, role } = await req.json();

  if (!name && !email) {
    return NextResponse.json({ status_code: 500, message: 'name and email are required' });
  }
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        hashedPassword,
        image,
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
