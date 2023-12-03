
import { atom, useAtom } from 'jotai';
import { IEventModel } from '../../domain/model/IModel';

const value: any = {};
const store = atom(value);

const useResultFilter = () => useAtom(store);

export default useResultFilter;
