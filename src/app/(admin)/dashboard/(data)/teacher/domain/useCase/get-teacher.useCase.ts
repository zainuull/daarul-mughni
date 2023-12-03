import { ITeacherQuery } from '../model/IModel';
import { TeacherRepository } from '../repository/teacher.repository';

export class GetTeacherUseCase {
  constructor(private masterRepo: TeacherRepository) {}

  async invoke(query?: ITeacherQuery) {
    return this.masterRepo.getTeachers(query);
  }
}
