import { IEventDataModel, IEventModel, IEventQuery } from "../model/IModel";

export interface EventRepostiry {
  getEvents(query?: IEventQuery): Promise<IEventModel>;
  getEventsById(id: string): Promise<IEventDataModel>;
  getEventByCategories(category: string): Promise<IEventModel>;
  createEvent(data: IEventDataModel): Promise<IEventModel>;
  deleteEvent(id: string): Promise<IEventModel>;
  updateEvent(id: string, data: any): Promise<IEventModel>;
}