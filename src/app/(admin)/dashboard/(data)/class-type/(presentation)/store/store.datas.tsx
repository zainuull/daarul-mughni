import { atom, useAtom } from 'jotai';
import { IClassTypeModel } from '../../domain/model/IModel';

const value: IClassTypeModel = {};
const store = atom(value);

const useStoreDatas = () => useAtom(store);

export default useStoreDatas;
