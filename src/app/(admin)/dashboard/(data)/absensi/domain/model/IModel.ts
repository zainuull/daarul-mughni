import { IModel } from '@/core/interface/IModel';
import { IQueryModel } from '@/core/interface/IQueryModel';
import { IStudentDataModel } from '../../../student/domain/model/IModel';

export interface IAbsensiQuery extends IQueryModel {}

export interface IAbsensiModel extends IModel {
  totalData?: number;
  totalPage?: number;
  data?: IAbsensiDataModel[];
  students?: IStudentDataModel[];
}

export interface IAbsensiDataModel {
  id?: string;
  levelName?: string;
  classTypeName?: string;
  className?: string;
  teacher?: string;
  lesson?: string;
  start_time?: string;
  end_time?: string;
  students?: IStudentDataModel[];
  status?: string;
}

export interface IRecapitulationModel {
  id?: string;
  name?: string;
  present?: boolean;
}
