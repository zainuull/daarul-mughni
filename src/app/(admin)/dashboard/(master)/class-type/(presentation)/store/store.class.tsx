import { atom, useAtom } from 'jotai';

const value: any = {};

//this form to use access data for every component
const store = atom(value);

const useStoreClass = () => useAtom(store);

export default useStoreClass;
