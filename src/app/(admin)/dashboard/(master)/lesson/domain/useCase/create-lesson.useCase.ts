import { ILessonDataModel } from '../model/IModel';
import { LessonRepository } from '../repository/lesson.repository';

export class CreateLessonUseCase {
  constructor(private masterRepo: LessonRepository) {}

  async invoke(data: ILessonDataModel) {
    return this.masterRepo.createLesson(data);
  }
}
