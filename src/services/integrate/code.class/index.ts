export const getCodeClass = async (): Promise<any> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/code_class`);
    if (res.ok) {
      const classes = await res.json();
      return classes;
    }
  } catch (error) {
    console.log(error);
  }
  return null;
};

export const getCodeClassByClassName = async (className: string): Promise<any> => {
  try {
    if (className) {
      const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/class/${className}`);
      if (res.ok) {
        const codeClass = await res.json();
        return codeClass;
      }
    }
  } catch (error) {
    console.log(error);
  }

  return null;
};
