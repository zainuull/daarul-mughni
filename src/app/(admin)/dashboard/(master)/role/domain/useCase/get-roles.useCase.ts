import { IRoleQuery } from '../model/IModel';
import { RoleRepository } from '../repository/role.repository';

export class GetRolesUseCase {
  constructor(private masterRepo: RoleRepository) {}

  async invoke(query?: IRoleQuery) {
    return this.masterRepo.getRoles(query);
  }
}
