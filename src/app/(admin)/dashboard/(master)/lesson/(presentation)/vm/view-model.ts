import { useState } from 'react';
import useStoreDatas from '../(components)/navigation/store/store.datas';
import useStoreLevel from '../(components)/navigation/store/store.level';
import { ILessonDataModel, ILessonQuery } from '../../domain/model/IModel';
import LessonAPIDataSourceImpl from '../../data/api/lesson.data.source';
import {
  CreateLessonUseCase,
  DeleteLessonUseCase,
  GetLessonByIdUseCase,
  GetLessonUseCase,
  GetLevelUseCase,
  UpdateLessonUseCase,
} from '../../domain/useCase';

export default function ViewModel() {
  const [, setLesson] = useStoreDatas();
  const [, setLevel] = useStoreLevel();
  const [lessonById, setLessonById] = useState<ILessonDataModel>();

  //repository
  const lessonAPiDataSource = new LessonAPIDataSourceImpl();

  //usecase
  const getLessonUseCase = new GetLessonUseCase(lessonAPiDataSource);
  const getLessonByIdUseCase = new GetLessonByIdUseCase(lessonAPiDataSource);
  const createLessonUseCase = new CreateLessonUseCase(lessonAPiDataSource);
  const updateLessonUseCase = new UpdateLessonUseCase(lessonAPiDataSource);
  const deleteLessonUseCase = new DeleteLessonUseCase(lessonAPiDataSource);
  //level
  const getLevelUseCase = new GetLevelUseCase(lessonAPiDataSource);

  async function getLesson(query?: ILessonQuery) {
    setLesson(await getLessonUseCase.invoke(query));
  }

  async function getLessonById(id: string) {
    setLessonById(await getLessonByIdUseCase.invoke(id));
  }

  async function createLesson(data: ILessonDataModel) {
    await createLessonUseCase.invoke(data);
  }

  async function updateLesson(id: string, data: ILessonDataModel) {
    await updateLessonUseCase.invoke(id, data);
  }

  async function deleteLesson(id: string) {
    await deleteLessonUseCase.invoke(id);
  }

  async function getLevel() {
    setLevel(await getLevelUseCase.invoke());
  }

  return {
    getLesson,
    getLessonById,
    createLesson,
    updateLesson,
    deleteLesson,
    getLevel,
    lessonById,
  };
}
