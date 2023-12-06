import { BerandaRepository } from '../repository/beranda.repository';

export class GetUserByEmailUseCase {
  constructor(private masterRepo: BerandaRepository) {}

  async invoke(email: string) {
    return this.masterRepo.getUserByEmail(email);
  }
}
