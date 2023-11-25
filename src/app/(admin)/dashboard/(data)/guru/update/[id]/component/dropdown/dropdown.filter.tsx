'use client';
import Select, { StylesConfig } from 'react-select';
import useDataTeacher from '../../../../store/store.teacher';
import { useEffect, useState } from 'react';
import { getPosition } from '@/services/api';

const DropdownFilter = () => {
  const [data, setData] = useDataTeacher();
  const [position, setPosition] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getPosition();
      setPosition(res?.data);
    };
    fetchData();
  }, []);

  const positionOption = position?.map((obj: { positionName: string; id: string }) => ({
    value: obj?.id,
    label: obj?.positionName,
  }));

  const handlePosition = (option: any) => {
    setData({
      ...data,
      positionName: option?.label,
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
      options={positionOption}
      value={positionOption.find((option) => option.label === data?.positionName) || ''}
      isClearable={true}
      onChange={handlePosition}
      styles={customStyles}
      placeholder="Filter berdasarkan jabatan"
    />
  );
};

export default DropdownFilter;
