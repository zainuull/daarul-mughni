import { ClassRepository } from '../repository/class.repository';

export class GetLevelUseCase {
  constructor(private masterRepo: ClassRepository) {}

  async invoke() {
    return this.masterRepo.getLevel();
  }
}
