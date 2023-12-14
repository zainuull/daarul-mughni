import { ClassRepository } from '../repository/class.repository';

export class DeleteClassUseCase {
  constructor(private masterRepo: ClassRepository) {}

  async invoke(id: string) {
    return this.masterRepo.deleteClass(id);
  }
}
