import { useState } from 'react';
import EventAPIDataSourceImpl from '../../data/api/event.data.source';
import { IEventDataModel, IEventModel, IEventQuery } from '../../domain/model/IModel';
import {
  CreateEventUseCase,
  DeleteEventUseCase,
  GetEventsByCategoryUseCase,
  GetEventsByIdUseCase,
  GetEventsUseCase,
  UpdateEventUseCase,
} from '../../domain/useCase/index';
import useStoreDatas from '../store/store.datas';
import useResultFilter from '../store/store.result.filter';

export default function ViewModel() {
  const [, setDatas] = useStoreDatas();
  const [, setResultFilter] = useResultFilter();
  const [detailEvent, setDetailEvent] = useState<IEventDataModel>();

  const eventDataSourceImpl = new EventAPIDataSourceImpl();

  const getEventsUseCase = new GetEventsUseCase(eventDataSourceImpl);
  const getEventsByIdUseCase = new GetEventsByIdUseCase(eventDataSourceImpl);
  const getEventByCategoriesUseCase = new GetEventsByCategoryUseCase(eventDataSourceImpl);
  const createEventUseCase = new CreateEventUseCase(eventDataSourceImpl);
  const deleteEventUseCase = new DeleteEventUseCase(eventDataSourceImpl);
  const updateEventUseCase = new UpdateEventUseCase(eventDataSourceImpl);

  async function getEvents(query?: IEventQuery) {
    setDatas(await getEventsUseCase.invoke(query));
  }

  async function getEventsById(id: string) {
    const res: any = await getEventsByIdUseCase.invoke(id);
    setDetailEvent(res?.data);
  }

  async function getEventByCategories(category: string) {
    setResultFilter(await getEventByCategoriesUseCase.invoke(category));
  }

  async function createEvent(data: IEventDataModel) {
    await createEventUseCase.invoke(data);
  }

  async function deleteEvent(id: string) {
    await deleteEventUseCase.invoke(id);
  }

  async function updateEvent(id: string, data: IEventDataModel) {
    await updateEventUseCase.invoke(id, data);
  }

  return {
    getEvents,
    getEventsById,
    getEventByCategories,
    createEvent,
    deleteEvent,
    updateEvent,
    detailEvent,
  };
}
