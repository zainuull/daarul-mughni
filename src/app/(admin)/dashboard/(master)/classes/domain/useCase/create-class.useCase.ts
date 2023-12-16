import { IClassDataModel } from '../model/IModel';
import { ClassRepository } from '../repository/class.repository';

export class CreateClassUseCase {
  constructor(private masterRepo: ClassRepository) {}

  async invoke(data: IClassDataModel) {
    return this.masterRepo.createClass(data);
  }
}
