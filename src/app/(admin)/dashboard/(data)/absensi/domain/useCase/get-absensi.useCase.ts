import { IAbsensiQuery } from "../model/IModel";
import { AbsensiRepository } from "../repository/absensi.repository";

export class GetAbsensiUseCase {
  constructor(private masterRepo: AbsensiRepository) {}

  async invoke(query?: IAbsensiQuery) {
    return this.masterRepo.getAbsensi(query);
  }
}