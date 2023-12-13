import { AbsensiRepository } from '../repository/absensi.repository';

export class GetStudentsByClassTypeNameUseCase {
  constructor(private masterRepo: AbsensiRepository) {}

  async invoke(classTypeName:string) {
    return this.masterRepo.getStudentsByClassTypeName(classTypeName);
  }
}
