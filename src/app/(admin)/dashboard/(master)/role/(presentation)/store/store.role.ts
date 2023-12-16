import { atom, useAtom } from 'jotai';

const store = atom({
  id: '',
  name: '',
});

const useDataRole = () => useAtom(store);

export default useDataRole;
