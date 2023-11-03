export interface IEventModel {
  name?: string;
  totalData?: number;
  totalPage?: number;
  data?: IEventDataModel[];
}

export interface IEventDataModel {
  id: number;
  img: string;
  name: string;
}
