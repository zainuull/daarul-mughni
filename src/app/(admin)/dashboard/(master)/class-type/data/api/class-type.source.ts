import { Http } from '@/core/services/http/http.client';
import { IClassTypeDataModel, IClassTypeQuery } from '../../domain/model/IModel';
import { ClassTypeRepository } from '../../domain/repository/class-type.repository';

export default class ClassTypeAPIDataSourceImpl implements ClassTypeRepository {
  async getClassType(query?: IClassTypeQuery) {
    const res = await Http.get(`/api/class-type`, query);
    return res.data;
  }

  async getClassTypeById(id: string) {
    const res = await Http.get(`/api/class-type/${id}`);
    return res.data;
  }

  async createClassType(data: IClassTypeDataModel) {
    const res = await Http.post(`/api/class-type`, data);
    return res.data;
  }

  async updateClassType(id: string, data: IClassTypeDataModel) {
    const res = await Http.put(`/api/class-type/${id}`, data);
    return res.data;
  }

  async deleteClassType(id: string) {
    const res = await Http.delete(`/api/class-type/${id}`);
    return res.data;
  }

  //Class
  async getClass() {
    const res = await Http.get(`/api/class`);
    return res.data;
  }
}
