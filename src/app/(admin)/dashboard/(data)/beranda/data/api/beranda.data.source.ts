import { Http } from '@/core/services/http/http.client';
import { BerandaRepository } from '../../domain/repository/beranda.repository';

export default class BerandaAPIDataSourceImpl implements BerandaRepository {
  async getUserByEmail(email: string) {
    const res = await Http.get(`/api/auth/user/${email}`);
    return res.data;
  }
}
