import { IEventDataModel } from '../model/IModel';
import { EventRepostiry } from '../repository/event.repository';

export class UpdateEventUseCase {
  constructor(private masterRepo: EventRepostiry) {}

  async invoke(id: string, data: IEventDataModel) {
    return this.masterRepo.updateEvent(id, data);
  }
}
