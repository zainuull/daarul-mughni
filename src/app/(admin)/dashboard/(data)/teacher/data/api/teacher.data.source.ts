import { Http } from '@/core/services/http/http.client';
import { ITeacherDataModel, ITeacherQuery } from '../../domain/model/IModel';
import { TeacherRepository } from '../../domain/repository/teacher.repository';

export default class TeacherAPIDataSourceImpl implements TeacherRepository {
  async getTeachers(query?: ITeacherQuery) {
    const res = await Http.get('/api/teachers', query);
    return res.data;
  }

  async getTeachersById(id: string) {
    const res = await Http.get(`/api/teachers/${id}`);
    return res.data;
  }

  async getTeacherByPosition(positionName: string) {
    const res = await Http.get(`/api/role/${positionName}`);
    return res.data;
  }

  async createTeacher(data: ITeacherDataModel) {
    const res = await Http.post('/api/teachers', data);
    return res.data;
  }

  async createUser(data: any) {
    console.log('data', data);

    const res = await Http.post('/api/auth/user', data);
    return res.data;
  }

  async deleteTeacher(id: string) {
    const res = await Http.delete(`/api/teachers/${id}`);
    return res.data;
  }

  async updateTeacher(id: string, data: any) {
    const res = await Http.put(`/api/teachers/${id}`, data);
    return res.data;
  }

  // Role
  async getRole() {
    const res = await Http.get('/api/role');
    return res.data;
  }
}
