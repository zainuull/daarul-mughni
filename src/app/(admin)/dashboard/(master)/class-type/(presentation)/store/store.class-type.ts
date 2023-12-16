import { atom, useAtom } from 'jotai';

const store = atom({
  id: '',
  name: '',
  className: '',
});

const useData = () => useAtom(store);

export default useData;
