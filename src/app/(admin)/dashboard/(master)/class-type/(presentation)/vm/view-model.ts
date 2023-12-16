import { useState } from 'react';
import ClassTypeAPIDataSourceImpl from '../../data/api/class-type.source';
import { IClassTypeDataModel, IClassTypeQuery } from '../../domain/model/IModel';
import {
  CreateClassTypeUseCase,
  DeleteClassTypeUseCase,
  GetClassTypeByIdUseCase,
  GetClassTypeUseCase,
  GetClassUseCase,
  UpdateClassTypeUseCase,
} from '../../domain/useCase';
import useStoreClass from '../store/store.class';
import useStoreDatas from '../store/store.datas';
import { IClassDataModel } from '../../../classes/domain/model/IModel';

export default function ViewModel() {
  const [, setDatas] = useStoreDatas();
  const [, setClass] = useStoreClass();
  const [detailClassType, setDetailClassType] = useState<IClassDataModel>();

  //repository
  const classTypeRepository = new ClassTypeAPIDataSourceImpl();

  //usecase
  const getClassTypeUseCase = new GetClassTypeUseCase(classTypeRepository);
  const getClassTypeByIdUseCase = new GetClassTypeByIdUseCase(classTypeRepository);
  const createClassTypeUseCase = new CreateClassTypeUseCase(classTypeRepository);
  const updateClassTypeUseCase = new UpdateClassTypeUseCase(classTypeRepository);
  const deleteClassTypeUseCase = new DeleteClassTypeUseCase(classTypeRepository);
  //Class
  const getClassuUseCase = new GetClassUseCase(classTypeRepository);

  async function getClassType(query?: IClassTypeQuery) {
    setDatas(await getClassTypeUseCase.invoke(query));
  }

  async function getClassTypeById(id: string) {
    setDetailClassType(await getClassTypeByIdUseCase.invoke(id));
  }

  async function createClassType(data: IClassTypeDataModel) {
    await createClassTypeUseCase.invoke(data);
  }

  async function updateClassType(id: string, data: IClassTypeDataModel) {
    await updateClassTypeUseCase.invoke(id, data);
  }

  async function deleteClassType(id: string) {
    await deleteClassTypeUseCase.invoke(id);
  }

  //Class
  async function getClass() {
    setClass(await getClassuUseCase.invoke());
  }

  return {
    getClassType,
    getClassTypeById,
    createClassType,
    updateClassType,
    deleteClassType,
    getClass,
    detailClassType,
  };
}
