import { IClassTypeDataModel } from '../model/IModel';
import { ClassTypeRepository } from '../repository/class-type.repository';

export class UpdateClassTypeUseCase {
  constructor(private masterRepo: ClassTypeRepository) {}

  async invoke(id: string, data: IClassTypeDataModel) {
    return this.masterRepo.updateClassType(id, data);
  }
}
