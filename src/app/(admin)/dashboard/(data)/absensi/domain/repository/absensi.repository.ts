import {
  IAbsensiDataModel,
  IAbsensiModel,
  IAbsensiQuery,
  IRecapitulationModel,
} from '../model/IModel';

export interface AbsensiRepository {
  getAbsensi(query?: IAbsensiQuery): Promise<IAbsensiModel>;
  getAbsensiById(id: string): Promise<IAbsensiDataModel>;
  getStudentsByClassTypeName(classTypeName: string): Promise<any>;
  getAbsensiByClass(className: string): Promise<IAbsensiModel>;
  createAbsensi(data: IAbsensiDataModel): Promise<IAbsensiModel>;
  updateAbsensi(id: string, data: IAbsensiDataModel): Promise<IAbsensiModel>;
  deleteAbsensi(id: string): Promise<IAbsensiModel>;
  // Recapitulation
  getRecapitulationById(id: string): Promise<IRecapitulationModel>;
  createRecapitulation(data: IRecapitulationModel): Promise<IRecapitulationModel>;
  updateRecapitulation(id: string, data: IRecapitulationModel): Promise<IRecapitulationModel>;
}
