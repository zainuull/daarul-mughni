export interface IQueryModel {
  sort?: string;
  select?: string;
  page?: number;
  perPage?: number;

  sortBy?: string;
  sortDir?: number;
  search?: string;
}

export interface IRegionQuery {
  province?: string;
  city?: string;
  district?: string;
  sub_district?: string;
}
