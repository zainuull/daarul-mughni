import { ITeacherDataModel } from '../model/IModel';
import { TeacherRepository } from '../repository/teacher.repository';

export class UpdateTeacherUseCase {
  constructor(private masterRepo: TeacherRepository) {}

  async invoke(id: string, data?: ITeacherDataModel) {
    return this.masterRepo.updateTeacher(id, data);
  }
}
