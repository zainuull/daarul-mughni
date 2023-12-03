import { IModel } from '@/core/interface/IModel';
import { IQueryModel } from '@/core/interface/IQueryModel';

export interface IEventQuery extends IQueryModel {}

export interface IEventModel extends IModel {
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
