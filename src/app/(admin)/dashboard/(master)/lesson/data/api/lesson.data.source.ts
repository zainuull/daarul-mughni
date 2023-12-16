import { Http } from '@/core/services/http/http.client';
import { ILessonQuery } from '../../domain/model/IModel';
import { LessonRepository } from '../../domain/repository/lesson.repository';
import { IClassDataModel } from '../../../classes/domain/model/IModel';

export default class LessonAPIDataSourceImpl implements LessonRepository {
  async getLesson(query?: ILessonQuery) {
    const res = await Http.get('/api/lesson', query);
    return res.data;
  }

  async getLessonById(id: string) {
    const res = await Http.get(`/api/lesson/${id}`);
    return res.data;
  }

  async createLesson(data: IClassDataModel) {
    const res = await Http.post('/api/lesson', data);
    return res.data;
  }

  async updateLesson(id: string, data: IClassDataModel) {
    const res = await Http.put(`/api/lesson/${id}`, data);
    return res.data;
  }

  async deleteLesson(id: string) {
    const res = await Http.delete(`/api/lesson/${id}`);
    return res.data;
  }

  //Level
  async getLevel() {
    const res = await Http.get(`/api/level`);
    return res.data;
  }
}
