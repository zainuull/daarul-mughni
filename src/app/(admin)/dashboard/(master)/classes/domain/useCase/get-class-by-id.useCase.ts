import { ClassRepository } from '../repository/class.repository';

export class GetClassByIdUseCase {
  constructor(private masterRepo: ClassRepository) {}

  async invoke(id: string) {
    return this.masterRepo.getClassById(id);
  }
}
