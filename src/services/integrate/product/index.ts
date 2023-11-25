export const getProduct = async (): Promise<any> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/product`);
    if (res.ok) {
      const products = await res.json();
      return products;
    }
  } catch (error) {
    console.log(error);
  }

  return null;
};

export const postPoduct = async (data: any): Promise<any> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/product`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if(res.ok) {
      const products = await res.json();
      return products;
    }
  } catch (error) {
    console.log(error);
  }

  return null;
};
