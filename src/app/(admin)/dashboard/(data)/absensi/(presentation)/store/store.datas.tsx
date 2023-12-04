import { atom, useAtom } from 'jotai';
import { IAbsensiModel } from '../../domain/model/IModel';

const value: IAbsensiModel = {};
const store = atom(value);

const useStoreDatas = () => useAtom(store);

export default useStoreDatas;
