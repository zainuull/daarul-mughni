import { IAbsensiQuery } from '../model/IModel';
import { AbsensiRepository } from '../repository/absensi.repository';

export class GetStudentsUseCase {
  constructor(private masterRepo: AbsensiRepository) {}

  async invoke() {
    return this.masterRepo.getStudents();
  }
}
