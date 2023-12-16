import { IClassDataModel } from '../../../../(master)/classes/domain/model/IModel';
import { ILevelDataModel, ILevelModel } from '../../../../(master)/level/domain/model/IModel';
import { IStudentDataModel, IStudentModel, IStudentQuery } from '../model/IModel';

export interface StudentRepository {
  getStudents(query?: IStudentQuery): Promise<IStudentModel>;
  getStudentById(id: string): Promise<IStudentModel>;
  getStudentByClass(className: string): Promise<IStudentModel>;
  createStudent(data: IStudentDataModel): Promise<IStudentModel>;
  deleteStudent(id: string): Promise<IStudentModel>;
  deleteImage(publicId: string): Promise<any>;
  updateStudent(id: string, data: IStudentDataModel): Promise<IStudentModel>;
  //level
  getLevel(): Promise<ILevelModel>;
  getLevelById(id: string): Promise<ILevelDataModel>;
  //Class
  getClassById(id: string): Promise<IClassDataModel>;
}
