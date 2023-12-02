import { TeacherRepository } from '../repository/teacher.repository';

export class DeleteTeacherUseCase {
  constructor(private masterRepo: TeacherRepository) {}

  async invoke(id?: string) {
    return this.masterRepo.deleteTeacher(id);
  }
}
