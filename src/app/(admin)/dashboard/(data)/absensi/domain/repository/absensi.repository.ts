import { IClassDataModel } from '../../../classes/domain/model/IModel';
import { ILevelDataModel, ILevelModel } from '../../../level/domain/model/IModel';
import {
  IAbsensiDataModel,
  IAbsensiModel,
  IAbsensiQuery,
  IRecapitulationModel,
} from '../model/IModel';

export interface AbsensiRepository {
  getAbsensi(query?: IAbsensiQuery): Promise<IAbsensiModel>;
  getAbsensiById(id: string): Promise<IAbsensiDataModel>;
  getStudentsByClassTypeName(id: string): Promise<any>;
  getAbsensiByClass(className: string): Promise<IAbsensiModel>;
  createAbsensi(data: IAbsensiDataModel): Promise<IAbsensiModel>;
  updateAbsensi(id: string, data: IAbsensiDataModel): Promise<IAbsensiModel>;
  deleteAbsensi(id: string): Promise<IAbsensiModel>;
  // Recapitulation
  getRecapitulationById(id: string): Promise<IRecapitulationModel>;
  createRecapitulation(data: IRecapitulationModel): Promise<IRecapitulationModel>;
  updateRecapitulation(id: string, data: IRecapitulationModel): Promise<IRecapitulationModel>;
  //level
  getLevel(): Promise<ILevelModel>;
  getLevelById(id: string): Promise<ILevelDataModel>;
  //Class
  getClassById(id: string): Promise<IClassDataModel>;
}
