import { atom, useAtom } from 'jotai';
import { IEventModel } from '../../domain/model/IModel';

const value: IEventModel = {};
const store = atom(value);

const useStoreDatas = () => useAtom(store);

export default useStoreDatas;
