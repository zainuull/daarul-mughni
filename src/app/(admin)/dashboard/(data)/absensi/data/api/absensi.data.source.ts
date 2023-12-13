import { Http } from '@/core/services/http/http.client';
import { IAbsensiDataModel, IAbsensiQuery, IRecapitulationModel } from '../../domain/model/IModel';
import { AbsensiRepository } from '../../domain/repository/absensi.repository';

export default class AbsensiAPIDataSourceImpl implements AbsensiRepository {
  async getAbsensi(query?: IAbsensiQuery) {
    const res = await Http.get('/api/absensi', query);
    return res.data;
  }

  async getAbsensiById(id: string) {
    const res: any = await Http.get(`/api/absensi/${id}`);
    return res.data?.data;
  }

  async getStudentsByClassTypeName(classTypeName: string) {
    const res: any = await Http.get(`/api/class-type/${classTypeName}`);
    return res.data?.data?.students;
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

  // Recapitulation
  async getRecapitulationById(id: string) {
    const res: any = await Http.get(`/api/students/${id}`);
    console.log('Response', res.data?.data?.recapitulation);

    return res.data?.data?.recapitulation;
  }

  async createRecapitulation(data: IRecapitulationModel) {
    const res = await Http.post('/api/recapitulation', data);
    return res.data;
  }

  async updateRecapitulation(id: string, data: IRecapitulationModel) {
    const res = await Http.put(`/api/recapitulation/${id}`, data);
    return res.data;
  }
}
