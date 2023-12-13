import { IRoleDataModel } from '../model/IModel';
import { RoleRepository } from '../repository/role.repository';

export class UpdateRolesUseCase {
  constructor(private masterRepo: RoleRepository) {}

  async invoke(id: string, data: IRoleDataModel) {
    return this.masterRepo.updateRole(id, data);
  }
}
