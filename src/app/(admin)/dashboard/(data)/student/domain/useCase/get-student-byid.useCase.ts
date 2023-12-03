import { StudentRepository } from '../repository/student.repository';

export class GetStudentByIdUseCase {
  constructor(private masterRepo: StudentRepository) {}

  async invoke(id: string) {
    return this.masterRepo.getStudentById(id);
  }
}
