import { RoleRepository } from '../repository/role.repository';

export class GetRolesByIdUseCase {
  constructor(private masterRepo: RoleRepository) {}

  async invoke(id: string) {
    return this.masterRepo.getRoleById(id);
  }
}
