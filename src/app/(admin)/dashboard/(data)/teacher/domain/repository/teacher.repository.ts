import { ITeacherDataModel, ITeacherModel, ITeacherQuery } from '../model/IModel';

export interface TeacherRepository {
  getTeachers(query?: ITeacherQuery): Promise<ITeacherModel>;
  getTeachersById(id: string): Promise<ITeacherModel>;
  getTeacherByPosition(positionName: string): Promise<ITeacherModel>;
  createTeacher(data: ITeacherDataModel): Promise<ITeacherModel>;
  createUser(data: any): Promise<any>;
  deleteTeacher(id: string): Promise<ITeacherModel>;
  updateTeacher(id: string, data: ITeacherDataModel): Promise<ITeacherModel>;
  // Role
  getRole(): Promise<any>;
}
