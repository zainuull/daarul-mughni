import prisma from '@/lib/prismadb';
import { NextResponse } from 'next/server';

export const GET = async(req: Request) => {
  try {
    const categories = await prisma.category.findMany()
    return NextResponse.json(categories)
  } catch (error) {
    console.log(error);
    return NextResponse.json({status_code:500, message:"Failed to fetch data"})
  }
}


