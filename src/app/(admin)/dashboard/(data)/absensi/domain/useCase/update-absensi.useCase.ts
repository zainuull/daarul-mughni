import { IAbsensiDataModel } from '../model/IModel';
import { AbsensiRepository } from '../repository/absensi.repository';

export class UpdateAbsensiUseCase {
  constructor(private masterRepo: AbsensiRepository) {}

  async invoke(id: string, data: IAbsensiDataModel) {
    return this.masterRepo.updateAbsensi(id, data);
  }
}
