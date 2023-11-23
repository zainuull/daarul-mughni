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
