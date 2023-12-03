'use client';
import Select from 'react-select';
import useDataTeacher from '../../store/store.teacher';
import { useEffect, useState } from 'react';
import { getPosition } from '@/services/api';

export const DropdownPosition = () => {
  const [data, setData] = useDataTeacher();
  const [position, setPosition] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getPosition();
      setPosition(res?.data);
    };
    fetchData();
  }, []);

  const positionOption = position?.map((obj: any) => ({
    value: obj?.id,
    label: obj?.positionName,
  }));

  const handlePosition = (option: any) => {
    setData({
      ...data,
      positionName: option?.label,
    });
  };

  return (
    <Select
      closeMenuOnSelect={true}
      options={positionOption}
      value={positionOption?.find((option) => option.label === data?.positionName) || ''}
      isClearable={true}
      onChange={handlePosition}
      placeholder="Pimpinan"
    />
  );
};

