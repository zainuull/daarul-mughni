import { atom, useAtom } from 'jotai';

const store = atom({
  title: '',
  description: '',
  person_responsible: '',
  telp_person_responsible: '',
  place_event: '',
  date_event: '',
  section: '',
  imageUrl: '',
  publicId: '123',
  selected_category: '',
  total_cost: '',
  status: '',
  filter_by:'',
  public_id:'',
});

const useDataEvents = () => useAtom(store);

export default useDataEvents;
