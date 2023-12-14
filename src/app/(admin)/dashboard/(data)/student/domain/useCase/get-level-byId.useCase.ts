import { StudentRepository } from '../repository/student.repository';

export class GetLevelByIdUseCase {
  constructor(private masterRepo: StudentRepository) {}

  async invoke(id: string) {
    return this.masterRepo.getLevelById(id);
  }
}
