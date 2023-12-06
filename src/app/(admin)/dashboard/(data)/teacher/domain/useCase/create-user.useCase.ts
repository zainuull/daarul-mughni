import { TeacherRepository } from '../repository/teacher.repository';

export class CreateUserUseCase {
  constructor(private masterRepo: TeacherRepository) {}

  async invoke(data: any) {
    return this.masterRepo.createUser(data);
  }
}
