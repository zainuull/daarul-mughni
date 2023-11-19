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

export const getEventsOnServer = async (): Promise<any> => {
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

export const getEventsOnClient = async (): Promise<any> => {
  try {
    const res = await fetch(`http://localhost:3000/api/events`, {
      next: {
        revalidate: 0,
      },
    });

    if (res.ok) {
      const events = await res.json();
      return events;
    }
  } catch (error) {
    console.log(error);
  }

  return null;
};

export const getEventsById = async (id: string): Promise<any> => {
  try {
    const res = await fetch(`http://localhost:3000/api/events/${id}`, {
      next: {
        revalidate: 0,
      },
    });

    if (res.ok) {
      const events = await res.json();
      return events;
    }
  } catch (error) {
    console.log(error);
  }

  return null;
};

export const deleteEvent = async (id: string): Promise<any> => {
  try {
    const res = await fetch(`http://localhost:3000/api/events/${id}`, {
      next: {
        revalidate: 0,
      },
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      },
    });

    if (res.ok) {
      const events = await res.json();
      return events;
    }
  } catch (error) {
    console.log(error);
  }

  return null;
};
