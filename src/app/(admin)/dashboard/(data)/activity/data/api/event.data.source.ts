import { Http } from '@/core/services/http/http.client';
import { IEventDataModel, IEventQuery } from '../../domain/model/IModel';
import { EventRepostiry } from '../../domain/repository/event.repository';

export default class EventAPIDataSourceImpl implements EventRepostiry {
  async getEvents(query?: IEventQuery) {
    const res = await Http.get('/api/events', query);
    return res.data;
  }

  async getEventsById(id: string) {
    const res = await Http.get(`/api/events/${id}`);
    return res.data;
  }

  async getEventByCategories(category: string) {
    const res = await Http.get(`/api/categories/${category}`);
    return res.data;
  }

  async createEvent(data: IEventDataModel) {
    const res = await Http.post('/api/events', data);
    return res.data;
  }

  async deleteEvent(id: string) {
    const res = await Http.delete(`/api/events/${id}`);
    return res.data;
  }

  async updateEvent(id: string, data: IEventDataModel) {
    const res = await Http.put(`/api/events/${id}`, data);
    return res.data;
  }
}
