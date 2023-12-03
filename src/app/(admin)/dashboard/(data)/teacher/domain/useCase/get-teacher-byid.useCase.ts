import { TeacherRepository } from '../repository/teacher.repository';

export class GetTeacherByIdUseCase {
  constructor(private masterRepo: TeacherRepository) {}

  async invoke(id:string) {
    return this.masterRepo.getTeachersById(id);
  }
}
