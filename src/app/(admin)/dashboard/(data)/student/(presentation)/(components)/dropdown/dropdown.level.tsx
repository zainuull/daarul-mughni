'use client';
import Select from 'react-select';
import useDataStudent from '../../store/store.student';
import { useEffect, useState } from 'react';
import { getLevel } from '@/services/api';

export const DropdownLevel = () => {
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
      levelName: option?.label,
    });
  };

  return (
    <Select
      closeMenuOnSelect={true}
      options={levelOption}
      value={levelOption.find((option) => option.label === data?.levelName) || ''}
      isClearable={true}
      onChange={handleLevel}
      placeholder="MTs"
    />
  );
};
