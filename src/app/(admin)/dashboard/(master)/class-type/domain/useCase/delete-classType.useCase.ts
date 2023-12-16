import { ClassTypeRepository } from '../repository/class-type.repository';

export class DeleteClassTypeUseCase {
  constructor(private masterRepo: ClassTypeRepository) {}

  async invoke(id: string) {
    return this.masterRepo.deleteClassType(id);
  }
}
