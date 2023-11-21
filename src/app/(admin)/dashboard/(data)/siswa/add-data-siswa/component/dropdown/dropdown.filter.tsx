'use client';
import Select, { StylesConfig } from 'react-select';
import { useEffect, useState } from 'react';
import useDataStudent from '../../../store/store.student';
import { getClass } from '@/services/api';

const DropdownFilter = () => {
  const [data, setData] = useDataStudent();
  const [className, setClassName] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getClass();
      setClassName(res?.data);
    };
    fetchData();
  }, []);

  const classNameOption = className?.map((obj: { className: string; id: string }) => ({
    value: obj?.id,
    label: obj?.className,
  }));

  const handlePosition = (option: any) => {
    setData({
      ...data,
      className: option?.label,
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
      options={classNameOption}
      value={classNameOption.find((option) => option.label === data?.className) || ''}
      isClearable={true}
      onChange={handlePosition}
      styles={customStyles}
      placeholder="Filter berdasarkan kelas"
    />
  );
};

export default DropdownFilter;
