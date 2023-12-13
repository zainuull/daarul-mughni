import { useState } from 'react';
import {ILevelDataModel, ILevelQuery } from '../../domain/model/IModel';
import useStoreDatas from '../store/store.datas';
import LevelAPIDataSourceImpl from '../../data/api/level.data.source';
import {
  CreateLevelUseCase,
  DeleteLevelUseCase,
  GetLevelByIdUseCase,
  GetLevelUseCase,
  UpdateLevelUseCase,
} from '../../domain/useCase';

export default function ViewModel() {
  const [, setLevel] = useStoreDatas();
  const [levelById, setLevelById] = useState<any>();

  //repository
  const levelDataSourceImpl = new LevelAPIDataSourceImpl();

  //usecase
  const getLevelUseCase = new GetLevelUseCase(levelDataSourceImpl);
  const getLevelByIdUseCase = new GetLevelByIdUseCase(levelDataSourceImpl);
  const createLevelUseCase = new CreateLevelUseCase(levelDataSourceImpl);
  const updateLevelUseCase = new UpdateLevelUseCase(levelDataSourceImpl);
  const deleteLevelUseCase = new DeleteLevelUseCase(levelDataSourceImpl);

  async function getLevel(query?: ILevelQuery) {
    setLevel(await getLevelUseCase.invoke(query));
  }

  async function getLevelById(id: string) {
    setLevelById(await getLevelByIdUseCase.invoke(id));
  }

  async function createLevel(data: ILevelDataModel) {
      await createLevelUseCase.invoke(data)
  }

  async function updateLevel(id: string, data: ILevelDataModel) {
    await updateLevelUseCase.invoke(id, data);
  }

  async function deleteLevel(id: string) {
    await deleteLevelUseCase.invoke(id);
  }

  return {
    getLevel,
    getLevelById,
    createLevel,
    updateLevel,
    deleteLevel,
    levelById
  }
}
