export const getLevel = async (): Promise<any> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/level`);
    if (res.ok) {
      const level = await res.json();
      return level;
    }
  } catch (error) {
    console.log(error);
  }

  return null;
};
