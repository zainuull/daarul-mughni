import { ILevelQuery } from '../model/IModel';
import { LevelRepository } from '../repository/LevelRepository';

export class GetLevelByIdUseCase {
  constructor(private masterRepo: LevelRepository) {}

  async invoke(id: string) {
    return this.masterRepo.getLevelById(id);
  }
}
