import { AbsensiRepository } from '../repository/absensi.repository';

export class GetStudentsByClassTypeNameUseCase {
  constructor(private masterRepo: AbsensiRepository) {}

  async invoke(id: string) {
    return this.masterRepo.getStudentsByClassTypeName(id);
  }
}
