import { atom, useAtom } from 'jotai';
import { ITeacherModel } from '../../domain/model/IModel';

const value: ITeacherModel = {};

//this form to use access data for every component
const store = atom(value);

const useStoreRole = () => useAtom(store);

export default useStoreRole;
