'use client';
import Select, { StylesConfig } from 'react-select';
import { useEffect, useState } from 'react';
import useDataStudent from '../../store/store.student';
import { getLevel } from '@/services/api';

export const DropdownFilterLevel = () => {
  const [data, setData] = useDataStudent();
  const [level, setLevel] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getLevel();
      setLevel(res?.data);
    };
    fetchData();
  }, []);

  const levelOption = level?.map((obj: any) => ({
    value: obj?.id,
    label: obj?.levelName,
  }));

  const handleLevel = (option: any) => {
    setData({
      ...data,
      filter_by_level: option?.label,
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
      options={levelOption}
      value={levelOption.find((option) => option.label === data?.filter_by_level) || ''}
      isClearable={true}
      onChange={handleLevel}
      styles={customStyles}
      placeholder="Tingkatan"
    />
  );
};
