import { IModel } from '@/core/interface/IModel';
import { IQueryModel } from '@/core/interface/IQueryModel';

export interface IBerandaQuery extends IQueryModel {}

export interface IBerandaModel extends IModel {
  totalData?: number;
  totalPage?: number;
  data?: IBerandaDataModel[];
}

export interface IBerandaDataModel {
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
  imageUrl?: string;
  role?: string;
}
