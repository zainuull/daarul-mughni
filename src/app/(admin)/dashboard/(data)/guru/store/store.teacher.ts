import { atom, useAtom } from 'jotai';

const store = atom({
  name: '',
  date_of_birth: '',
  telp: '',
  email: '',
  nip: '',
  ijazah: '',
  level: '',
  period_work: '',
  gender: '',
  age: '',
  status: '',
});

const useDataTeacher = () => useAtom(store);

export default useDataTeacher;
