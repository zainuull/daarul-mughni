import { Http } from '@/core/services/http/http.client';
import { BerandaRepository } from '../../domain/repository/beranda.repository';

export default class BerandaAPIDataSourceImpl implements BerandaRepository {
  async getUserById(id: string) {
    const res = await Http.get(`/api/teachers/${id}`);
    return res.data;
  }
}
