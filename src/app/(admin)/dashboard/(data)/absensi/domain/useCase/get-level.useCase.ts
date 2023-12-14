import { AbsensiRepository } from '../repository/absensi.repository';

export class GetLevelUseCase {
  constructor(private masterRepo: AbsensiRepository) {}

  async invoke() {
    return this.masterRepo.getLevel();
  }
}
