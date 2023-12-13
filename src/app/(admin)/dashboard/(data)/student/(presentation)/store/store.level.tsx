import { atom, useAtom } from 'jotai';
import { IStudentModel } from '../../domain/model/IModel';

const value: IStudentModel = {};

//this form to use access data for every component
const store = atom(value);

const useStoreLevel = () => useAtom(store);

export default useStoreLevel;
