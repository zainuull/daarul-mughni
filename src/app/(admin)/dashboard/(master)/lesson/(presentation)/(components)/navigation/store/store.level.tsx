import { atom, useAtom } from 'jotai';
import { ILessonModel } from '../../../../domain/model/IModel';

const value: ILessonModel = {};

//this form to use access data for every component
const store = atom(value);

const useStoreLevel = () => useAtom(store);

export default useStoreLevel;
