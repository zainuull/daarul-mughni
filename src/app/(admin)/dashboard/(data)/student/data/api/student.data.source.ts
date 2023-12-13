import { Http } from '@/core/services/http/http.client';
import { StudentRepository } from '../../domain/repository/student.repository';
import { IStudentDataModel, IStudentQuery } from '../../domain/model/IModel';

export default class StudentAPIDataSourceImol implements StudentRepository {
  async getStudents(query?: IStudentQuery) {
    const res = await Http.get('/api/students', query);
    return res.data;
  }

  async getStudentById(id: string) {
    const res = await Http.get(`/api/students/${id}`);
    return res.data;
  }

  async getStudentByClass(className: string) {
    const res = await Http.get(`/api/class/${className}`);
    return res.data;
  }

  async createStudent(data: IStudentDataModel) {
    const res = await Http.post('/api/students', data);
    return res.data;
  }

  async deleteStudent(id: string) {
    const res = await Http.delete(`/api/students/${id}`);
    return res.data;
  }

  async deleteImage(publicId: string) {
    const res = await Http.post(`/api/delete-image`, publicId);
    return res.data;
  }

  async updateStudent(id: string, data: IStudentDataModel) {
    const res = await Http.put(`/api/students/${id}`, data);
    return res.data;
  }

  //Level
  async getLevel() {
    const res = await Http.get('/api/level');
    return res.data;
  }
}
