'use client';
import Select from 'react-select';
import useDataStudent from '../../store/store.student';
import { useEffect, useState } from 'react';
import { getClassTypeByClassName } from '@/services/api';

export const DropdownClassType = () => {
  const [studentForm, setStudentForm] = useDataStudent();
  const [classType, setClassType] = useState([]);

  useEffect(() => {
    fetchData();
  }, [studentForm?.className]);

  const fetchData = () => {
    getClassTypeByClassName(studentForm?.className).then((res) => {
      setClassType(res?.data?.classType);
    });
  };

  // Check if datas is an array before using map
  const Option = Array.isArray(classType)
    ? classType.map((obj: { classTypeName: string; id: string }) => ({
        value: obj?.id,
        label: obj?.classTypeName,
      }))
    : [];

  const handleClass = (option: any) => {
    setStudentForm({
      ...studentForm,
      classTypeName: option?.label,
    });
  };

  return (
    <Select
      closeMenuOnSelect={true}
      options={Option}
      value={Option?.find((option) => option.label === studentForm?.classTypeName) || ''}
      isClearable={true}
      onChange={handleClass}
      isDisabled={studentForm?.className ? false : true}
      placeholder="MTs-01-1A"
    />
  );
};
