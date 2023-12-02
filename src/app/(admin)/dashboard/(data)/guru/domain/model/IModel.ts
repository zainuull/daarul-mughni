import { IModel } from '@/core/interface/IModel';
import { IQueryModel } from '@/model/IQueryModel';

export interface ITeacherQuery extends IQueryModel {}

export interface ITeacherModel extends IModel {
  totalData?: number;
  totalPage?: number;
  data?: ITeacherDataModel[];
}

export interface ITeacherDataModel {
  id?: string;
  name?: string;
  date_of_birth?: string;
  telp?: string;
  email?: string;
  nip?: string;
  ijazah?: string;
  positionName?: string;
  period_work?: string;
  gender?: string;
  age?: string;
  status?: string;
}

