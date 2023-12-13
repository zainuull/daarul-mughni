import { ITeacherQuery } from '../model/IModel';
import { TeacherRepository } from '../repository/teacher.repository';

export class GetRoleUseCase {
  constructor(private masterRepo: TeacherRepository) {}

  async invoke() {
    return this.masterRepo.getRole();
  }
}
