import { useState } from 'react';
import RoleAPIDataSourceImpl from '../../data/api/role.data.source';
import { IRoleDataModel, IRoleQuery } from '../../domain/model/IModel';
import {
  CreateRolesUseCase,
  DeleteRolesUseCase,
  GetRolesByIdUseCase,
  GetRolesUseCase,
  UpdateRolesUseCase,
} from '../../domain/useCase';
import useStoreDatas from '../store/store.datas';

export default function ViewModel() {
  const [, setRoles] = useStoreDatas();
  const [roleById, setRoleById] = useState<IRoleDataModel>();

  //repository
  const roleDataSourceImpl = new RoleAPIDataSourceImpl();

  //usecase
  const getRolesUseCase = new GetRolesUseCase(roleDataSourceImpl);
  const getByIdRoleUseCase = new GetRolesByIdUseCase(roleDataSourceImpl);
  const createRoleUseCase = new CreateRolesUseCase(roleDataSourceImpl);
  const updateRoleUseCase = new UpdateRolesUseCase(roleDataSourceImpl);
  const deleteRoleUseCase = new DeleteRolesUseCase(roleDataSourceImpl);

  async function getRoles(query?: IRoleQuery) {
    setRoles(await getRolesUseCase.invoke(query));
  }

  async function getRoleById(id: string) {
    setRoleById(await getByIdRoleUseCase.invoke(id));
  }

  async function createRole(data: IRoleDataModel) {
    await createRoleUseCase.invoke(data);
  }

  async function updateRole(id: string, data: IRoleDataModel) {
    await updateRoleUseCase.invoke(id, data);
  }

  async function deleteRole(id: string) {
    await deleteRoleUseCase.invoke(id);
  }

  return {
    getRoles,
    getRoleById,
    createRole,
    updateRole,
    deleteRole,
    roleById,
  };
}
