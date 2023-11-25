
export const getLessons = async (): Promise<any> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/lesson`);
    if (res.ok) {
      const lessons = await res.json();
      return lessons;
    }
  } catch (error) {
    console.log(error);
  }
  return null;
};

export const getLessonsByLevelName = async (levelName: string): Promise<any> => {
  try {
    if (levelName) {
      const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/level/${levelName}`);
      if (res.ok) {
        const lessons = await res.json();
        return lessons;
      }
    }
  } catch (error) {
    console.log(error);
  }

  return null;
};

