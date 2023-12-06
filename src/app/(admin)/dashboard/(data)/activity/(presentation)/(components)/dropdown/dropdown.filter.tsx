'use client';
import Select, { StylesConfig } from 'react-select';
import { useEffect, useState } from 'react';
import useDataEvents from '../../store/store.events';
import { getCategories } from '@/services/api';

export const DropdownFilter = () => {
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
      filter_by: option?.label,
    });
  };

  // Define custom styles for the dropdown
  const customStyles: StylesConfig = {
    control: (provided) => ({
      ...provided,
      backgroundColor: '#f1f5f9',
      borderColor: 'black',
    }),
  };

  return (
    <Select
      closeMenuOnSelect={true}
      options={categoryOption}
      value={categoryOption.find((option) => option.label === data?.filter_by) || ''}
      isClearable={true}
      onChange={handleCategory}
      styles={customStyles}
      placeholder="Kategori"
    />
  );
};

