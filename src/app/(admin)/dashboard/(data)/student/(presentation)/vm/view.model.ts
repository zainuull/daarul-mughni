import StudentAPIDataSourceImol from '../../data/api/student.data.source';
import { IStudentDataModel, IStudentQuery } from '../../domain/model/IModel';
import {
  CreateStudentUseCase,
  DeleteStudentUseCase,
  GetStudentByClassUseCase,
  GetStudentByIdUseCase,
  GetStudentsUseCase,
  UpdateStudentUseCase,
} from '../../domain/useCase/index';
import {  } from '../../domain/useCase/delete-student.useCase';
import useStoreDatas from '../store/store.datas';
import useResultFilter from '../store/store.result.filter';

export default function ViewModel() {
  const [, setDatas] = useStoreDatas();
  const [, setResultFilter] = useResultFilter();

  const studentDataSourceImpl = new StudentAPIDataSourceImol();

  const getStudentsUseCase = new GetStudentsUseCase(studentDataSourceImpl);
  const getStudentByIdUseCase = new GetStudentByIdUseCase(studentDataSourceImpl);
  const getStudentByClassUseCase = new GetStudentByClassUseCase(studentDataSourceImpl);
  const createStudentUseCase = new CreateStudentUseCase(studentDataSourceImpl);
  const deleteStudentUseCase = new DeleteStudentUseCase(studentDataSourceImpl);
  const updateStudentUseCase = new UpdateStudentUseCase(studentDataSourceImpl);

  async function getStudents(query?: IStudentQuery) {
    setDatas(await getStudentsUseCase.invoke(query));
  }

  async function getStudentById(id: string) {
    setDatas(await getStudentByIdUseCase.invoke(id));
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

  async function updateStudent(id: string, data: IStudentDataModel) {
    await updateStudentUseCase.invoke(id, data);
  }

  return {
    getStudents,
    getStudentById,
    getStudentByClass,
    createStudent,
    deleteStudent,
    updateStudent,
  };
}