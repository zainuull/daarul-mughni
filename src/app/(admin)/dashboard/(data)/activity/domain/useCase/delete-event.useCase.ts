import { EventRepostiry } from '../repository/event.repository';

export class DeleteEventUseCase {
  constructor(private masterRepo: EventRepostiry) {}

  async invoke(id: string) {
    return this.masterRepo.deleteEvent(id);
  }
}
