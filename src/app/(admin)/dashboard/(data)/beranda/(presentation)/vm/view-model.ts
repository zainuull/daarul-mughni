import { useState } from 'react';
import BerandaAPIDataSourceImpl from '../../data/api/beranda.data.source';
import { GetUserByEmailUseCase } from '../../domain/useCase/get-user-by-email';
import { IBerandaModel } from '../../domain/model/IModel';
import useStoreDatas from '../store/store.datas';

export default function ViewModel() {
  const [,setDetailUser] = useStoreDatas()

  const berandaDataSourceImpl = new BerandaAPIDataSourceImpl();

  const getUserByEmailUseCase = new GetUserByEmailUseCase(berandaDataSourceImpl);

  async function getUserByEmail(email: string) {
    setDetailUser(await getUserByEmailUseCase.invoke(email));
  }

  return {
    getUserByEmail,
  };
}
