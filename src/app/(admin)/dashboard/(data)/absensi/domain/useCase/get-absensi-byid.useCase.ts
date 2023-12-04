import { AbsensiRepository } from "../repository/absensi.repository";

export class GetAbsensiByIdUseCase {
  constructor(private masterRepo: AbsensiRepository) {}

  async invoke(id:string) {
    return this.masterRepo.getAbsensiById(id);
  }
}