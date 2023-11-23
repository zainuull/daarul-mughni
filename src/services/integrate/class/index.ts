import { IClassModel } from "@/model/class";

export const getClass = async (): Promise<IClassModel> => {
  try {
    const res = await fetch('http://localhost:3000/api/class');
    if (res.ok) {
      const classes = await res.json();
      return classes;
    }
  } catch (error) {
    console.log(error);
  }

  return null;
};


export const getClassByLevel = async (levelName: string): Promise<any> => {
  try {
    if (levelName) {
      const res = await fetch(`http://localhost:3000/api/level/${levelName}`);
      if (res.ok) {
        const classes = await res.json();
        return classes;
      }
    }
  } catch (error) {
    console.log(error);
  }
  return null;
};