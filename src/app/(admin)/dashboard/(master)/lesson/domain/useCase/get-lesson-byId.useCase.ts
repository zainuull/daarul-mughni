import { LessonRepository } from '../repository/lesson.repository';

export class GetLessonByIdUseCase {
  constructor(private masterRepo: LessonRepository) {}

  async invoke(id: string) {
    return this.masterRepo.getLessonById(id);
  }
}
