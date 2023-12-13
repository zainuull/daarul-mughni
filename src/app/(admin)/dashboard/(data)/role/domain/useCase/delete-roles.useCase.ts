import { RoleRepository } from '../repository/role.repository';

export class DeleteRolesUseCase {
  constructor(private masterRepo: RoleRepository) {}

  async invoke(id: string) {
    return this.masterRepo.deleteRole(id);
  }
}
