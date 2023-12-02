import { TeacherRepository } from '../repository/teacher.repository';

export class GetTeacherByPositionUseCase {
  constructor(private masterRepo: TeacherRepository) {}

  async invoke(positionName:string) {
    return this.masterRepo.getTeacherByPosition(positionName);
  }
}
