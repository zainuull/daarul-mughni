import axios from 'axios';

export function getDataEvents() {
  return axios.get(`http://localhost:3000/api/event`);
}

export function getDataEventsById(id: any) {
  return axios.get(`http://localhost:3000/api/event?id=${id}`);
}
