import prisma from '@/lib/prismadb';
import { NextResponse } from 'next/server';

export const GET = async (req: Request, { params }: { params: { id: string } }) => {
  const id = params.id;
  try {
    const events = await prisma.events.findUnique({ where: { id } });
    return NextResponse.json({ status_code: 200, message: 'Success to fetch', events });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status_code: 500, message: 'Some error occurred' });
  }
};

export const PUT = async (req: Request, { params }: { params: { id: string } }) => {
  const id = params.id;
  const { title, description, person_responsible, selectedCategory, imageUrl, publicId } =
    await req.json();

  try {
    const events = await prisma.events.update({
      where: { id },
      data: {
        title,
        description,
        person_responsible,
        catName: selectedCategory,
        imageUrl,
        publicId,
      },
    });
    return NextResponse.json({ status_code: 200, message: 'Success to update', events });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status_code: 400, message: 'Error to updatting data' });
  }
};

export const DELETE = async (req: Request, { params }: { params: { id: string } }) => {
  const id = params.id;
  try {
    const events = await prisma.events.delete({ where: { id } });
    return NextResponse.json({ status_code: 200, message: 'Success to delete', events });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status_code: 400, message: 'Error to deleting data' });
  }
};
