import { IClassTypeDataModel } from '../model/IModel';
import { ClassTypeRepository } from '../repository/class-type.repository';

export class CreateClassTypeUseCase {
  constructor(private masterRepo: ClassTypeRepository) {}

  async invoke(data: IClassTypeDataModel) {
    return this.masterRepo.createClassType(data);
  }
}
