import { IRoleDataModel, IRoleModel, IRoleQuery } from '../model/IModel';

export interface RoleRepository {
  getRoles(query?: IRoleQuery): Promise<IRoleModel>;
  getRoleById(id: string): Promise<IRoleDataModel>;
  createRole(data: IRoleDataModel): Promise<IRoleModel>;
  updateRole(id: string, data: IRoleDataModel): Promise<IRoleModel>;
  deleteRole(id: string): Promise<IRoleModel>;
}
