'use client';
import Select from 'react-select';
import { useEffect, useState } from 'react';
import { getTeachers } from '@/services/api';
import useDataEvents from '../../../store/store.events';

const DropdownTeacher = () => {
  const [data, setData] = useDataEvents();
  const [teacher, setTeacher] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getTeachers();
      setTeacher(res?.data);
    };
    fetchData();
  }, []);

  const nOption = teacher?.map((obj: { id: string; name: string }) => ({
    value: obj?.id,
    label: `${obj?.name}`,
  }));

  const handle = (option: any) => {
    setData({
      ...data,
      person_responsible: option?.label,
    });
  };

  return (
    <Select
      closeMenuOnSelect={true}
      options={nOption}
      value={nOption?.find((option) => option.label === data?.person_responsible) || ''}
      isClearable={true}
      onChange={handle}
      placeholder="Penanggung Jawab"
    />
  );
};

export default DropdownTeacher;
