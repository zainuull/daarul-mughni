import { IClassQuery } from '../../../classes/domain/model/IModel';
import { IClassTypeDataModel, IClassTypeModel } from '../model/IModel';

export interface ClassTypeRepository {
  getClassType(query?: IClassQuery): Promise<IClassTypeModel>;
  getClassTypeById(id: string): Promise<IClassTypeDataModel>;
  createClassType(data: IClassTypeDataModel): Promise<IClassTypeModel>;
  updateClassType(id: string, data: IClassTypeDataModel): Promise<IClassTypeModel>;
  deleteClassType(id: string): Promise<IClassTypeModel>;
  //Class
  getClass(): Promise<any>;
}
