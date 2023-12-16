import { ILessonDataModel } from '../model/IModel';
import { LessonRepository } from '../repository/lesson.repository';

export class UpdateLessonUseCase {
  constructor(private masterRepo: LessonRepository) {}

  async invoke(id: string, data: ILessonDataModel) {
    return this.masterRepo.updateLesson(id, data);
  }
}
