import { IClassDataModel } from '../model/IModel';
import { ClassRepository } from '../repository/class.repository';

export class UpdateClassUseCase {
  constructor(private masterRepo: ClassRepository) {}

  async invoke(id: string, data: IClassDataModel) {
    return this.masterRepo.updateClass(id, data);
  }
}
