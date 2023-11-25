import { IAbsensiDataModel, IAbsensiModel } from '@/model/model';

export const getAbsensi = async (): Promise<IAbsensiModel> => {
  try {
    const data = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/absensi`);
    if (data.ok) {
      const absensi = await data.json();
      return absensi;
    }
  } catch (error) {
    console.log(error);
  }
  return null;
};

export const getAbsensiById = async (id: string): Promise<IAbsensiModel> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/absensi/${id}`);
    if (res.ok) {
      const absensi = await res.json();
      return absensi;
    }
  } catch (error) {
    console.log(error);
  }
  return null;
};

export const getAbsensiByClass = async (className: string): Promise<IAbsensiModel> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/class/${className}`);

    if (res.ok) {
      const absensi = await res.json();
      return absensi;
    }
  } catch (error) {
    console.log(error);
  }
  return null;
};

export const postAbsensi = async (data: IAbsensiDataModel): Promise<IAbsensiModel> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/absensi`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      const absensi = await res.json();
      return absensi;
    }
  } catch (error) {
    console.log(error);
  }

  return null;
};

export const deleteAbsensi = async (id: string): Promise<IAbsensiModel> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/absensi/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      },
    });
  } catch (error) {
    console.log(error);
  }
  return null;
};

export const updateAbsensi = async (
  id: string,
  data: IAbsensiDataModel
): Promise<IAbsensiModel> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/absensi/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      const absensi = await res.json();
      return absensi;
    }
  } catch (error) {
    console.log(error);
  }

  return null;
};
