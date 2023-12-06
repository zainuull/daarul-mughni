import { atom, useAtom } from 'jotai';

const value: any = {};
const store = atom(value);

const useStoreDatas = () => useAtom(store);

export default useStoreDatas;
