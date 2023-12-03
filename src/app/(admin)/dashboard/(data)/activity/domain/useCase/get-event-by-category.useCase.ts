import { EventRepostiry } from '../repository/event.repository';

export class GetEventsByCategoryUseCase {
  constructor(private masterRepo: EventRepostiry) {}

  async invoke(category: string) {
    return this.masterRepo.getEventByCategories(category);
  }
}
