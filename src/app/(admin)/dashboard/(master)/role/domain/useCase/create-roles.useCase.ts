import { IRoleDataModel } from '../model/IModel';
import { RoleRepository } from '../repository/role.repository';

export class CreateRolesUseCase {
  constructor(private masterRepo: RoleRepository) {}

  async invoke(data: IRoleDataModel) {
    return this.masterRepo.createRole(data);
  }
}
