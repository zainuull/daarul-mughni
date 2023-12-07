import { IRecapitulationModel } from '../model/IModel';
import { AbsensiRepository } from '../repository/absensi.repository';

export class CreateRecapitulationUseCase {
  constructor(private masterRepo: AbsensiRepository) {}

  async invoke(data: IRecapitulationModel) {
    return this.masterRepo.createRecapitulation(data);
  }
}
