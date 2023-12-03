import { IStudentDataModel } from '../model/IModel';
import { StudentRepository } from '../repository/student.repository';

export class UpdateStudentUseCase {
  constructor(private masterRepo: StudentRepository) {}

  async invoke(id: string, data: IStudentDataModel) {
    return this.masterRepo.updateStudent(id, data);
  }
}
