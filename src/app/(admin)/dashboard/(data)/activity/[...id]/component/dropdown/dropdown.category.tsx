import useForm from '@/app/(admin)/dashboard/store/store.status';
import { ICategory } from '@/model/event.model';
import { useEffect, useState } from 'react';
import Select from 'react-select';

const DropdownCategory = () => {
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

  const categoryOption = categories.map((obj: any) => ({
    value: obj?.id,
    label: obj?.catName,
  }));

  const handleCategory = (option: any) => {
    setForm({
      ...form,
      selected_category: option?.label,
    });
  };

  return (
    <Select
      closeMenuOnSelect={true}
      options={categoryOption}
      value={categoryOption.find((option) => option.label === form?.selected_category) || ''}
      isClearable={true}
      onChange={handleCategory}
      placeholder="Pilih Kategori"
    />
  );
};

export default DropdownCategory;
