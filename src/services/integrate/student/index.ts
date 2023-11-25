import { IStudentDataModel, IStudentModel, ITeacherDataModel } from '@/model/model';

export const getStudent = async (): Promise<IStudentModel> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/students`, {
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
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/students/${id}`, {
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

export const getStudentByClass = async (className: string): Promise<any> => {
  try {
    if (className) {
      const res = await fetch(`http://localhost:3000/api/class/${className}`, {
        next: {
          revalidate: 0,
        },
      });
      if (res.ok) {
        const students = await res.json();
        return students;
      }
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
