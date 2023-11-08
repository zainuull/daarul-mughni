import axios from 'axios';

export async function getDataEvents() {
  const res = await fetch(`http://localhost:3000/api/event`, {
    cache: 'force-cache',
    next: {
      revalidate: 30,
    },
  });

  if (!res.ok) {
    throw new Error('Data failed to Fetching');
  }

  return res.json();
}

export async function getDataEventsById(id: any) {
  const res = await fetch(`http://localhost:3000/api/event?id=${id}`, {
    cache: 'force-cache',
    next: {
      revalidate: 30,
    },
  });

  if (!res.ok) {
    throw new Error('Data failed to Fetching');
  }

  return res.json();
}

export function GetData() {
  return axios.get(`http://localhost:3000/api/event`);
}

export function GetDataById(id: any) {
  return axios.get(`http://localhost:3000/api/event?id=${id}`);
}
