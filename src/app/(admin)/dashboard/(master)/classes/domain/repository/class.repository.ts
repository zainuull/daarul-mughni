import { IClassDataModel, IClassQuery, IClassModel } from '../model/IModel';

export interface ClassRepository {
  getClass(query?: IClassQuery): Promise<IClassModel>;
  getClassById(id: string): Promise<IClassDataModel>;
  createClass(data: IClassDataModel): Promise<IClassModel>;
  updateClass(id: string, data: IClassDataModel): Promise<IClassModel>;
  deleteClass(id: string): Promise<IClassModel>;
  //Level
  getLevel(): Promise<any>;
}
