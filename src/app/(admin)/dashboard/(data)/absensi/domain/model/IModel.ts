import { IModel } from '@/core/interface/IModel';
import { IQueryModel } from '@/model/IQueryModel';

export interface IAbsensiQuery extends IQueryModel {}

export interface IAbsensiModel extends IModel {
  totalData?: number;
  totalPage?: number;
  data?: IAbsensiDataModel[];
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
}
