import { StudentRepository } from '../repository/student.repository';

export class DeleteStudentUseCase {
  constructor(private masterRepo: StudentRepository) {}

  async invoke(id: string) {
    return this.masterRepo.deleteStudent(id);
  }
}
