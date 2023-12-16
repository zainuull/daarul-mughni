import { ILevelDataModel } from '../model/IModel';
import { LevelRepository } from '../repository/LevelRepository';

export class UpdateLevelUseCase {
  constructor(private masterRepo: LevelRepository) {}

  async invoke(id: string, data: ILevelDataModel) {
    return this.masterRepo.updateLevel(id, data);
  }
}
