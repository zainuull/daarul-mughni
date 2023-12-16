import { IClassTypeQuery } from '../model/IModel';
import { ClassTypeRepository } from '../repository/class-type.repository';

export class GetClassTypeUseCase {
  constructor(private masterRepo: ClassTypeRepository) {}

  async invoke(query?: IClassTypeQuery) {
    return this.masterRepo.getClassType(query);
  }
}
