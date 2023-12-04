import { IAbsensiDataModel } from "../model/IModel";
import { AbsensiRepository } from "../repository/absensi.repository";

export class CreateAbsensiUseCase {
  constructor(private masterRepo: AbsensiRepository) {}

  async invoke(data:IAbsensiDataModel) {
    return this.masterRepo.createAbsensi(data);
  }
}