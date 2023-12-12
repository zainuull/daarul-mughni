import { BerandaRepository } from '../repository/beranda.repository';

export class GetUserByIdUseCase {
  constructor(private masterRepo: BerandaRepository) {}

  async invoke(id: string) {
    return this.masterRepo.getUserById(id);
  }
}
