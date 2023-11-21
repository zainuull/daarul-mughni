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
  guardian_email: '',
  status_payment: '',
  address: '',
  className: '',
});

const useDataStudent = () => useAtom(store);

export default useDataStudent;
