import { ILessonDataModel, ILessonModel, ILessonQuery } from '../model/IModel';

export interface LessonRepository {
  getLesson(query?: ILessonQuery): Promise<ILessonModel>;
  getLessonById(id: string): Promise<ILessonDataModel>;
  createLesson(data: ILessonDataModel): Promise<ILessonModel>;
  updateLesson(id: string, data: ILessonDataModel): Promise<ILessonModel>;
  deleteLesson(id: string): Promise<ILessonModel>;
  //Level
  getLevel(): Promise<any>;
}
