// import prisma from '@/lib/prismadb';
// import { NextResponse } from 'next/server';

// export const GET = async (req: Request, { params }: { params: { email: string } }) => {
//   const email = params?.email;

//   try {
//     const data = await prisma.user.findFirst({ where: { email }, include: { absensi: true } });
//     if (!data) {
//       return NextResponse.json({ status_code: 404, message: 'Data not found', data: [] });
//     }
//     return NextResponse.json({ status_code: 200, message: 'Success to fetch by email', data });
//   } catch (error) {
//     console.log(error);
//     return NextResponse.json({ status_code: 500, message: 'Some error occurred' });
//   }
// };
