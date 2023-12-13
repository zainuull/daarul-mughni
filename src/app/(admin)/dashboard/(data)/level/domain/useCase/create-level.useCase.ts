import { ILevelDataModel } from '../model/IModel';
import { LevelRepository } from '../repository/LevelRepository';

export class CreateLevelUseCase {
  constructor(private masterRepo: LevelRepository) {}

  async invoke(data: ILevelDataModel) {
    return this.masterRepo.createLevel(data);
  }
}
