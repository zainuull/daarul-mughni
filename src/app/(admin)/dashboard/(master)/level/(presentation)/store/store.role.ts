import { atom, useAtom } from 'jotai';

const store = atom({
  id: '',
  name: '',
});

const useDataLevel = () => useAtom(store);

export default useDataLevel;
