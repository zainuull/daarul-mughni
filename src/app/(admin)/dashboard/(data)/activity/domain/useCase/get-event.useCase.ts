import { IEventQuery } from '../model/IModel';
import { EventRepostiry } from '../repository/event.repository';

export class GetEventsUseCase {
  constructor(private masterRepo: EventRepostiry) {}

  async invoke(query?: IEventQuery) {
    return this.masterRepo.getEvents(query);
  }
}
