import { ClassTypeRepository } from '../repository/class-type.repository';

export class GetClassUseCase {
  constructor(private masterRepo: ClassTypeRepository) {}

  async invoke() {
    return this.masterRepo.getClass();
  }
}
