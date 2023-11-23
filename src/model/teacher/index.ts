export interface ITeacherModel {
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
