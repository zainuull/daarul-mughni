import { IStudentDataModel, IStudentModel, IStudentQuery } from '../model/IModel';

export interface StudentRepository {
  getStudents(query?: IStudentQuery): Promise<IStudentModel>;
  getStudentById(id: string): Promise<IStudentModel>;
  getStudentByClass(className: string): Promise<IStudentModel>;
  createStudent(data: IStudentDataModel): Promise<IStudentModel>;
  deleteStudent(id: string): Promise<IStudentModel>;
  updateStudent(id: string, data: IStudentDataModel): Promise<IStudentModel>;
}
