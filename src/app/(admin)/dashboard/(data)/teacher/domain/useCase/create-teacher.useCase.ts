import { ITeacherDataModel } from '../model/IModel';
import { TeacherRepository } from '../repository/teacher.repository';

export class CreateTeacherUseCase {
  constructor(private masterRepo: TeacherRepository) {}

  async invoke(data: ITeacherDataModel) {
    return this.masterRepo.createTeacher(data);
  }
}
