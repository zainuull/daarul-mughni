import prisma from '@/lib/prismadb';
import { NextResponse } from 'next/server';

export const GET = async (req: Request, { params }: { params: { email: string } }) => {
  const email = params?.email;
  try {
    const user = await prisma.user.findFirst({ where: { email } });
    if (!user) {
      return NextResponse.json({ status_code: 404, message: 'Data not found', user: [] });
    }
    return NextResponse.json({ status_code: 200, message: 'Success to fetch by email', user });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status_code: 500, message: 'Some error occurred' });
  }
};
