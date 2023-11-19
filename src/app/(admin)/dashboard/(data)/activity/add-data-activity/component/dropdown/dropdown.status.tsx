import useForm from '@/app/(admin)/dashboard/store/store.status';
import { ICategory } from '@/model/event.model';
import { useEffect, useState } from 'react';
import Select from 'react-select';

const DropdownStatus = () => {
  const [form, setForm] = useForm();
  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await fetch('/api/categories');
      const catName = await res.json();
      setCategories(catName);
    };
    fetchCategories();
  }, []);

  const statusOption = [
    { value: 'Pending', label: 'Pending' },
    { value: 'Selesai', label: 'Selesai' },
  ];

  const handleStatus = (option: any) => {
    setForm({
      ...form,
      status: option.label,
    });
  };

  return (
    <Select
      closeMenuOnSelect={true}
      options={statusOption}
      value={statusOption.find((option) => option.label === form?.status) || ''}
      isClearable={true}
      onChange={handleStatus}
      placeholder="Pilih Status"
    />
  );
};

export default DropdownStatus;
