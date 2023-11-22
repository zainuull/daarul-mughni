import { atom, useAtom } from 'jotai';
const value: any = {};
const store = atom(value);

const useStoreResultStudent = () => useAtom(store);

export default useStoreResultStudent;
