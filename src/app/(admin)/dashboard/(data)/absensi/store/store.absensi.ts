import { atom, useAtom } from 'jotai';

const store = atom({
  id: '',
  levelName: '',
  classTypeName: '',
  className: '',
  teacher: '',
  lesson: '',
  start_time: '',
  end_time: '',
  filter_by_level: '',
  filter_by_class: '',
  status: '',
});

const useDataAbsensi = () => useAtom(store);

export default useDataAbsensi;
