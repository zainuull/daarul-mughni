import { IClassQuery } from '../model/IModel';
import { ClassRepository } from '../repository/class.repository';

export class GetClassUseCase {
  constructor(private masterRepo: ClassRepository) {}

  async invoke(query?: IClassQuery) {
    return this.masterRepo.getClass(query);
  }
}
