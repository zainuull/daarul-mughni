import { atom, useAtom } from 'jotai';

const store = atom({
  title: '',
  description: '',
  person_responsible: '',
  telp_person_responsible: '',
  place_event: '',
  date_event: '',
  cooperation: '',
  imageUrl: '',
  publicId: '123',
  selected_category: '',
  total_cost: '',
  status:'',
});

const useForm = () => useAtom(store);

export default useForm;
