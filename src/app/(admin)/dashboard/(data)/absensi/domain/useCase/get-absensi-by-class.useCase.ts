import { AbsensiRepository } from "../repository/absensi.repository";

export class GetAbsensiByClassUseCase {
  constructor(private masterRepo: AbsensiRepository) {}

  async invoke(className:string) {
    return this.masterRepo.getAbsensiByClass(className);
  }
}