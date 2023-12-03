import prisma from '@/lib/prismadb';
import { NextResponse } from 'next/server';

export const POST = async (req: Request) => {
  const {
    title,
    description,
    person_responsible,
    telp_person_responsible,
    selected_category,
    imageUrl,
    publicId,
    place_event,
    date_event,
    section,
    total_cost,
    status,
  } = await req.json();

  const authorEmail = 'thobazainul@email.com';

  if (!title && !description) {
    return NextResponse.json({ status_code: 500, message: 'title and description are required' });
  }

  try {
    const newEvent = await prisma.events.create({
      data: {
        title,
        description,
        person_responsible,
        telp_person_responsible,
        catName: selected_category,
        imageUrl,
        publicId,
        place_event,
        date_event,
        section,
        total_cost,
        status,
      },
    });
    console.log('Success to created', newEvent);
    return NextResponse.json({ status_code: 200, message: 'Success to created', newEvent });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status_code: 500, message: 'Internal Server Error' });
  }
};

export const GET = async () => {
  try {
    const data = await prisma.events.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
    if (!data) {
      return NextResponse.json({ status_code: 404, message: 'Data not found', data: [] });
    }
    return NextResponse.json({ status_code: 200, message: 'Success to fetch', data });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status_code: 500, message: 'Some error occurred' });
  }
};
