import { useEffect, useState } from 'react';
import Select from 'react-select';
import useDataEvents from '../../store/store.events';
import { getCategories } from '@/services/api';

export const DropdownCategory = () => {
  const [data, setData] = useDataEvents();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await getCategories();
      setCategories(res?.data);
    };
    fetchCategories();
  }, []);

  const categoryOption = categories?.map((obj: any) => ({
    value: obj?.id,
    label: obj?.catName,
  }));

  const handleCategory = (option: any) => {
    setData({
      ...data,
      selected_category: option?.label,
    });
  };

  return (
    <Select
      closeMenuOnSelect={true}
      options={categoryOption}
      value={categoryOption.find((option) => option.label === data?.selected_category) || ''}
      isClearable={true}
      onChange={handleCategory}
      placeholder="Pilih Kategori"
    />
  );
};
