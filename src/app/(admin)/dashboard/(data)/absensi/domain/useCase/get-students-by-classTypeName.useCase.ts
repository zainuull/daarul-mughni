import { AbsensiRepository } from '../repository/absensi.repository';

export class GetStudentsByClassTypeNameUseCase {
  constructor(private masterRepo: AbsensiRepository) {}

  async invoke(classTypeName:string) {
     console.log('kucing 2', classTypeName);
    return this.masterRepo.getStudentsByClassTypeName(classTypeName);
  }
}
