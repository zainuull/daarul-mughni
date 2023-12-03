import { atom, useAtom } from 'jotai';
import { IStudentModel } from '../../domain/model/IModel';

const value: IStudentModel = {};
const store = atom(value);

const useStoreDatas = () => useAtom(store);

export default useStoreDatas;
