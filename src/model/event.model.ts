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
  level?: string;
  period_work?: string;
  gender?: string;
  age?: string;
  status?: string;
}
