import { IModel } from '@/core/interface/IModel';
import { IQueryModel } from '@/core/interface/IQueryModel';

export interface IClassTypeQuery extends IQueryModel {}

export interface IClassTypeModel extends IModel {
  totalData?: number;
  totalPage?: number;
  data?: IClassTypeDataModel[];
}

export interface IClassTypeDataModel {
  id?: string;
  name?: string;
  className?: string;
}
