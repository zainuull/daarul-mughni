import { useState } from 'react';
import AbsensiAPIDataSourceImpl from '../../data/api/absensi.data.source';
import { IAbsensiDataModel, IAbsensiQuery, IRecapitulationModel } from '../../domain/model/IModel';
import {
  CreateAbsensiUseCase,
  DeleteAbsensiUseCase,
  GetAbsensiByClassUseCase,
  GetAbsensiByIdUseCase,
  GetAbsensiUseCase,
  GetStudentsByClassTypeNameUseCase,
  UpdateAbsensiUseCase,
} from '../../domain/useCase';
import useStoreDatas from '../store/store.datas';
import useResultFilter from '../store/store.result.filter';
import { CreateRecapitulationUseCase } from '../../domain/useCase/create-recapitulation.useCase';
import { GetRecapitulationByIdUseCase } from '../../domain/useCase/get-recapitulation-byid.useCase';
import { UpdateRecapitulationUseCase } from '../../domain/useCase/update-recapitulation.useCase';

export default function ViewModel() {
  const [, setDatas] = useStoreDatas();
  const [, setResultFilter] = useResultFilter();
  const [detailAbsensi, setDetailAbsensi] = useState<any>();
  const [detailRecap, setDetailRecap] = useState<IRecapitulationModel>();
  const [dataStudents, setDataStudents] = useState<any>();

  const absensiDataSourceImpl = new AbsensiAPIDataSourceImpl();

  const getAbsensiUseCase = new GetAbsensiUseCase(absensiDataSourceImpl);
  const getAbsensiByIdUseCase = new GetAbsensiByIdUseCase(absensiDataSourceImpl);
  const getAbsensiByClassUseCase = new GetAbsensiByClassUseCase(absensiDataSourceImpl);
  const createAbsensiUseCase = new CreateAbsensiUseCase(absensiDataSourceImpl);
  const deleteAbsensiUseCase = new DeleteAbsensiUseCase(absensiDataSourceImpl);
  const updateAbsensiUseCase = new UpdateAbsensiUseCase(absensiDataSourceImpl);
  // Recapitulation
  const getRecapitulationByIdUseCase = new GetRecapitulationByIdUseCase(absensiDataSourceImpl);
  const createRecapitulationUseCase = new CreateRecapitulationUseCase(absensiDataSourceImpl);
  const updateRecapitulationUseCase = new UpdateRecapitulationUseCase(absensiDataSourceImpl);
  // Students
  const getStudentsByClassTypeNameUseCase = new GetStudentsByClassTypeNameUseCase(
    absensiDataSourceImpl
  );

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

  // Recapitulation
  async function getRecapitulationById(id: string) {
    setDetailRecap(await getRecapitulationByIdUseCase.invoke(id));
  }

  async function createRecapitulation(data: IRecapitulationModel) {
    await createRecapitulationUseCase.invoke(data);
  }

  async function updateRecapitulation(id: string, data: IRecapitulationModel) {
    await updateRecapitulationUseCase.invoke(id, data);
  }

  //Students
  async function getStudentsByClassTypeName(classTypeName: string) {
    setDataStudents(await getStudentsByClassTypeNameUseCase.invoke(classTypeName));
  }

  return {
    getAbsensi,
    getAbsensiById,
    getAbsensiByClass,
    createAbsensi,
    deleteAbsensi,
    updateAbsensi,
    detailAbsensi,
    createRecapitulation,
    getRecapitulationById,
    detailRecap,
    updateRecapitulation,
    getStudentsByClassTypeName,
    dataStudents,
  };
}
