import { NextResponse } from 'next/server';

export function GET(req: Request) {
  return NextResponse.json({ status_code: 200, message: 'Success' });
}
