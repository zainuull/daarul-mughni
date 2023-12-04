'use client';
import Select from 'react-select';
import useDataAbsensi from '../../store/store.absensi';
import { useEffect, useState } from 'react';
import { getClassTypeByClassName } from '@/services/api';

export const DropdownCodeClass = () => {
  const [data, setData] = useDataAbsensi();
  const [classType, setClassType] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getClassTypeByClassName(data?.className);

      setClassType(res?.data?.classType);
    };
    fetchData();
  }, [data?.className]);


  const Option = Array.isArray(classType)
    ? classType.map((obj: { id: string; classTypeName: string }) => ({
        value: obj?.id,
        label: obj?.classTypeName,
      }))
    : [];

  const handle = (option: any) => {
    setData({
      ...data,
      classTypeName: option?.label,
    });
  };

  return (
    <Select
      closeMenuOnSelect={true}
      options={Option}
      value={Option?.find((option) => option.label === data?.classTypeName) || ''}
      isClearable={true}
      onChange={handle}
      placeholder="MTs-01-1A"
    />
  );
};
