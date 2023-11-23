import { atom, useAtom } from 'jotai';
const value: any = {};
const store = atom(value);

const useStoreResultAbsensi = () => useAtom(store);

export default useStoreResultAbsensi;
