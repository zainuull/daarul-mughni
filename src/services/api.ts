import axios from 'axios';

export function getDataEvents() {
  return axios.get(`${process.env.NEXT_PUBLIC_API}/api/event`);
}

export function getDataEventsById(id: any) {
  return axios.get(`${process.env.NEXT_PUBLIC_API}/api/event?id=${id}`);
}

