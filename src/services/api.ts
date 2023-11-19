import { ICategory } from '@/model/event.model';

export const getCategories = async (): Promise<ICategory> => {
  try {
    const res = await fetch(`${process.env.NEXT_BASE_URL}/api/categories`);

    if (res.ok) {
      const categories = await res.json();
      return categories;
    }
  } catch (error) {
    console.log(error);
  }

  return null;
};

export const getEvents = async (): Promise<any> => {
  try {
    const res = await fetch(`${process.env.NEXT_BASE_URL}/api/events`);

    if (res.ok) {
      const events = await res.json();
      return events;
    }
  } catch (error) {
    console.log(error);
  }

  return null;
};
