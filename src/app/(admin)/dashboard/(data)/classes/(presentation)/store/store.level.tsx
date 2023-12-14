import { atom, useAtom } from 'jotai';
import { IClassModel } from '../../domain/model/IModel';

const value: IClassModel = {};

//this form to use access data for every component
const store = atom(value);

const useStoreLevel = () => useAtom(store);

export default useStoreLevel;
