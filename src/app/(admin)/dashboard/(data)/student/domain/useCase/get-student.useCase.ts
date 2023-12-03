import { IStudentQuery } from '../model/IModel';
import { StudentRepository } from '../repository/student.repository';

export class GetStudentsUseCase {
  constructor(private masterRepo: StudentRepository) {}

  async invoke(query?: IStudentQuery) {
    return this.masterRepo.getStudents(query);
  }
}
