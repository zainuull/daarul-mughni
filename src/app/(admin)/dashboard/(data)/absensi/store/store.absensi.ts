import { atom, useAtom } from 'jotai';

const store = atom({
  id: '',
  name: '',
  date_of_birth: '',
  telp: '',
  email: '',
  nip: '',
  ijazah: '',
  positionName: '',
  period_work: '',
  gender: '',
  age: '',
  status: '',
});

const useDataAbsensi = () => useAtom(store);

export default useDataAbsensi;
