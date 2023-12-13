export const getPosition = async (): Promise<any> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/role`);
    if (res.ok) {
      const positions = await res.json();
      return positions;
    }
  } catch (error) {
    console.log(error);
  }

  return null;
};
