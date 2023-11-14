import axios from 'axios';

export async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/api/event`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export async function getDataById(id: any) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/api/event?id=${id}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export function getDataEvents() {
  return axios.get(`${process.env.NEXT_PUBLIC_API}/api/event`);
}

export function getDataEventsById(id: any) {
  return axios.get(`${process.env.NEXT_PUBLIC_API}/api/event?id=${id}`);
}
