import { ILessonQuery } from '../model/IModel';
import { LessonRepository } from '../repository/lesson.repository';

export class GetLessonUseCase {
  constructor(private masterRepo: LessonRepository) {}

  async invoke(query?: ILessonQuery) {
    return this.masterRepo.getLesson(query);
  }
}
