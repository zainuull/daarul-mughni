import { ITeacherDataModel, ITeacherModel } from '@/model/model';

export const getTeachers = async (): Promise<ITeacherModel> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/teachers`, {
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
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/teachers/${id}`, {
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
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/position/${positionName}`, {
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
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/teachers`, {
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
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/teachers/${id}`, {
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
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/teachers/${id}`, {
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
