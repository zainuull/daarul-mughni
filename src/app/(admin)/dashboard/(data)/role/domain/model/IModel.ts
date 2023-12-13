import { IModel } from '@/core/interface/IModel';
import { IQueryModel } from '@/core/interface/IQueryModel';

export interface IRoleQuery extends IQueryModel {}

export interface IRoleModel extends IModel {
  totalData?: number;
  totalPage?: number;
  data?: IRoleDataModel[];
}

export interface IRoleDataModel {
  id?: string;
  name?: string;
}
