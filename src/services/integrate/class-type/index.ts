export const getClassType = async (): Promise<any> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/class-type`);
    if (res.ok) {
      const classes = await res.json();
      return classes;
    }
  } catch (error) {
    console.log(error);
  }
  return null;
};

export const getClassTypeByClassName = async (string: string): Promise<any> => {
  try {
    if (string) {
      const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/class/${string}`);
      if (res.ok) {
        const classType = await res.json();
        return classType;
      }
    }
  } catch (error) {
    console.log(error);
  }

  return null;
};
