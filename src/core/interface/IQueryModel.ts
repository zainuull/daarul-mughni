export interface IQueryModel {
  sort?: string;
  select?: string;
  page?: number;
  perPage?: number;

  sortBy?: string;
  sortDir?: number;
  search?: string;
}