import { ICategory } from '@/model/model';

export const getCategories = async (): Promise<ICategory> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/categories`);

    if (res.ok) {
      const categories = await res.json();
      return categories;
    }
  } catch (error) {
    console.log(error);
  }

  return null;
};
