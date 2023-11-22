import {
  ICategory,
  IEventDataModel,
  IStudentDataModel,
  IStudentModel,
  ITeacherDataModel,
  ITeacherModel,
} from '@/model/event.model';

export const getCategories = async (): Promise<ICategory> => {
  try {
    const res = await fetch(`http://localhost:3000/api/categories`);

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

export const getEvents = async (): Promise<any> => {
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

export const getEventsByCategories = async (category: string): Promise<any> => {
  try {
    const res = await fetch(`http://localhost:3000/api/categories/${category}`, {
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

export const postEvent = async (data: IEventDataModel): Promise<any> => {
  try {
    const res = await fetch('http://localhost:3000/api/events', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data || ''),
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

// Teacher API

export const getPosition = async (): Promise<any> => {
  try {
    const res = await fetch('http://localhost:3000/api/position');
    if (res.ok) {
      const positions = await res.json();
      return positions;
    }
  } catch (error) {
    console.log(error);
  }

  return null;
};

export const getTeachers = async (): Promise<ITeacherModel> => {
  try {
    const res = await fetch(`http://localhost:3000/api/teachers`, {
      next: {
        revalidate: 0,
      },
    });

    if (res.ok) {
      const teachers = await res.json();
      return teachers;
    }
  } catch (error) {
    console.log(error);
  }

  return null;
};

export const getTeachersById = async (id: string): Promise<ITeacherModel> => {
  try {
    const res = await fetch(`http://localhost:3000/api/teachers/${id}`, {
      next: {
        revalidate: 0,
      },
    });

    if (res.ok) {
      const teachers = await res.json();
      return teachers;
    }
  } catch (error) {
    console.log(error);
  }
  return null;
};

export const getTeacherByPosition = async (positionName: string): Promise<ITeacherModel> => {
  try {
    const res = await fetch(`http://localhost:3000/api/position/${positionName}`, {
      next: {
        revalidate: 0,
      },
    });
    if (res.ok) {
      const teachers = await res.json();
      return teachers;
    }
  } catch (error) {
    console.log(error);
  }
  return null;
};

export const postTeacher = async (data: ITeacherDataModel): Promise<ITeacherModel> => {
  try {
    const res = await fetch('http://localhost:3000/api/teachers', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data || ''),
    });

    if (res.ok) {
      const teachers = await res.json();
      return teachers;
    }
  } catch (error) {
    console.log(error);
  }

  return null;
};

export const deleteTeacher = async (id: string): Promise<ITeacherDataModel> => {
  try {
    const res = await fetch(`http://localhost:3000/api/teachers/${id}`, {
      next: {
        revalidate: 0,
      },
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      },
    });
    if (res.ok) {
      const teachers = await res.json();
      return teachers;
    }
  } catch (error) {
    console.log(error);
  }
  return null;
};

export const updateTeacher = async (id: string, data: ITeacherDataModel): Promise<any> => {
  try {
    const res = await fetch(`http://localhost:3000/api/teachers/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data || ''),
    });

    if (res.ok) {
      const teachers = await res.json();
      return teachers;
    }
  } catch (error) {
    console.log(error);
  }
  return null;
};

// Student
export const getLevel = async (): Promise<any> => {
  try {
    const res = await fetch('http://localhost:3000/api/level');
    if (res.ok) {
      const level = await res.json();
      return level;
    }
  } catch (error) {
    console.log(error);
  }

  return null;
};

export const getClass = async (): Promise<any> => {
  try {
    const res = await fetch('http://localhost:3000/api/class');
    if (res.ok) {
      const classes = await res.json();
      return classes;
    }
  } catch (error) {
    console.log(error);
  }

  return null;
};

export const getStudent = async (): Promise<IStudentModel> => {
  try {
    const res = await fetch('http://localhost:3000/api/students', {
      next: {
        revalidate: 0,
      },
    });
    if (res.ok) {
      const students = await res.json();
      return students;
    }
  } catch (error) {
    console.log(error);
  }
  return null;
};

export const getStudentById = async (id: string): Promise<IStudentModel> => {
  try {
    const res = await fetch(`http://localhost:3000/api/students/${id}`, {
      next: {
        revalidate: 0,
      },
    });
    if (res.ok) {
      const students = await res.json();
      return students;
    }
  } catch (error) {
    console.log(error);
  }

  return null;
};

export const getStudentByClass = async (className: string): Promise<IStudentModel> => {
  try {
    const res = await fetch(`http://localhost:3000/api/class/${className}`, {
      next: {
        revalidate: 0,
      },
    });
    if (res.ok) {
      const students = await res.json();
      return students;
    }
  } catch (error) {
    console.log(error);
  }
  return null;
};

export const postStudent = async (data: ITeacherDataModel): Promise<IStudentModel> => {
  try {
    const res = await fetch('http://localhost:3000/api/students', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      const students = await res.json();
      return students;
    }
  } catch (error) {
    console.log(error);
  }
  return null;
};

export const deleteStudent = async (id: string): Promise<IStudentDataModel> => {
  try {
    const res = await fetch(`http://localhost:3000/api/students/${id}`, {
      next: {
        revalidate: 0,
      },
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      },
    });
    if (res.ok) {
      const students = await res.json();
      return students;
    }
  } catch (error) {
    console.log(error);
  }

  return null;
};

export const updateStudent = async (
  id: string,
  data: IStudentDataModel
): Promise<IStudentModel> => {
  try {
    const res = await fetch(`http://localhost:3000/api/students/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      const students = await res.json();
      return students;
    }
  } catch (error) {
    console.log(error);
  }
  return null;
};
