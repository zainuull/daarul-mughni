export interface IEventModel {
  totalData?: number;
  totalPage?: number;
  data?: IEventDataModel[];
}

export interface IEventDataModel {
  id?: string;
  title?: string;
  description?: string;
  person_responsible?: string;
  telp_person_responsible?: string;
  place_event?: string;
  date_event?: string;
  section?: string;
  imageUrl?: string;
  publicId?: string;
  selected_category?: string;
  catName?: string;
  total_cost?: string;
  status?: string;
}

export interface ICategory {
  id: string;
  catName: string;
  data: string[];
}

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

export interface IStudentModel {
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
  levelName?: string;
}

export interface IAbsensiModel {
  totalData?: number;
  totalPage?: number;
  data?: IAbsensiDataModel[];
}

export interface IAbsensiDataModel {
  id?: string;
  levelName?: string;
  code_class?: string;
  className?: string;
  teacher?: string;
  lesson?: string;
  start_time?: string;
  end_time?: string;
}
