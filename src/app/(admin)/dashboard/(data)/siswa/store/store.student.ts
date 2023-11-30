import { atom, useAtom } from 'jotai';

const store = atom({
  id: '',
  name: '',
  date_of_birth: '',
  ijazah: '',
  gender: '',
  nisn: '',
  guardian_name: '',
  guardian_status: '',
  guardian_telp: '',
  status_payment: '',
  address: '',
  className: '',
  classTypeName: '',
  levelName: '',
  filter_by_level: '',
  filter_by_class: '',
});

const useDataStudent = () => useAtom(store);

export default useDataStudent;
