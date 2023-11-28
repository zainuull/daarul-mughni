export const getUser = async (): Promise<any> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/user`);
    if (res.ok) {
      const users = await res.json();
      return users;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getUserByEmail = async (email: string): Promise<any> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/user/${email}`);
    if (res.ok) {
      const users = await res.json();
      return users;
    }
  } catch (error) {
    console.log(error);
  }
}
