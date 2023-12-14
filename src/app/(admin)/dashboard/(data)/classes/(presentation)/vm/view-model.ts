import { useState } from 'react';
import useStoreDatas from '../store/store.datas';
import { IClassDataModel, IClassQuery } from '../../domain/model/IModel';
import ClassAPIDataSourceImpl from '../../data/api/class.data.source';
import {
  CreateClassUseCase,
  DeleteClassUseCase,
  GetClassByIdUseCase,
  GetClassUseCase,
  GetLevelUseCase,
  UpdateClassUseCase,
} from '../../domain/useCase';
import useStoreLevel from '../store/store.level';

export default function ViewModel() {
  const [, setClass] = useStoreDatas();
  const [, setLevel] = useStoreLevel();
  const [classById, setClassById] = useState<IClassDataModel>();

  //repository
  const classAPiDataSource = new ClassAPIDataSourceImpl();

  //usecase
  const getClassUseCase = new GetClassUseCase(classAPiDataSource);
  const getClassByIdUseCase = new GetClassByIdUseCase(classAPiDataSource);
  const createClassUseCase = new CreateClassUseCase(classAPiDataSource);
  const updateClassUseCase = new UpdateClassUseCase(classAPiDataSource);
  const deleteClassUseCase = new DeleteClassUseCase(classAPiDataSource);
  //level
  const getLevelUseCase = new GetLevelUseCase(classAPiDataSource);

  async function getClass(query?: IClassQuery) {
    setClass(await getClassUseCase.invoke(query));
  }

  async function getClassById(id: string) {
    setClassById(await getClassByIdUseCase.invoke(id));
  }

  async function createClass(data: IClassDataModel) {
    await createClassUseCase.invoke(data);
  }

  async function updateClass(id: string, data: IClassDataModel) {
    await updateClassUseCase.invoke(id, data);
  }

  async function deleteClass(id: string) {
    await deleteClassUseCase.invoke(id);
  }

  async function getLevel() {
    setLevel(await getLevelUseCase.invoke());
  }

  return {
    getClass,
    getClassById,
    createClass,
    updateClass,
    deleteClass,
    getLevel,
    classById,
  };
}
