import { StudentRepository } from '../repository/student.repository';

export class GetStudentByClassUseCase {
  constructor(private masterRepo: StudentRepository) {}

  async invoke(className: string) {
    return this.masterRepo.getStudentByClass(className);
  }
}
