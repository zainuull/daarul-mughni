import { atom, useAtom } from 'jotai';


const value: any = {};
const store = atom(value);

const useResultFilter = () => useAtom(store);

export default useResultFilter;
