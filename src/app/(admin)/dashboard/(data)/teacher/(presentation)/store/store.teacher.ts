import { atom, useAtom } from 'jotai';

interface TeacherData {
  id: string;
  name: string;
  date_of_birth: string;
  telp: string;
  email: string;
  nip: string;
  ijazah: string;
  positionName: string;
  period_work: string;
  gender: string;
  age: string;
  status: string;
  filter_by: string;
  public_id: string;
  imageUrl: string;
  role: string;
}

const store = atom<TeacherData>({
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
  filter_by: '',
  public_id: '',
  imageUrl: '',
  role: 'teacher',
});

const useDataTeacher = () => useAtom(store);

export default useDataTeacher;
