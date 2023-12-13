import { IModel } from '@/core/interface/IModel';
import { IQueryModel } from '@/core/interface/IQueryModel';

export interface ILevelQuery extends IQueryModel {}

export interface ILevelModel extends IModel {
  totalData?: number;
  totalPage?: number;
  data?: ILevelDataModel[];
}

export interface ILevelDataModel {
  id?: string;
  name?: string;
}
