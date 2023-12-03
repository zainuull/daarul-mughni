
import { atom, useAtom } from 'jotai';
import { IStudentModel } from '../../domain/model/IModel';

const value: IStudentModel = {};
const store = atom(value);

const useResultFilter = () => useAtom(store);

export default useResultFilter;
