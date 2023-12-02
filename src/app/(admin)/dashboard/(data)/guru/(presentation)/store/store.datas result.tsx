import { atom, useAtom } from 'jotai';
const value: any = {};
const store = atom(value);

const useStoreDatasResult = () => useAtom(store);

export default useStoreDatasResult;
