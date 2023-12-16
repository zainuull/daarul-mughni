import { IModel } from '@/core/interface/IModel';
import { IQueryModel } from '@/core/interface/IQueryModel';

export interface IClassQuery extends IQueryModel {}

export interface IClassModel extends IModel {
  totalData?: number;
  totalPage?: number;
  data?: IClassDataModel[];
}

export interface IClassDataModel {
  id?: string;
  name?: string;
  levelName?: string;
}
