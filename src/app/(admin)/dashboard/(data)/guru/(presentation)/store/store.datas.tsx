import { atom, useAtom } from 'jotai';
import { ITeacherModel } from '@/model/teacher';

const value: ITeacherModel = {};

//this form to use access data for every component
const store = atom(value);

const useStoreDatas = () => useAtom(store);

export default useStoreDatas;
