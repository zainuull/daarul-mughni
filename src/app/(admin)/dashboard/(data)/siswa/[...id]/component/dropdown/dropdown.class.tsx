'use client';
import Select from 'react-select';
import useDataStudent from '../../../store/store.student';
import { useEffect, useState } from 'react';
import { getClass } from '@/services/api';

const DropdownClass = () => {
  const [data, setData] = useDataStudent();
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getClass();
      setClasses(res?.data);
    };
    fetchData();
  }, []);

  const classOption = classes?.map((obj: any) => ({
    value: obj?.id,
    label: obj?.className,
  }));

  const handleClass = (option: any) => {
    setData({
      ...data,
      className: option?.label,
    });
  };

  return (
    <Select
      closeMenuOnSelect={true}
      options={classOption}
      value={classOption?.find((option) => option.label === data?.className) || ''}
      isClearable={true}
      onChange={handleClass}
      placeholder="MTs VII"
    />
  );
};

export default DropdownClass;
