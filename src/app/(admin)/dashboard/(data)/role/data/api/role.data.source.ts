import { Http } from '@/core/services/http/http.client';
import { RoleRepository } from '../../domain/repository/role.repository';
import { IRoleDataModel, IRoleQuery } from '../../domain/model/IModel';

export default class RoleAPIDataSourceImpl implements RoleRepository {
  async getRoles(query?: IRoleQuery) {
    const res = await Http.get(`/api/role`,query);
    return res.data;
  }

  async getRoleById(id: string) {
    const res = await Http.get(`/api/role/${id}`);
    return res.data;
  }

  async createRole(data: IRoleDataModel) {
    const res = await Http.post(`/api/role`, data);
    return res.data;
  }

  async updateRole(id: string, data: IRoleDataModel) {
    const res = await Http.put(`/api/role/${id}`, data);
    return res.data;
  }

  async deleteRole(id: string) {
    const res = await Http.delete(`/api/role/${id}`);
    return res.data;
  }
}
