import { Http } from '@/core/services/http/http.client';
import { IClassDataModel, IClassQuery } from '../../domain/model/IModel';
import { ClassRepository } from '../../domain/repository/class.repository';

export default class ClassAPIDataSourceImpl implements ClassRepository {
  async getClass(query?: IClassQuery) {
    const res = await Http.get(`/api/class`, query);
    return res.data;
  }

  async getClassById(id: string) {
    const res = await Http.get(`/api/class/${id}`);
    return res.data;
  }

  async createClass(data: IClassDataModel) {
    const res = await Http.post(`/api/class`, data);
    return res.data;
  }

  async updateClass(id: string, data: IClassDataModel) {
    const res = await Http.put(`/api/class/${id}`, data);
    return res.data;
  }

  async deleteClass(id: string) {
    const res = await Http.delete(`/api/class/${id}`);
    return res.data;
  }

  //Level
  async getLevel() {
    const res = await Http.get(`/api/level`);
    return res.data;
  }
}
