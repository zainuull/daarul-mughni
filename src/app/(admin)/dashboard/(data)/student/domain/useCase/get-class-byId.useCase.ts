import { StudentRepository } from '../repository/student.repository';

export class GetClassByIdUseCase {
  constructor(private masterRepo: StudentRepository) {}

  async invoke(id: string) {
    return this.masterRepo.getClassById(id);
  }
}
