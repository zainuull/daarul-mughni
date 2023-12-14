import { AbsensiRepository } from '../repository/absensi.repository';

export class GetClassByIdUseCase {
  constructor(private masterRepo: AbsensiRepository) {}

  async invoke(id: string) {
    return this.masterRepo.getClassById(id);
  }
}
