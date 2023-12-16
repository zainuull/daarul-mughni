import { ClassTypeRepository } from '../repository/class-type.repository';

export class GetClassTypeByIdUseCase {
  constructor(private masterRepo: ClassTypeRepository) {}

  async invoke(id: string) {
    return this.masterRepo.getClassTypeById(id);
  }
}
