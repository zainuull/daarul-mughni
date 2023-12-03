import { IEventDataModel } from '../model/IModel';
import { EventRepostiry } from '../repository/event.repository';

export class CreateEventUseCase {
  constructor(private masterRepo: EventRepostiry) {}

  async invoke(data: IEventDataModel) {
    return this.masterRepo.createEvent(data);
  }
}
