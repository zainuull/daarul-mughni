import { AbsensiRepository } from '../repository/absensi.repository';

export class GetLevelByIdUseCase {
  constructor(private masterRepo: AbsensiRepository) {}

  async invoke(id: string) {
    return this.masterRepo.getLevelById(id);
  }
}
