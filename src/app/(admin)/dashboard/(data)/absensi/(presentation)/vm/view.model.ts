import { useState } from 'react';
import AbsensiAPIDataSourceImpl from '../../data/api/absensi.data.source';
import { IAbsensiDataModel, IAbsensiQuery } from '../../domain/model/IModel';
import {
  CreateAbsensiUseCase,
  DeleteAbsensiUseCase,
  GetAbsensiByClassUseCase,
  GetAbsensiByIdUseCase,
  GetAbsensiUseCase,
  UpdateAbsensiUseCase,
} from '../../domain/useCase';
import useStoreDatas from '../store/store.datas';
import useResultFilter from '../store/store.result.filter';

export default function ViewModel() {
  const [, setDatas] = useStoreDatas();
  const [, setResultFilter] = useResultFilter();
  const [detailAbsensi, setDetailAbsensi] = useState<IAbsensiDataModel>();

  const absensiDataSourceImpl = new AbsensiAPIDataSourceImpl();

  const getAbsensiUseCase = new GetAbsensiUseCase(absensiDataSourceImpl);
  const getAbsensiByIdUseCase = new GetAbsensiByIdUseCase(absensiDataSourceImpl);
  const getAbsensiByClassUseCase = new GetAbsensiByClassUseCase(absensiDataSourceImpl);
  const createAbsensiUseCase = new CreateAbsensiUseCase(absensiDataSourceImpl);
  const deleteAbsensiUseCase = new DeleteAbsensiUseCase(absensiDataSourceImpl);
  const updateAbsensiUseCase = new UpdateAbsensiUseCase(absensiDataSourceImpl);

  async function getAbsensi(query?: IAbsensiQuery) {
    setDatas(await getAbsensiUseCase.invoke(query));
  }

  async function getAbsensiById(id: string) {
    setDetailAbsensi(await getAbsensiByIdUseCase.invoke(id));
  }

  async function getAbsensiByClass(className: string) {
    setResultFilter(await getAbsensiByClassUseCase.invoke(className));
  }

  async function createAbsensi(data: IAbsensiDataModel) {
    await createAbsensiUseCase.invoke(data);
  }

  async function deleteAbsensi(id: string) {
    await deleteAbsensiUseCase.invoke(id);
  }

  async function updateAbsensi(id: string, data: IAbsensiDataModel) {
    await updateAbsensiUseCase.invoke(id, data);
  }

  return {
    getAbsensi,
    getAbsensiById,
    getAbsensiByClass,
    createAbsensi,
    deleteAbsensi,
    updateAbsensi,
    detailAbsensi,
  };
}
