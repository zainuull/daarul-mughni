export interface IEventModel {
  name?: string;
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
  publicId?: number;
  selected_category?: string;
  total_cost?: string;
  status?: string;
}

export interface ICategory {
  id: string;
  catName: string;
}
