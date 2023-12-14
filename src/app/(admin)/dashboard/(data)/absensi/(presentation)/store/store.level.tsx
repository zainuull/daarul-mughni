import { atom, useAtom } from 'jotai';

const value: any = {};

//this form to use access data for every component
const store = atom(value);

const useStoreLevel = () => useAtom(store);

export default useStoreLevel;
