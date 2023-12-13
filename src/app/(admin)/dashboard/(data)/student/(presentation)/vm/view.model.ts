import StudentAPIDataSourceImol from '../../data/api/student.data.source';
import { IStudentDataModel, IStudentModel, IStudentQuery } from '../../domain/model/IModel';
import {
  CreateStudentUseCase,
  DeleteStudentUseCase,
  GetLevelUseCase,
  GetStudentByClassUseCase,
  GetStudentByIdUseCase,
  GetStudentsUseCase,
  UpdateStudentUseCase,
} from '../../domain/useCase/index';
import {} from '../../domain/useCase/delete-student.useCase';
import useStoreDatas from '../store/store.datas';
import useResultFilter from '../store/store.result.filter';
import { useState } from 'react';
import { DeleteImageUseCase } from '../../domain/useCase/delete-image.useCase';
import useStoreLevel from '../store/store.level';

export default function ViewModel() {
  const [, setDatas] = useStoreDatas();
  const [, setLevel] = useStoreLevel();
  const [, setResultFilter] = useResultFilter();
  const [detailStudent, setDetailStudent] = useState<IStudentModel>();

  const studentDataSourceImpl = new StudentAPIDataSourceImol();

  const getStudentsUseCase = new GetStudentsUseCase(studentDataSourceImpl);
  const getStudentByIdUseCase = new GetStudentByIdUseCase(studentDataSourceImpl);
  const getStudentByClassUseCase = new GetStudentByClassUseCase(studentDataSourceImpl);
  const createStudentUseCase = new CreateStudentUseCase(studentDataSourceImpl);
  const deleteStudentUseCase = new DeleteStudentUseCase(studentDataSourceImpl);
  const deleteImageUseCase = new DeleteImageUseCase(studentDataSourceImpl);
  const updateStudentUseCase = new UpdateStudentUseCase(studentDataSourceImpl);
  //level
  const getLevelUseCase = new GetLevelUseCase(studentDataSourceImpl);

  async function getStudents(query?: IStudentQuery) {
    setDatas(await getStudentsUseCase.invoke(query));
  }

  async function getStudentById(id: string) {
    setDetailStudent(await getStudentByIdUseCase.invoke(id));
  }

  async function getStudentByClass(className: string) {
    setResultFilter(await getStudentByClassUseCase.invoke(className));
  }

  async function createStudent(data: IStudentDataModel) {
    await createStudentUseCase.invoke(data);
  }

  async function deleteStudent(id: string) {
    await deleteStudentUseCase.invoke(id);
  }

  async function deleteImage(publicId: string) {
    await deleteImageUseCase.invoke(publicId);
  }

  async function updateStudent(id: string, data: IStudentDataModel) {
    await updateStudentUseCase.invoke(id, data);
  }

  //Level
  async function getLevel() {
    setLevel(await getLevelUseCase.invoke());
  }

  return {
    getStudents,
    getStudentById,
    getStudentByClass,
    createStudent,
    deleteStudent,
    updateStudent,
    detailStudent,
    deleteImage,
    getLevel,
  };
}
