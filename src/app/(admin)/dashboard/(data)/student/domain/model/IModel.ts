import { IModel } from '@/core/interface/IModel';
import { IQueryModel } from '@/core/interface/IQueryModel';

export interface IStudentQuery extends IQueryModel {}

export interface IStudentModel extends IModel {
  totalData?: number;
  totalPage?: number;
  data?: IStudentDataModel[];
}

export interface IStudentDataModel {
  id?: string;
  name?: string;
  date_of_birth?: string;
  ijazah?: string;
  gender?: string;
  nisn?: string;
  guardian_name?: string;
  guardian_status?: string;
  guardian_telp?: string;
  guardian_email?: string;
  status_payment?: string;
  address?: string;
  className?: string;
  classTypeName?: string;
  levelName?: string;
  image?: string;
  recapitulation?: any;
}
