import { Http } from '@/core/services/http/http.client';
import { IAbsensiDataModel, IAbsensiQuery } from '../../domain/model/IModel';
import { AbsensiRepository } from '../../domain/repository/absensi.repository';

export default class AbsensiAPIDataSourceImpl implements AbsensiRepository {
  async getAbsensi(query?: IAbsensiQuery) {
    const res = await Http.get('/api/absensi', query);
    return res.data;
  }

  async getAbsensiById(id: string) {
    const res: any = await Http.get(`/api/absensi/${id}`);
    return res.data?.data?.classType;
  }

  async getAbsensiByClass(className: string) {
    const res = await Http.get(`/api/class/${className}`);
    return res.data;
  }

  async createAbsensi(data: IAbsensiDataModel) {
    const res = await Http.post('/api/absensi', data);
    return res.data;
  }

  async updateAbsensi(id: string, data: IAbsensiDataModel) {
    const res = await Http.put(`/api/absensi/${id}`, data);
    return res.data;
  }

  async deleteAbsensi(id: string) {
    const res = await Http.delete(`/api/absensi/${id}`);
    return res.data;
  }
}
