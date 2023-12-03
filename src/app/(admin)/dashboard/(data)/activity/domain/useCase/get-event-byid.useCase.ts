import { EventRepostiry } from '../repository/event.repository';

export class GetEventsByIdUseCase {
  constructor(private masterRepo: EventRepostiry) {}

  async invoke(id: string) {
    return this.masterRepo.getEventsById(id);
  }
}
