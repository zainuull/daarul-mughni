import { IStudentQuery } from '../model/IModel';
import { StudentRepository } from '../repository/student.repository';

export class GetLevelUseCase {
  constructor(private masterRepo: StudentRepository) {}

  async invoke() {
    return this.masterRepo.getLevel();
  }
}
