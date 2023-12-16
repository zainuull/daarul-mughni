import { LessonRepository } from '../repository/lesson.repository';

export class GetLevelUseCase {
  constructor(private masterRepo: LessonRepository) {}

  async invoke() {
    return this.masterRepo.getLevel();
  }
}
