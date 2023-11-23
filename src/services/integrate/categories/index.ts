import { ICategory } from '@/model/model';

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
