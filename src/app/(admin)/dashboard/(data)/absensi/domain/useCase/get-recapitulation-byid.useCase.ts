import { AbsensiRepository } from "../repository/absensi.repository";

export class GetRecapitulationByIdUseCase {
  constructor(private masterRepo: AbsensiRepository) {}

  async invoke(id:string) {
    return this.masterRepo.getRecapitulationById(id);
  }
}