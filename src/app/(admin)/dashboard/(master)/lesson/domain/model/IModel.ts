import { IModel } from '@/core/interface/IModel';
import { IQueryModel } from '@/core/interface/IQueryModel';

export interface ILessonQuery extends IQueryModel {}

export interface ILessonModel extends IModel {
  totalData?: number;
  totalPage?: number;
  data?: ILessonDataModel[];
}

export interface ILessonDataModel {
  id?: string;
  name?: string;
  levelName?: string;
}
