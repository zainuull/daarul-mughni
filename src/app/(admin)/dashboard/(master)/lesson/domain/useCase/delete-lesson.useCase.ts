import { LessonRepository } from '../repository/lesson.repository';

export class DeleteLessonUseCase {
  constructor(private masterRepo: LessonRepository) {}

  async invoke(id: string) {
    return this.masterRepo.deleteLesson(id);
  }
}
