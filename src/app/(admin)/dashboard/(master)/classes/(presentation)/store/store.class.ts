import { atom, useAtom } from 'jotai';

const store = atom({
  id: '',
  name: '',
  levelName: '',
});

const useDataClass = () => useAtom(store);

export default useDataClass;
