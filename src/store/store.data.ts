import { IEventModel } from '@/model/event.model';
import { atom, useAtom } from 'jotai';
const value : IEventModel = {};
//this form to use access data for every component
const store = atom(value);

const useStoreDatas = () => useAtom(store);

export default useStoreDatas;
