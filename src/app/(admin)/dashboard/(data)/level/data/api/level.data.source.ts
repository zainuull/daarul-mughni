import { Http } from '@/core/services/http/http.client';
import { ILevelDataModel, ILevelQuery } from '../../domain/model/IModel';
import { LevelRepository } from '../../domain/repository/LevelRepository';

export default class LevelAPIDataSourceImpl implements LevelRepository {
  async getLevel(query?: ILevelQuery) {
    const res = await Http.get(`/api/level`, query);
    return res.data;
  }

  async getLevelById(id: string) {
    const res = await Http.get(`/api/level/${id}`);
    return res.data;
  }

  async createLevel(data: ILevelDataModel) {
    const res = await Http.post(`/api/level`, data);
    return res.data;
  }

  async updateLevel(id: string, data: ILevelDataModel) {
    const res = await Http.put(`/api/level/${id}`, data);
    return res.data;
  }

  async deleteLevel(id: string) {
    const res = await Http.delete(`/api/level/${id}`);
    return res.data;
  }
}
