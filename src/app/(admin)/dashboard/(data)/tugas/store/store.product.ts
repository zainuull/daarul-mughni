import { atom, useAtom } from 'jotai';

const store = atom({
  id: '',
  name_product: '',
  total_buy: '',
  price_produt: '',
  total_price_product: '',
});

const useDataProduct = () => useAtom(store);

export default useDataProduct;
