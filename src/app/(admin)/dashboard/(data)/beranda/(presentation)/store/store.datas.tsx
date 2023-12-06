import { atom, useAtom } from 'jotai';
import { IBerandaModel } from '../../domain/model/IModel';

const value: any = {};
const store = atom(value);

const useStoreDatas = () => useAtom(store);

export default useStoreDatas;
