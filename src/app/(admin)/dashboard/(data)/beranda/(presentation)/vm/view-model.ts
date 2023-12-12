import BerandaAPIDataSourceImpl from '../../data/api/beranda.data.source';
import { GetUserByIdUseCase } from '../../domain/useCase/get-user-by-id';
import useStoreDatas from '../store/store.datas';

export default function ViewModel() {
  const [, setDetailUser] = useStoreDatas();

  const berandaDataSourceImpl = new BerandaAPIDataSourceImpl();

  const getUserByIdUseCase = new GetUserByIdUseCase(berandaDataSourceImpl);

  async function getUserById(email: string) {

    setDetailUser(await getUserByIdUseCase.invoke(email));
  }

  return {
    getUserById,
  };
}
