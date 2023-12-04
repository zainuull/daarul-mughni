import { AbsensiRepository } from "../repository/absensi.repository";

export class DeleteAbsensiUseCase {
  constructor(private masterRepo: AbsensiRepository) {}

  async invoke(id:string) {
    return this.masterRepo.deleteAbsensi(id);
  }
}