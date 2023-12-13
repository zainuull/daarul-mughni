import { LevelRepository } from '../repository/LevelRepository';

export class DeleteLevelUseCase {
  constructor(private masterRepo: LevelRepository) {}

  async invoke(id: string) {
    return this.masterRepo.deleteLevel(id);
  }
}
