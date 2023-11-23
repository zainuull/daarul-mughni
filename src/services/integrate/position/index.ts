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
