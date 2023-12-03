
import { IStudentDataModel } from '../model/IModel';
import { StudentRepository } from '../repository/student.repository';

export class CreateStudentUseCase {
  constructor(private masterRepo: StudentRepository) {}

  async invoke(data: IStudentDataModel) {
    return this.masterRepo.createStudent(data);
  }
}
