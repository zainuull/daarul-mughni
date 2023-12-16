import { atom, useAtom } from 'jotai';

const store = atom({
  id: '',
  name: '',
  levelName: '',
});

const useData = () => useAtom(store);

export default useData;
