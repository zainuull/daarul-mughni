import { atom, useAtom } from 'jotai';

const store = atom(false);

const useStatus = () => useAtom(store);

export default useStatus;
