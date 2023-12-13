import TeacherAPIDataSourceImpl from '../../data/api/teacher.data.source';
import { ITeacherDataModel, ITeacherModel, ITeacherQuery } from '../../domain/model/IModel';
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
import useResultFilter from '../store/store.result.filter';
import { CreateUserUseCase } from '../../domain/useCase/create-user.useCase';
import { GetRoleUseCase } from '../../domain/useCase/get-role.useCase';
import useStoreRole from '../store/store.role';

export default function ViewModel() {
  const [, setDatas] = useStoreDatas();
  const [, setFilter] = useResultFilter();
  const [detailTeacher, setDetailTeacher] = useState<ITeacherModel>();
  const [, setRole] = useStoreRole();

  const teacherDataSourceImpl = new TeacherAPIDataSourceImpl();

  const getTeacherUseCase = new GetTeacherUseCase(teacherDataSourceImpl);
  const getTeachersByIdUseCase = new GetTeacherByIdUseCase(teacherDataSourceImpl);
  const getTeacherByPositionUseCase = new GetTeacherByPositionUseCase(teacherDataSourceImpl);
  const createTeacherUseCase = new CreateTeacherUseCase(teacherDataSourceImpl);
  const createUserUseCase = new CreateUserUseCase(teacherDataSourceImpl);
  const deleteTeacherUseCase = new DeleteTeacherUseCase(teacherDataSourceImpl);
  const updateTeacherUseCase = new UpdateTeacherUseCase(teacherDataSourceImpl);
  // Role
  const getRoleUseCase = new GetRoleUseCase(teacherDataSourceImpl);

  async function getTeachers(query?: ITeacherQuery) {
    setDatas(await getTeacherUseCase.invoke(query));
  }

  async function getTeachersById(id: string) {
    setDetailTeacher(await getTeachersByIdUseCase.invoke(id));
  }

  async function getTeacherByPosition(positionName: string) {
    setFilter(await getTeacherByPositionUseCase.invoke(positionName));
  }

  async function createTeacher(data: ITeacherDataModel) {
    await createTeacherUseCase.invoke(data);
  }

  async function createUser(data: any) {
    await createUserUseCase.invoke(data);
  }

  async function deleteTeacher(id: string) {
    await deleteTeacherUseCase.invoke(id);
  }

  async function updateTeacher(id: string, data: ITeacherDataModel) {
    await updateTeacherUseCase.invoke(id, data);
  }

  async function getRole() {
    setRole(await getRoleUseCase.invoke());
  }

  return {
    getTeachers,
    getTeachersById,
    getTeacherByPosition,
    createTeacher,
    deleteTeacher,
    updateTeacher,
    detailTeacher,
    createUser,
    getRole,
  };
}
