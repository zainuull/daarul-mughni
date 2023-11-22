'use client';
import Select, { StylesConfig } from 'react-select';
import { useEffect, useState } from 'react';
import useDataEvents from '../../../store/store.events';
import { ICategory } from '@/model/event.model';
import { getCategories } from '@/services/api';

const DropdownFilter = () => {
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

  // Define custom styles for the dropdown
  const customStyles: StylesConfig = {
    control: (provided) => ({
      ...provided,
      backgroundColor: '#f1f5f9',
      width: 300,
      borderColor: 'black',
    }),
  };

  return (
    <Select
      closeMenuOnSelect={true}
      options={categoryOption}
      value={categoryOption.find((option) => option.label === data?.selected_category) || ''}
      isClearable={true}
      onChange={handleCategory}
      styles={customStyles}
      placeholder="Filter berdasarkan Kategori"
    />
  );
};

export default DropdownFilter;
