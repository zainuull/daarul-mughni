import { ITeacherDataModel, ITeacherModel } from '@/model/teacher';
import TeacherAPIDataSourceImpl from '../../data/api/teacher.data.source';
import { ITeacherQuery } from '../../domain/model/IModel';
import {
  CreateTeacherUseCase,
  DeleteTeacherUseCase,
  GetTeacherUseCase,
  UpdateTeacherUseCase,
  GetTeacherByIdUseCase,
  GetTeacherByPositionUseCase,
} from '../../domain/useCase';
import useStoreDatas from '../store/store.datas';
import { useState } from 'react';

export default function ViewModel() {
  const [, setDatas] = useStoreDatas();
  const [resultFilter, setResultFilter] = useState<ITeacherModel>();

  const teacherDataSourceImpl = new TeacherAPIDataSourceImpl();

  const getTeacherUseCase = new GetTeacherUseCase(teacherDataSourceImpl);
  const getTeachersByIdUseCase = new GetTeacherByIdUseCase(teacherDataSourceImpl);
  const getTeacherByPositionUseCase = new GetTeacherByPositionUseCase(teacherDataSourceImpl);
  const createTeacherUseCase = new CreateTeacherUseCase(teacherDataSourceImpl);
  const deleteTeacherUseCase = new DeleteTeacherUseCase(teacherDataSourceImpl);
  const updateTeacherUseCase = new UpdateTeacherUseCase(teacherDataSourceImpl);

  async function getTeachers(query?: ITeacherQuery) {
    setDatas(await getTeacherUseCase.invoke(query));
  }

  async function getTeachersById(id: string) {
    setDatas(await getTeachersByIdUseCase.invoke(id));
  }

  async function getTeacherByPosition(positionName: string) {
    setResultFilter(await getTeacherByPositionUseCase.invoke(positionName));
  }

  async function createTeacher(data: ITeacherDataModel) {
    await createTeacherUseCase.invoke(data);
  }

  async function deleteTeacher(id: string) {
    await deleteTeacherUseCase.invoke(id);
  }

  async function updateTeacher(id: string, data: ITeacherDataModel) {
    await updateTeacherUseCase.invoke(id, data);
  }

  return {
    getTeachers,
    getTeachersById,
    getTeacherByPosition,
    createTeacher,
    deleteTeacher,
    updateTeacher,
    resultFilter,
  };
}
