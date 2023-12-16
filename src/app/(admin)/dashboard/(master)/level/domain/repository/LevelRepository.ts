import { ILevelDataModel, ILevelModel, ILevelQuery } from '../model/IModel';

export interface LevelRepository {
  getLevel(query?: ILevelQuery): Promise<ILevelModel>;
  getLevelById(id: string): Promise<ILevelModel>;
  createLevel(data: ILevelDataModel): Promise<ILevelDataModel>;
  updateLevel(id: string, data: ILevelDataModel): Promise<ILevelDataModel>;
  deleteLevel(id: string): Promise<ILevelDataModel>;
}
