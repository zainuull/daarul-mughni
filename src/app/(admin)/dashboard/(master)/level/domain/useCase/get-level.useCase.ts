import { ILevelQuery } from '../model/IModel';
import { LevelRepository } from '../repository/LevelRepository';

export class GetLevelUseCase {
  constructor(private masterRepo: LevelRepository) {}

  async invoke(query?: ILevelQuery) {
    return this.masterRepo.getLevel(query);
  }
}
