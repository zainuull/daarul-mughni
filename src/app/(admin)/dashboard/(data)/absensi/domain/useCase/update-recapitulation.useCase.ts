import { IRecapitulationModel } from '../model/IModel';
import { AbsensiRepository } from '../repository/absensi.repository';

export class UpdateRecapitulationUseCase {
  constructor(private masterRepo: AbsensiRepository) {}

  async invoke(id: string, data: IRecapitulationModel) {
    return this.masterRepo.updateRecapitulation(id, data);
  }
}
